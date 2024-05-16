package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.dao.UtilisateurDao;
import com.example.ecomercebackend.service.Mail.MailService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.Random;

import javax.mail.MessagingException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class UtilisateurServiceTest {

    @Mock
    private UtilisateurDao utilisateurDao;

    @Mock
    private MailService mailService;

    @InjectMocks
    private UtilisateurService utilisateurService;

    @Test
    void addUser_NewUser_ReturnsAddedUser() {
        // Given
        Utilisateur newUser = new Utilisateur();
        newUser.setEmail("test@example.com");
        newUser.setPassword("password");

        when(utilisateurDao.findByEmail(newUser.getEmail())).thenReturn(null);

        // When
        Utilisateur result = utilisateurService.addUser(newUser);

        // Then
        assertNotNull(result);
        assertEquals(newUser.getEmail(), result.getEmail());
        verify(utilisateurDao, times(1)).save(any(Utilisateur.class));
    }

    @Test
    void addUser_UserWithEmailAlreadyExists_ThrowsRuntimeException() {
        // Given
        Utilisateur existingUser = new Utilisateur();
        existingUser.setEmail("existing@example.com");
        existingUser.setPassword("password");

        when(utilisateurDao.findByEmail(existingUser.getEmail())).thenReturn(existingUser);

        // When / Then
        assertThrows(RuntimeException.class, () -> utilisateurService.addUser(existingUser));
        verify(utilisateurDao, never()).save(any(Utilisateur.class));
    }




    @Test
    void signIn_InvalidCredentials_ReturnsNull() {
        // Given
        String email = "test@example.com";
        String password = "password";

        when(utilisateurDao.findByEmail(email)).thenReturn(null);

        // When
        Utilisateur result = utilisateurService.signIn(email, password);

        // Then
        assertNull(result);
    }

    // Add similar tests for other methods...
}
