package com.example.ecomerceback.bean;

import jakarta.persistence.*;


import java.util.List;

@Entity
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ElementCollection
    private List<String> histoAchat;
    @OneToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToMany (mappedBy = "panier")
private List<Produit> produits;


    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<String> getHistoAchat() {
        return histoAchat;
    }

    public void setHistoAchat(List<String> histoAchat) {
        this.histoAchat = histoAchat;
    }
}