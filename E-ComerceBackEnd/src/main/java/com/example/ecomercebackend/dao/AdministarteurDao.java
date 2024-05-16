package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdministarteurDao extends JpaRepository<Administrateur, Long> {

    List<Administrateur> findAll();

    Administrateur findByEmail(String email);
}