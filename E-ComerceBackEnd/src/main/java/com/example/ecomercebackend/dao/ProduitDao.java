package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitDao extends JpaRepository<Produit, Long> {

//Produit findByReference(Long reference);
//List<Produit> findAll();
//Produit findByTitre(String titre);


}
