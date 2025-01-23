package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Test02;

@Repository
// extends JpaRepository<엔티티(테이블), 기본키 타입>
public interface Test02Repository extends JpaRepository<Test02, Integer> {
    
    

}
