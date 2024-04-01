package com.example.ecomerceback.service;

import com.example.ecomerceback.bean.Commande;
import com.example.ecomerceback.dao.CommandeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandeService {
    @Autowired
    private CommandeDao commandeDao;

    public Commande findByRef(String ref) {
        return (Commande) commandeDao.findByRef(ref);
    }

    public Commande deleteByRef(String ref) {
        return (Commande) commandeDao.deleteByRef(ref);
    }

    public List<Commande> findByRefAndTotal(String ref, double total) {
        return commandeDao.findByRefAndTotal(ref, total);
    }

    public List<Commande> findAll() {
        return  commandeDao.findAll();
    }




}
