package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieDao extends JpaRepository<Categorie, Long> {

    Categorie findByLibelle(String libelle);
    Categorie deleteByLibelle(String libelle);
    Categorie findByProduitsReference(String reference);
    Categorie findByProduitsLibelle(String libelle);
    Categorie findByProduitsReferenceAndProduitsLibelle(String reference, String libelle);
    List<Categorie> findAll();
}
