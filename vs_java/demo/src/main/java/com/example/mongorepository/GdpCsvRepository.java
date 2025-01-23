package com.example.mongorepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.GdpCsv;

@Repository
public interface GdpCsvRepository extends MongoRepository<GdpCsv, Integer> {
    
}
