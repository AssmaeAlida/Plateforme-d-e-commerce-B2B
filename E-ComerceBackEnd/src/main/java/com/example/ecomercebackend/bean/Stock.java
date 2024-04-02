package com.example.ecomercebackend.bean;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int qteProduit;
    @OneToMany(mappedBy = "stock")
    private List<Produit> produit;

    public List<Produit> getProduit() {
        return produit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQteProduit() {
        return qteProduit;
    }

    public void setQteProduit(int qteProduit) {
        this.qteProduit = qteProduit;
    }

    public void setProduit(List<Produit> produit) {
        this.produit = produit;
    }
}
