package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Administrateur;
import com.example.ecomercebackend.dao.AdministarteurDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministarteurService {

    @Autowired
    private AdministarteurDao administarteurDao;

//    public List<Administrateur> findAll() {
//        return administarteurDao.findAll();
//    }
}
