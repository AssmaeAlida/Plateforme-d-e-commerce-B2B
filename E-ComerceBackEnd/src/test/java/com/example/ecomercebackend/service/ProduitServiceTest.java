package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.dao.CategorieDao;
import com.example.ecomercebackend.dao.ProduitDao;
import com.example.ecomercebackend.dao.UtilisateurDao;
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
import static org.mockito.Mockito.when;

@SpringBootTest
class ProduitServiceTest {

    @Mock
    private ProduitDao produitDao;

    @Mock
    private UtilisateurDao utilisateurDao;

    @Mock
    private CategorieDao categorieDao;

    @InjectMocks
    private ProduitService produitService;

    @Test
    void findByTitre_ExistingTitre_ReturnsProduit() {
        // Given
        String titre = "TestProduit";
        Produit expectedProduit = new Produit();
        expectedProduit.setTitre(titre);
        when(produitDao.findByTitre(titre)).thenReturn(expectedProduit);

        // When
        Produit result = produitService.findByTitre(titre);

        // Then
        assertEquals(expectedProduit, result);
    }

}
