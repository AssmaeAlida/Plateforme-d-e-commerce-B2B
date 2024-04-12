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
    public Utilisateur forgotPassword(@PathVariable String email) {
        return utilisateurService.forgotPassword(email);
    }




    @PostMapping("/resetPassword/token/{token}/newPassword/{newPassword}")

    public Utilisateur resetPassword(@PathVariable String token,@PathVariable String newPassword) {
        return utilisateurService.resetPassword(token, newPassword);
    }




}
