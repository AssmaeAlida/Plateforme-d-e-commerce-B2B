package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.bean.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface ProduitDao extends JpaRepository<Produit, Long> {

    List<Produit> findAll();
    Produit findByTitre(String titre);
    Produit findByTitreAndUtilisateur(String titre, Utilisateur utilisateur);

    List<Produit> findByUtilisateur(Utilisateur seller);
    List<Produit> findByCategorie(Categorie categorie);
    List<Produit> findByPrix(double prix);
    List<Produit> findByDateCreationProduit(Date date);
    List<Produit> findByValidation(String validation);

}