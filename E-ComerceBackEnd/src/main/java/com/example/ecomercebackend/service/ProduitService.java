package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.bean.Utilisateur;

import com.example.ecomercebackend.dao.CategorieDao;
import com.example.ecomercebackend.dao.ProduitDao;
import com.example.ecomercebackend.dao.UtilisateurDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitService {
    @Autowired
    private ProduitDao produitDao;
    @Autowired
    private UtilisateurDao utilisateurDao;
    @Autowired
    private CategorieDao categorieDao;

    public Produit findByTitre(String titre) {
        return produitDao.findByTitre(titre);
    }

    public List<Produit> findAll() {
        return produitDao.findAll();
    }

    public Produit addProduct(Produit produit) {
        Produit existingProduct = produitDao.findByTitre(produit.getTitre());
        if (existingProduct != null) {
            throw new RuntimeException("Product title is already in use");
        }
        produitDao.save(produit);
        return produit;
   }


    public Produit updateProduct(Produit updatedProduct) {
        Produit existingProduct = produitDao.findByTitre(updatedProduct.getTitre());
        if (existingProduct != null) {
            existingProduct.setTitre(updatedProduct.getTitre());
            existingProduct.setImage(updatedProduct.getImage());
            existingProduct.setPrix(updatedProduct.getPrix());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setQteProduit(updatedProduct.getQteProduit());
            existingProduct.setCategorie(updatedProduct.getCategorie());
            existingProduct.setUtilisateur(updatedProduct.getUtilisateur());
            produitDao.save(existingProduct);
            return existingProduct;
        }
        return null;
    }
    public void deleteProduct(Long id) {
    Produit existingProduct = produitDao.findById(id).orElse(null);
    if (existingProduct == null) {
        throw new RuntimeException("Product with id " + id + " not found");
    }
    produitDao.deleteById(id);
}

public List<Produit> findProductsBySeller(String email) {
    Utilisateur seller = utilisateurDao.findByEmail(email);
    if (seller == null) {
        throw new RuntimeException("Seller with email " + email + " not found");
    }
    if (!seller.isVendeur()) {
        throw new RuntimeException("User with email " + email + " is not a seller");
    }
    return produitDao.findByUtilisateur(seller);
}

public List<Produit> findProductsByCategory(Long categoryId) {
    Categorie category = categorieDao.findById(categoryId).orElse(null);
    if (category == null) {
        throw new RuntimeException("Category with id " + categoryId + " not found");
    }
    return produitDao.findByCategorie(category);
}
}

