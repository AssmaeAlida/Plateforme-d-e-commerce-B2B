package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Administrateur;
import com.example.ecomercebackend.service.AdministarteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Administarteur")
public class AdministarteurWs {

    @Autowired
    private AdministarteurService administarteurService;
//    @GetMapping("/")
//    public List<Administrateur> findAll() {
//        return administarteurService.findAll();
//    }
}
