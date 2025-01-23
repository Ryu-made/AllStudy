package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Member;

@Repository
// 기본키[id]: String
public interface MemberRepository extends JpaRepository<Member, String> {
    
}
