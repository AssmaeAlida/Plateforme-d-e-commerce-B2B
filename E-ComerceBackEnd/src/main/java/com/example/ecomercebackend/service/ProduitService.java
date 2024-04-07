package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.dao.ProduitDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitService {
    @Autowired
    private ProduitDao produitDao;

//    public Produit findByReference(Long reference) {
//        return produitDao.findByReference(reference);
//    }
//
//    public List<Produit> findAll() {
//        return produitDao.findAll();
//    }
}
