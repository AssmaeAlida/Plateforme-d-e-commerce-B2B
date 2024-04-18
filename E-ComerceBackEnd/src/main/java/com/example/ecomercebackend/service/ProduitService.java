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


//    public Produit addProduct(Produit produit) {
//        Produit existingProduct = produitDao.findByTitre(produit.getTitre());
//        if (existingProduct != null) {
//            throw new RuntimeException("Product title is already in use");
//        }
//        produitDao.save(produit);
//        return produit;
//    }


//    public Produit updateProduct(Produit updatedProduct) {
//        Produit existingProduct = produitDao.findByTitre(updatedProduct.getTitre());
//        if (existingProduct != null) {
//            existingProduct.setTitre(updatedProduct.getTitre());
//            existingProduct.setImage(updatedProduct.getImage());
//            existingProduct.setPrix(updatedProduct.getPrix());
//            existingProduct.setDescription(updatedProduct.getDescription());
//            existingProduct.setQteProduit(updatedProduct.getQteProduit());
//            produitDao.save(existingProduct);
//            return existingProduct;
//        }
//        return null;
//    }
}

