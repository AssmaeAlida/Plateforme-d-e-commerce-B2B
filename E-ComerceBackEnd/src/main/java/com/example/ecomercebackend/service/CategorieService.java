package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.dao.CategorieDao;
import com.example.ecomercebackend.dao.ProduitDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class CategorieService {
    @Autowired
    private CategorieDao categorieDao;
    @Autowired
    private ProduitDao produitDao;

    public List<Categorie> findAll() {
        return categorieDao.findAll();
    }

    public Categorie addCategorie(String libelle) {
        Categorie existingCategorie = categorieDao.findByLibelle(libelle);
        if (existingCategorie != null) {
            throw new RuntimeException("Category with libelle " + libelle + " already exists");
        }

        Categorie newCategorie = new Categorie();
        newCategorie.setLibelle(libelle);
        return categorieDao.save(newCategorie);
    }

    public Categorie uploadImage(String libelle, MultipartFile file) throws IOException {
        String baseUrl = ".\\images\\Categories\\";
        String filename = StringUtils.cleanPath(file.getOriginalFilename());

        Path storageDirectory = Paths.get("D:\\ClonedProject\\projet-dev-2324-g7-iir42324c7g6\\E-comerce_Front-end-React\\e-comerce_front-end_react\\public\\images\\Categories\\");
        if (!Files.exists(storageDirectory)) {
            Files.createDirectories(storageDirectory);
        }

        Path destinationPath = storageDirectory.resolve(Path.of(filename));
        file.transferTo(destinationPath);

        Categorie categorie = categorieDao.findByLibelle(libelle);
        if (categorie != null) {
            categorie.setImage(baseUrl + filename);  // Save the URL instead of the path
            categorieDao.save(categorie);
        }
        return categorie;
    }

    public Categorie updateCategorie(Categorie updatedCategorie) {
        Optional<Categorie> existingCategorieOptional = categorieDao.findByNumero(updatedCategorie.getNumero());

        if (existingCategorieOptional.isPresent()) {
            Categorie existingCategorie = existingCategorieOptional.get();
            existingCategorie.setLibelle(updatedCategorie.getLibelle());
            // Update other fields as necessary

            categorieDao.save(existingCategorie);
            return existingCategorie;
        }

        return null; // or throw an exception, or return a default Categorie
    }


    public void deleteCategorie(String libelle) {
        Categorie existingCategorie = categorieDao.findByLibelle(libelle);

        if (existingCategorie != null) {
            List<Produit> produits = produitDao.findByCategorie(existingCategorie);
            for (Produit produit : produits) {
                produit.setCategorie(null);
                produitDao.save(produit);
            }
            categorieDao.delete(existingCategorie);
        }
    }








}
