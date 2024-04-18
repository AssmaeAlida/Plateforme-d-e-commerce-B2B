package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Administrateur;
import com.example.ecomercebackend.dao.AdministarteurDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdministarteurService {

   @Autowired
    AdministarteurDao administarteurDao;

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







}
