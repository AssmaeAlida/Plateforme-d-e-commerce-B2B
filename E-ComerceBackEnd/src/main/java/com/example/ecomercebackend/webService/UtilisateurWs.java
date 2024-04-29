package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/ecomerce-backend/Utilisateur")
public class UtilisateurWs {

    @Autowired
    private UtilisateurService utilisateurService;



    @PostMapping("/")
    public Utilisateur addUser(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.addUser(utilisateur);
    }

    @PostMapping("/signIn/email/{email}/password/{password}")
    public Utilisateur signIn(@PathVariable String email,@PathVariable String password) {
        return utilisateurService.signIn(email, password);
    }

    @PostMapping("/signUp/email/{email}/password/{password}")

    public int signUp(@PathVariable String email,@PathVariable String password) {
        return utilisateurService.signUp(email, password);
    }



    @PostMapping("/forgotPassword/email/{email}")
    @Transactional
    public Utilisateur forgotPassword(@PathVariable String email ) {
        return utilisateurService.forgotPassword(email);
    }

    @PostMapping("/changePassword/token/{token}/password/{password}")
    @Transactional
    public Utilisateur changePassword(@PathVariable String token,@PathVariable String password) {
        return utilisateurService.changePassword(token,password);
    }

    @PostMapping("/matchEncoder/email/{email}/password/{password}")

    public Utilisateur matchEncoder(String email, String password) {
        return utilisateurService.matchEncoder(email, password);
    }

    @PostMapping("/resetPassword/token/{token}")

    public Utilisateur resetPassword(@PathVariable String token) {
        return utilisateurService.resetPassword(token);
    }

    @PostMapping("/updateUser")
    public Utilisateur updateUser(@RequestBody Utilisateur updatedUser) {
        return utilisateurService.updateUser(updatedUser);
    }

    @PostMapping("/addStock")
    public Utilisateur addStock(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.addStock(utilisateur);
    }
}

