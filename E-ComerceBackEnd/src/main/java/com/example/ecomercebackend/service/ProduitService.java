package com.example.ecomercebackend.service;

import com.example.ecomercebackend.bean.Categorie;
import com.example.ecomercebackend.bean.Produit;
import com.example.ecomercebackend.bean.Utilisateur;

import com.example.ecomercebackend.dao.CategorieDao;
import com.example.ecomercebackend.dao.ProduitDao;
import com.example.ecomercebackend.dao.UtilisateurDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.ecomercebackend.bean.Utilisateur;
import com.example.ecomercebackend.dao.UtilisateurDao;
import com.example.ecomercebackend.service.Mail.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

@Service
public class ProduitService {
    @Autowired
    private ProduitDao produitDao;
    @Autowired
    private UtilisateurDao utilisateurDao;
    @Autowired
    private CategorieDao categorieDao;

    public Produit findByTitre(String titre) {
        return produitDao.findByTitre(titre);
    }

    public List<Produit> findValidProducts() {
        return produitDao.findByValidation("valid");
    }
    public List<Produit> findInvalidProducts() {
        return produitDao.findByValidation("not valid");
    }
    public Produit ValidateProducts(Produit updatedProduct) {
        Produit existingProduct = produitDao.findByTitre(updatedProduct.getTitre());
        if (existingProduct != null) {
            if (updatedProduct.getTitre() != null) {
                existingProduct.setTitre(updatedProduct.getTitre());
            }
            if (updatedProduct.getImage() != null) {
                existingProduct.setImage(updatedProduct.getImage());
            }
            if (updatedProduct.getPrix() != 0) {
                existingProduct.setPrix(updatedProduct.getPrix());
            }
            if (updatedProduct.getDescription() != null) {
                existingProduct.setDescription(updatedProduct.getDescription());
            }
            if (updatedProduct.getQteProduit() != 0) {
                existingProduct.setQteProduit(updatedProduct.getQteProduit());
            }
            // Update date if provided, assuming updatedProduct.getDateCreationProduit() returns a Date
            if (updatedProduct.getDateCreationProduit() != null) {
                existingProduct.setDateCreationProduit(updatedProduct.getDateCreationProduit());
            }
            // Update category if provided
            if (updatedProduct.getCategorie() != null) {
                existingProduct.setCategorie(updatedProduct.getCategorie());
            }
            // Update utilisateur if provided
            if (updatedProduct.getUtilisateur() != null) {
                existingProduct.setUtilisateur(updatedProduct.getUtilisateur());
            }
            // Set validation based on your business logic
            existingProduct.setValidation("valid");

            // Save the updated product
            produitDao.save(existingProduct);

            // Return the updated product
            return existingProduct;
        } else {
            throw new RuntimeException("Product does not exist in the database");
        }
    }



    public Produit addProduct(Produit newProduct) {
        Produit existingProduct = produitDao.findByTitre(newProduct.getTitre());
        if (existingProduct != null) {
            throw new RuntimeException("Product title is already in use");
        } else {
            Produit productToAdd = new Produit();
            productToAdd.setTitre(newProduct.getTitre());

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date utilDate = new java.util.Date();
            String dateString = sdf.format(utilDate);
            java.sql.Date sqlDate = java.sql.Date.valueOf(dateString);
            productToAdd.setDateCreationProduit(sqlDate);

            if (newProduct.getImage() != null){
                productToAdd.setImage(newProduct.getImage());
            }
            productToAdd.setPrix(newProduct.getPrix());

            if (newProduct.getDescription() != null) {
                productToAdd.setDescription(newProduct.getDescription());
            }

            productToAdd.setQteProduit(newProduct.getQteProduit());


            Categorie category = newProduct.getCategorie();
            if (category != null) {
                Categorie existingCategory = categorieDao.findByLibelle(category.getLibelle());
                if (existingCategory != null) {
                    productToAdd.setCategorie(existingCategory);
                } else {
                    throw new RuntimeException("Category does not exist in the database");
                }
            } else {
                throw new RuntimeException("Category cannot be null");
            }

            if (newProduct.getUtilisateur() != null) {
                productToAdd.setUtilisateur(newProduct.getUtilisateur());
            }
            productToAdd.setValidation("not valid");

            produitDao.save(productToAdd);
            return productToAdd;
        }
    }
    public Produit uploadProductImage(String titre, MultipartFile image) throws IOException {
        String baseUrl = ".\\images\\Product\\";
        String filename = StringUtils.cleanPath(image.getOriginalFilename());

        Path storageDirectory = Paths.get("D:\\ClonedProject\\projet-dev-2324-g7-iir42324c7g6\\E-comerce_Front-end-React\\e-comerce_front-end_react\\public\\images\\Product\\");
        if (!Files.exists(storageDirectory)) {
            Files.createDirectories(storageDirectory);
        }

        Path destinationPath = storageDirectory.resolve(Path.of(filename));
        image.transferTo(destinationPath);

        Produit product = produitDao.findByTitre(titre);
        if (product != null) {
            product.setImage(baseUrl + filename);
            produitDao.save(product);
        }
        return product;
    }


    public Produit updateProduct(Produit updatedProduct) {
        Produit existingProduct = produitDao.findByTitre(updatedProduct.getTitre());
        if (existingProduct != null) {
            if (updatedProduct.getTitre() != null) {
                existingProduct.setTitre(updatedProduct.getTitre());
            }
            if (updatedProduct.getImage() != null) {
                existingProduct.setImage(updatedProduct.getImage());
            }
            if (updatedProduct.getPrix() != 0) {
                existingProduct.setPrix(updatedProduct.getPrix());
            }
            if (updatedProduct.getDescription() != null) {
                existingProduct.setDescription(updatedProduct.getDescription());
            }
            if (updatedProduct.getQteProduit() != 0) {
                existingProduct.setQteProduit(updatedProduct.getQteProduit());
            }

            // Fetch the category from the database
            Categorie category = updatedProduct.getCategorie();
            if (category != null && category.getLibelle() != null) {
                Categorie existingCategory = categorieDao.findByLibelle(category.getLibelle());
                if (existingCategory != null) {
                    existingProduct.setCategorie(existingCategory);
                } else {
                    throw new RuntimeException("Category does not exist in the database");
                }
            }

            if (updatedProduct.getUtilisateur() != null) {
                existingProduct.setUtilisateur(updatedProduct.getUtilisateur());
            }

            produitDao.save(existingProduct);
            return existingProduct;
        }
        return null;
    }
    public void deleteProduct(Long id) {
        Produit existingProduct = produitDao.findById(id).orElse(null);
        if (existingProduct == null) {
            throw new RuntimeException("Product with id " + id + " not found");
        }
        produitDao.deleteById(id);
    }



    public List<Produit> findProductsBySeller(String email) {
        Utilisateur seller = utilisateurDao.findByEmail(email);
        if (seller == null) {
            throw new RuntimeException("Seller with email " + email + " not found");
        }
        if (!seller.isVendeur()) {
            throw new RuntimeException("User with email " + email + " is not a seller");
        }
        return produitDao.findByUtilisateur(seller);
    }

    public List<Produit> findProductsByCategory(String libelle) {
        Categorie category = categorieDao.findByLibelle(libelle);
        if (category == null) {
            throw new RuntimeException("Category with id " + libelle + " not found");
        }
        List<Produit> produits = produitDao.findByCategorie(category);
        List<Produit> validProduits = new ArrayList<>();
        for (Produit produit : produits) {
            if ("valid".equals(produit.getValidation())) {
                validProduits.add(produit);
            }
        }
        return validProduits;
    }

}

