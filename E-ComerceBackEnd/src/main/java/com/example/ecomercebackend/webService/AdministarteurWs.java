package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Administrateur;
import com.example.ecomercebackend.service.AdministarteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Administarteur")
public class AdministarteurWs {

    @Autowired
    private AdministarteurService administarteurService;

    @PostMapping("/signUp/email/{email}/password/{password}")
    public int signUp(@PathVariable String email,@PathVariable String password) {
        return administarteurService.signUp(email, password);
    }

    @PostMapping("/signIn/email/{email}/password/{password}")
    public Administrateur signIn(@PathVariable String email,@PathVariable String password) {
        return administarteurService.signIn(email, password);
    }
}
