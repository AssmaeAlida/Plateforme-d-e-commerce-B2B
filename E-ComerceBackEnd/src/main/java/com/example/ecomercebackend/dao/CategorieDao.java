package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieDao extends JpaRepository<Categorie, Long> {

    List<Categorie> findAll();
    Categorie findByLibelle(String nom);

}
