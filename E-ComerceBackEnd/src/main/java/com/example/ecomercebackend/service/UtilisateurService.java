package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.dao.UtilisateurDao;
import com.example.ecomercebackend.service.Mail.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Random;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.mail.MessagingException;

@Service

public class UtilisateurService {
    @Autowired
    private UtilisateurDao utilisateurDao;
    @Autowired
    private MailService mailService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    public Utilisateur addUser(Utilisateur utilisateur) {
        String hashedPassword = passwordEncoder.encode(utilisateur.getPassword());
        utilisateur.setPassword(hashedPassword);
        Utilisateur existingUser = utilisateurDao.findByEmail(utilisateur.getEmail());
        if (existingUser != null) {
            throw new RuntimeException("Email is already in use");
        }
        utilisateurDao.save(utilisateur);
        return utilisateur;
    }

    //methode to sign in
    public Utilisateur signIn(String email, String password) {
        Utilisateur utilisateur = utilisateurDao.findByEmail(email);
        if (utilisateur != null && passwordEncoder.matches(password, utilisateur.getPassword())) {
            return utilisateur;
        }
        return null;
    }

    public Utilisateur matchEncoder(String email , String password){
        Utilisateur utilisateur = utilisateurDao.findByEmail(email);
        if (utilisateur != null && passwordEncoder.matches(password, utilisateur.getPassword())) {
            return utilisateur;
        }
        return null;
    }

    @Transactional
    public int signUp(String email, String password) {
        Utilisateur existingUser = utilisateurDao.findByEmail(email);
        if (existingUser == null) {
            Utilisateur newUser = new Utilisateur();
            newUser.setEmail(email);
            newUser.setAdresse("undefined");
            newUser.setImage("undefined");
            newUser.setNomComplet("undefined");
            newUser.setTelephone("undefined");
            newUser.setPassword(passwordEncoder.encode(password)); // Hash the password before storing
            utilisateurDao.save(newUser);
            return 1;
        } else {
            return -1;
        }
    }

// ...

    @Transactional
    public Utilisateur forgotPassword(String email) {
        Utilisateur user = utilisateurDao.findByEmail(email);
        if (user != null) {
            // Generate a token with 8 numbers
            Random random = new Random();
            String token = String.format("%08d", random.nextInt(100000000));
            user.setToken(token);
            utilisateurDao.save(user);

            // Store the token in the session

            // Send an email to the user with the token
            try {
                mailService.sendMail(email, "Password Reset", "Your reset token is: " + token);
            } catch (MessagingException e) {
                System.out.println("Error sending email: " + e.getMessage());
            }

            return user;
        } else {
            return null;
        }
    }





    public Utilisateur resetPassword(String token) {

    Utilisateur user = utilisateurDao.findByToken(token);

    if(user != null) {

        return user;
    }

    return null;
}
public Utilisateur changePassword(String token, String newPassword) {
    Utilisateur user = utilisateurDao.findByToken(token);
    if (user != null) {
        user.setPassword(passwordEncoder.encode(newPassword));
        user.setToken(null);
        utilisateurDao.save(user);
        return user;
    }
    return null;
}

    public Utilisateur updateUser(Utilisateur updatedUser) {
        Utilisateur existingUser = utilisateurDao.findByEmail(updatedUser.getEmail());
        if (existingUser != null) {
            if (updatedUser.getStoreName() != null || updatedUser.getNomComplet() != null || updatedUser.getInfoCarteBancaire() != null || updatedUser.getProduits() != null) {
                existingUser.setVendeur(true);
            }

            if (updatedUser.getStoreName() != null) {
                existingUser.setStoreName(updatedUser.getStoreName());
            }
            if (updatedUser.getEmail() != null) {
                existingUser.setEmail(updatedUser.getEmail());
            }
            if (updatedUser.getPassword() != null) {
                existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            }
            if (updatedUser.getNomComplet() != null) {
                existingUser.setNomComplet(updatedUser.getNomComplet());
            }
            if (updatedUser.getInfoCarteBancaire() != null) {
                existingUser.setInfoCarteBancaire(updatedUser.getInfoCarteBancaire());
            }
            if (updatedUser.getImage() != null) {
                existingUser.setImage(updatedUser.getImage());
            }
            if (updatedUser.getTelephone() != null) {
                existingUser.setTelephone(updatedUser.getTelephone());
            }
            if (updatedUser.getAdresse() != null) {
                existingUser.setAdresse(updatedUser.getAdresse());
            }
            if (updatedUser.getProduits() != null) {
                existingUser.setProduits(updatedUser.getProduits());
            }

            utilisateurDao.save(existingUser);
            return existingUser;
        }
        return null;
    }


    public Utilisateur addStock( Utilisateur utilisateur) {
    Utilisateur utilisateurAvecStock = utilisateurDao.findByEmail( utilisateur.getEmail());
    if (utilisateurAvecStock != null ) {
        utilisateurAvecStock.setStoreName(utilisateur.getStoreName());
        utilisateurAvecStock.setTelephone(utilisateur.getTelephone());
        utilisateurAvecStock.setAdresse(utilisateur.getAdresse());
        utilisateurAvecStock.setVendeur(true);
        utilisateurDao.save(utilisateurAvecStock);
        return utilisateurAvecStock;
    }
    return null;
}

    public Utilisateur uploadImage(String email, MultipartFile file) throws IOException {
        String baseUrl = "http://localhost:8080/uploaded-images/";
        String filename = StringUtils.cleanPath(file.getOriginalFilename());

        Path storageDirectory = Paths.get("path/to/your/directory"); // replace with your directory path
        if (!Files.exists(storageDirectory)) {
            Files.createDirectories(storageDirectory);
        }

        Path destinationPath = storageDirectory.resolve(Path.of(filename));
        file.transferTo(destinationPath);

        Utilisateur user = utilisateurDao.findByEmail(email);
        if (user != null) {
            user.setImage(baseUrl + filename);  // Save the URL instead of the path
            utilisateurDao.save(user);
        }
        return user;
    }

}





