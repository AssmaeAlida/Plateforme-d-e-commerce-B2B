package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.dao.CategorieDao;
import com.example.ecomercebackend.dao.ProduitDao;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class CategorieServiceTest {

    @Mock
    private CategorieDao categorieDao;

    @Mock
    private ProduitDao produitDao;

    @InjectMocks
    private CategorieService categorieService;

    @Test
    void findAll() {
        // Given
        List<Categorie> categories = new ArrayList<>();
        // Add sample categories to the list
        when(categorieDao.findAll()).thenReturn(categories);

        // When
        List<Categorie> result = categorieService.findAll();

        // Then
        assertEquals(categories, result);
    }

    @Test
    void addCategorie_NewCategorie_ReturnsCategorie() {
        // Given
        String libelle = "TestCategorie";
        when(categorieDao.findByLibelle(libelle)).thenReturn(null);
        Categorie newCategorie = new Categorie();
        newCategorie.setLibelle(libelle);
        when(categorieDao.save(any(Categorie.class))).thenReturn(newCategorie);

        // When
        Categorie result = categorieService.addCategorie(libelle);

        // Then
        assertEquals(newCategorie, result);
    }

}
