package com.example.ecomerceback.ws;

import com.example.ecomerceback.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ecomerce/commande")
public class CommandeWs {
    @Autowired
private CommandeService commandeService;


}
