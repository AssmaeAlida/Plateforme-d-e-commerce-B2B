package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Produit")
public class ProduitWs {

    @Autowired
    private ProduitService produitService;
//    @GetMapping("/reference/{reference}")
//    public Produit findByReference(Long reference) {
//        return produitService.findByReference(reference);
//    }
//
    @GetMapping("/")
    public List<Produit> findAllBy() {
        return produitService.findAll();
  }

    @PostMapping("/addProduct")
    public Produit addProduct(@RequestBody Produit produit) {
        return produitService.addProduct(produit);
    }

    @GetMapping("/titre/{titre}")
    public Produit findByTitre(@PathVariable String titre) {
        return produitService.findByTitre(titre);
    }
    @PostMapping("/updateProduct")
    public Produit updateProduct(@RequestBody Produit updatedProduct) {
        return produitService.updateProduct(updatedProduct);
    }


    @DeleteMapping("/deleteProduct/{id}")
public void deleteProduct(@PathVariable Long id) {
    produitService.deleteProduct(id);
}

    @GetMapping("/seller/{email}")
    public List<Produit> findProductsBySeller(@PathVariable String email) {
        return produitService.findProductsBySeller(email);
    }

    @GetMapping("/category/{categoryId}")
    public List<Produit> findProductsByCategory(@PathVariable Long categoryId) {
        return produitService.findProductsByCategory(categoryId);
    }
}
