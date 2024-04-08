package com.example.ecomercebackend.bean;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.List;

@Entity
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nonStore;
    private Date dateInscription;
    private String email;
    private String password;
    private String role;
    private String nomComplet;
    private String infoCarteBancaire;

    @OneToMany
    private List<Produit> produits;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNonStore() {
        return nonStore;
    }

    public void setNonStore(String nonStore) {
        this.nonStore = nonStore;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Produit> getProduits() {
        return produits;
    }

    public void setProduits(List<Produit> produits) {
        this.produits = produits;
    }
}
