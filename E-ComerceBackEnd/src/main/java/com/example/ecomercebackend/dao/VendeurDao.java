package com.example.ecomercebackend.dao;

import com.example.ecomercebackend.bean.Vendeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendeurDao extends JpaRepository<Vendeur, Long> {
}
