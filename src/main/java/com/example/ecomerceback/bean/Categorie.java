package com.example.ecomerceback.bean;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Categorie {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long numero;
    private String libelle;
    private String description;
    @OneToMany(mappedBy = "categorie")
    private List<Produit> produit;

    public List<Produit> getProduit() {
        return produit;
    }

    public void setProduit(List<Produit> produit) {
        this.produit = produit;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
}
