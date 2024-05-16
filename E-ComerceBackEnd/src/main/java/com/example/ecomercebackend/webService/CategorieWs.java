package com.example.ecomercebackend.webService;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/ecomerce-backend/Categorie")
public class CategorieWs {
    @Autowired
    private CategorieService categorieService;



    @PostMapping("/addCategorie")
    public Categorie addCategorie(@RequestBody Categorie categorie) {
        return categorieService.addCategorie(categorie.getLibelle());
    }


    @PostMapping("/uploadImage")
    public Categorie uploadImage(@RequestParam String libelle, @RequestParam("image") MultipartFile file) {
        try {
            return categorieService.uploadImage(libelle, file);
        } catch (IOException e) {
            throw new RuntimeException("Could not upload the file. Error: " + e.getMessage());
        }
    }
    @GetMapping("/all")
    public List<Categorie> findAll() {
        return categorieService.findAll();
    }

   @PutMapping("/updateCategorie")
   public Categorie updateCategorie(@RequestBody Categorie updatedCategorie) {
        return categorieService.updateCategorie(updatedCategorie);
    }

    @DeleteMapping("/deleteCategorie/{libelle}")
    public void deleteCategorie(@PathVariable String libelle) {
        categorieService.deleteCategorie(libelle);
    }

}
