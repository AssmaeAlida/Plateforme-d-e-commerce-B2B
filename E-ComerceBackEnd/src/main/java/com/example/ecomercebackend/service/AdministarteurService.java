package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Administrateur;
import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.dao.AdministarteurDao;
import com.example.ecomercebackend.dao.CategorieDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdministarteurService {

    @Autowired
    AdministarteurDao administarteurDao;
    @Autowired
    CategorieDao categorieDao;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @Transactional
    public Administrateur signIn(String email, String password) {
        Administrateur administrateur = administarteurDao.findByEmail(email);
        if (administrateur != null && passwordEncoder.matches(password, administrateur.getPassword())) {
            return administrateur;
        }
        return null;
    }

    @Transactional
    public int signUp(String email, String password) {
        Administrateur existingUser = administarteurDao.findByEmail(email);
        if (existingUser == null) {
            Administrateur newUser = new Administrateur();
            newUser.setEmail(email);
            newUser.setPassword(passwordEncoder.encode(password)); // Hash the password before storing
            administarteurDao.save(newUser);
            return 1;
        } else {
            return -1;
        }
    }




    public Categorie addCategorie(String libelle, String description) {
        Categorie categorie = new Categorie();
        categorie.setLibelle(libelle);
        categorie.setDescription(description);
        return categorieDao.save(categorie);
    }

    public Administrateur addAdministrateur(Administrateur administrateur) {
        Administrateur existingAdmin = administarteurDao.findByEmail(administrateur.getEmail());
        if (existingAdmin != null) {
            throw new RuntimeException("Administrator with email " + administrateur.getEmail() + " already exists");
        }
        administrateur.setPassword(passwordEncoder.encode(administrateur.getPassword())); // Hash the password before storing
        return administarteurDao.save(administrateur);
    }

    public List<Administrateur> findAll() {
        return administarteurDao.findAll();
    }
}
