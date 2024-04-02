package com.example.ecomerceback.dao;

import com.example.ecomerceback.bean.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandeDao extends JpaRepository<Commande, Long>{

    Commande findByRef(String ref);
    Commande deleteByRef(String ref);
    List<Commande> findByRefAndTotal(String ref, double total);
    List<Commande> findALl();

}
