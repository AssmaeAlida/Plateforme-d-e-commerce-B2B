package com.example.ecomercebackend.bean;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.List;

@Entity
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private boolean isVendeur;
    private String storeName;
    private Date dateInscription;
    @Column(unique = true)
    private String email;
    private String password;
    private String nomComplet;
    private String infoCarteBancaire;
    private String token;
    private String image;
    private String telephone;
    private String adresse;


    @OneToMany
    private List<Produit> produits;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public boolean isVendeur() {
        return isVendeur;
    }

    public void setVendeur(boolean vendeur) {
        isVendeur = vendeur;
    }
    public Date getDateInscription() {
        return dateInscription;
    }

    public void setDateInscription(Date dateInscription) {
        this.dateInscription = dateInscription;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNomComplet() {
        return nomComplet;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public String getInfoCarteBancaire() {
        return infoCarteBancaire;
    }

    public void setInfoCarteBancaire(String infoCarteBancaire) {
        this.infoCarteBancaire = infoCarteBancaire;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public List<Produit> getProduits() {
        return produits;
    }

    public void setProduits(List<Produit> produits) {
        this.produits = produits;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
}
