package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurDao extends JpaRepository<Utilisateur, Long> {

    Utilisateur findByEmail(String email);
    Utilisateur findByToken(String token);
}
