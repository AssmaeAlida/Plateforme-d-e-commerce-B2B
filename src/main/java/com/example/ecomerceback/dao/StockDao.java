package com.example.ecomerceback.dao;

import com.example.ecomerceback.bean.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockDao extends JpaRepository<Stock, Long> {
}
