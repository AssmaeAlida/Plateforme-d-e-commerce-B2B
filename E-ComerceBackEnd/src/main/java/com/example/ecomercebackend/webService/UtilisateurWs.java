package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ecomerce-backend/Utilisateur")
public class UtilisateurWs {

    @Autowired
    private UtilisateurService utilisateurService;
    @PostMapping("/")
    public int addUser(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.addUser(utilisateur);
    }
}
