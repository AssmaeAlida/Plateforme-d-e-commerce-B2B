package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Administrateur;
import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.dao.AdministarteurDao;
import com.example.ecomercebackend.dao.CategorieDao;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class AdministarteurServiceTest {

    @Mock
    private AdministarteurDao administarteurDao;

    @Mock
    private CategorieDao categorieDao;

    @InjectMocks
    private AdministarteurService administarteurService;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @Test
    void signIn_ValidCredentials_ReturnsAdministrateur() {
        // Given
        String email = "test@example.com";
        String password = "password123";
        Administrateur administrateur = new Administrateur();
        administrateur.setEmail(email);
        administrateur.setPassword(passwordEncoder.encode(password));
        when(administarteurDao.findByEmail(email)).thenReturn(administrateur);
        when(passwordEncoder.matches(password, administrateur.getPassword())).thenReturn(true);

        // When
        Administrateur result = administarteurService.signIn(email, password);

        // Then
        assertEquals(administrateur, result);
    }

    @Test
    void signIn_InvalidCredentials_ReturnsNull() {
        // Given
        String email = "test@example.com";
        String password = "wrongPassword";
        when(administarteurDao.findByEmail(email)).thenReturn(null);

        // When
        Administrateur result = administarteurService.signIn(email, password);

        // Then
        assertEquals(null, result);
    }

    @Test
    void signUp_NewUser_Returns1() {
        // Given
        String email = "test@example.com";
        String password = "password123";
        when(administarteurDao.findByEmail(email)).thenReturn(null);
        Administrateur newUser = new Administrateur();
        newUser.setEmail(email);
        newUser.setPassword(passwordEncoder.encode(password));

        // When
        int result = administarteurService.signUp(email, password);

        // Then
        assertEquals(1, result);
    }

    @Test
    void signUp_ExistingUser_ReturnsMinus1() {
        // Given
        String email = "test@example.com";
        String password = "password123";
        when(administarteurDao.findByEmail(email)).thenReturn(new Administrateur());

        // When
        int result = administarteurService.signUp(email, password);

        // Then
        assertEquals(-1, result);
    }

    @Test
    void addCategorie_ReturnsCategorie() {
        // Given
        String libelle = "Test Categorie";
        String description = "Test Description";
        Categorie categorie = new Categorie();
        categorie.setLibelle(libelle);
        categorie.setDescription(description);
        when(categorieDao.save(any(Categorie.class))).thenReturn(categorie);

        // When
        Categorie result = administarteurService.addCategorie(libelle, description);

        // Then
        assertEquals(categorie, result);
    }


}
