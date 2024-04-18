package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Produit")
public class ProduitWs {

    @Autowired
    private ProduitService produitService;
//    @GetMapping("/reference/{reference}")
//    public Produit findByReference(Long reference) {
//        return produitService.findByReference(reference);
//    }
//
//    @GetMapping("/")
//    public List<Produit> findAllBy() {
//        return produitService.findAll();
//    }
}
