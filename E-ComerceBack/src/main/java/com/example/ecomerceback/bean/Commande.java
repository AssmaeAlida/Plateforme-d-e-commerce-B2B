package com.example.ecomerceback.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Commande {

    @Id  @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String ref;
    private double total;
    private double totalPaye;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public double getTotalPaye() {
        return totalPaye;
    }

    public void setTotalPaye(double totalPaye) {
        this.totalPaye = totalPaye;
    }

    @Override
    public String toString() {
        return "CommandeDao{" +
                "id=" + id +
                ", ref='" + ref + '\'' +
                ", total='" + total + '\'' +
                ", totalPaye='" + totalPaye + '\'' +
                '}';
    }
}
