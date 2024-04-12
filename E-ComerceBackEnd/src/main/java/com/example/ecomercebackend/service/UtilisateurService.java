package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.dao.UtilisateurDao;
import com.example.ecomercebackend.service.Mail.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import java.util.Random;
import java.util.UUID;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public int signUp(String email, String password) {
        Utilisateur existingUser = utilisateurDao.findByEmail(email);
        if (existingUser == null) {
            Utilisateur newUser = new Utilisateur();
            newUser.setEmail(email);
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


    public Utilisateur resetPassword(String token, String newPassword) {

    Utilisateur user = utilisateurDao.findByToken(token);
    if (user != null) {
        user.setPassword(newPassword);
        utilisateurDao.save(user);
        return user;
    }
    return null;
}


public Utilisateur updateUser(Long id, Utilisateur updatedUser) {
    Utilisateur existingUser = utilisateurDao.findById(id).orElse(null);
    if (existingUser == null) {
        return null; // User does not exist
    }
    Utilisateur userWithNewEmail = utilisateurDao.findByEmail(updatedUser.getEmail());
    if (userWithNewEmail != null && !userWithNewEmail.getId().equals(id)) {
        return null; // Email is already in use
    }
    existingUser.setNonStore(updatedUser.getNonStore());
    existingUser.setDateInscription(updatedUser.getDateInscription());
    existingUser.setEmail(updatedUser.getEmail());
    existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
    existingUser.setNomComplet(updatedUser.getNomComplet());
    existingUser.setInfoCarteBancaire(updatedUser.getInfoCarteBancaire());
    existingUser.setProduits(updatedUser.getProduits());

    utilisateurDao.save(existingUser);
    return existingUser;
}




}
