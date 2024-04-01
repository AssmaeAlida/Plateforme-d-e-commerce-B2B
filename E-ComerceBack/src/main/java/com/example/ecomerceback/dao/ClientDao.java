package com.example.ecomerceback.dao;

import com.example.ecomerceback.bean.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientDao extends JpaRepository<Client, Long> {

    Client findByNomComplet(String nomComplet);
    Client deleteByNomComplet(String nomComplet);
    Client findByEmail(String email);
    Client deleteByEmail(String email);
    List<Client> findAll();
    Client findById(long id);
    int deleteById(long id);
    List<Client> findByNomCompletNotLike(String nomComplet);



}
