package com.example.ecomerceback.bean;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class Vendeur {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
    private String nonEntreprise;
    private Date dateInscription;
    private String email;
    private String password;

     public Date getDateInscription() {
         return dateInscription;
     }

     public void setDateInscription(Date dateInscription) {
         this.dateInscription = dateInscription;
     }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNonEntreprise() {
        return nonEntreprise;
    }

    public void setNonEntreprise(String nonEntreprise) {
        this.nonEntreprise = nonEntreprise;
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

}
