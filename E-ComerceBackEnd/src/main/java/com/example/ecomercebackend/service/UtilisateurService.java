package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.dao.UtilisateurDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UtilisateurService {
    @Autowired
    private UtilisateurDao utilisateurDao;

    public int addUser(Utilisateur utilisateur) {
         utilisateurDao.save(utilisateur);
            return 1;
    }
}
