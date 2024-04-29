package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.service.UtilisateurService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ecomerce-backend/Utilisateur")
public class UtilisateurWs {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/findAll")
    public List<Utilisateur> findAll() {
        return utilisateurService.findAll();
    }

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



// ...

@PostMapping(value = "/uploadImage", consumes = {"multipart/form-data"})
public Utilisateur uploadImage(@RequestParam("email") String email,
                               @RequestParam("image") MultipartFile file) throws IOException {
    return utilisateurService.uploadImage(email, file);
}



@PostMapping("/logout")
public String logout(HttpServletRequest request) {
    HttpSession session = request.getSession(false);
    if (session != null) {
        session.invalidate();
        return "User logged out";
    } else {
        return "No active session to logout";
    }
}


}



