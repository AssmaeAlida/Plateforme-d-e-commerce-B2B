package com.example.ecomerceback.dao;


import com.example.ecomerceback.bean.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanierDao extends JpaRepository<Panier, Long> {

    Panier findByClientId(Long id);
    Panier ProduitsReference(Long reference);
    Panier findByClientEmailAndProduitsStockReferenceAndProduitsReference(String email, Long reference, Long reference1);
    Panier findByClientEmailAndProduitsStockReferenceAndProduitsReferenceAndProduitsCategorieReference(String email, Long reference, Long reference1, Long reference2);
    Panier findByClientEmailAndProduitsStockReferenceAndProduitsCategorieReference(String email, Long reference, Long reference1);
    Panier findByClientEmailAndProduitsReferenceAndProduitsCategorieReference(String email, Long reference, Long reference1);
    Panier findByClientEmailAndProduitsReferenceAndProduitsStockReferenceAndProduitsCategorieReference(String email, Long reference, Long reference1, Long reference2);
    Panier findByClientEmailAndProduitsStockReferenceAndProduitsCategorieReferenceAndProduitsReference(String email, Long reference, Long reference1, Long reference2);
    Panier findByClientEmailAndProduitsCategorieReferenceAndProduitsReference(String email, Long reference, Long reference1);


}
