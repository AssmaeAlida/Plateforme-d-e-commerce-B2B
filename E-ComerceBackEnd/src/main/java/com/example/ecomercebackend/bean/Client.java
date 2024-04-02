package com.example.ecomercebackend.bean;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nomComplet;
    private String motDePasse;
    private String email;
    private String password;
    private String infoCarteBancaire;
    private Date dateInscription;
    @OneToOne
    @JoinColumn(name = "panier_id")
    private Panier panier;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomComplet() {
        return nomComplet;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
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

    public String getInfoCarteBancaire() {
        return infoCarteBancaire;
    }

    public void setInfoCarteBancaire(String infoCarteBancaire) {
        this.infoCarteBancaire = infoCarteBancaire;
    }

    public Date getDateInscription() {
        return dateInscription;
    }

    public void setDateInscription(Date dateInscription) {
        this.dateInscription = dateInscription;
    }

    public Panier getPanier() {
        return panier;
    }

    public void setPanier(Panier panier) {
        this.panier = panier;
    }
}
