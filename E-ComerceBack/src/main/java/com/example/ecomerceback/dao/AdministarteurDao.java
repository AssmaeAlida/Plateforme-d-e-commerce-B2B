package com.example.ecomerceback.dao;

import com.example.ecomerceback.bean.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdministarteurDao extends JpaRepository<Administrateur, Long> {

    List<Administrateur> findAll();


}
