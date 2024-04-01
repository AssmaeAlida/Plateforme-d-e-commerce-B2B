package com.example.ecomerceback.bean;

import jakarta.persistence.*;

@Entity
public class Produit {
    @Id @GeneratedValue(strategy = jakarta.persistence.GenerationType.AUTO)
    private Long reference;
private String libelle;
private String description;
private double prix;
private String image;
@ManyToOne
private Categorie categorie;
@ManyToOne
private Stock stock;
@ManyToOne
private Panier panier;

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }


        public Categorie getCategorie() {
            return categorie;
        }

        public void setCategorie(Categorie categorie) {
            this.categorie = categorie;
        }

        public Long getReference() {
            return reference;
        }

        public void setReference(Long reference) {
            this.reference = reference;
        }

        public String getLibelle() {
            return libelle;
        }

        public void setLibelle(String libelle) {
            this.libelle = libelle;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public double getPrix() {
            return prix;
        }

        public void setPrix(double prix) {
            this.prix = prix;
        }

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }


}
