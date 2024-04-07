package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Categorie")
public class CategorieWs {
    @Autowired
    private CategorieService categorieService;
//    @GetMapping("/")
//    public List<Categorie> findAll() {
//        return categorieService.findAll();
//    }
}
