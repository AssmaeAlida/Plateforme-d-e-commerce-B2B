package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Categorie")
public class CategorieWs {
    @Autowired
    private CategorieService categorieService;

    @GetMapping("/all")
    public List<Categorie> findAll() {
        return categorieService.findAll();
    }

}
