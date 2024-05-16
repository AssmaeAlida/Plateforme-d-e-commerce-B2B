package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    @GetMapping("/validProducts")
    public List<Produit> findValidProducts() {
        return produitService.findValidProducts();
    }

    @GetMapping("/InvalidProducts")

    public List<Produit> findInvalidProducts() {
        return produitService.findInvalidProducts();
    }

    @PostMapping("/ValidateProduct")

    public Produit ValidateProducts(@RequestBody Produit produit) {
        return produitService.ValidateProducts(produit);
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

    @GetMapping("/category/{libelle}")
    public List<Produit> findProductsByCategory(@PathVariable String libelle) {
        return produitService.findProductsByCategory(libelle);
    }

    @PostMapping("/addProduct")
    public Produit addProduct(@RequestBody Produit produit) {
        return produitService.addProduct(produit);
    }

    @PostMapping(value = "/uploadImage", consumes = {"multipart/form-data"})
    public Produit uploadProductImage(@RequestParam("titre") String titre,
                                      @RequestParam("image") MultipartFile file) throws IOException {
        return produitService.uploadProductImage(titre, file);}
}
