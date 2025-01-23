package com.example.entity;

import java.util.Date;

// DB 테이블, 컬럼
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import org.hibernate.annotations.CreationTimestamp;

// 롬복
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// DB에 있는 테이블과 같은 구조의 클래스 생성
@Table(name = "test02")
@Getter
@Setter
@NoArgsConstructor
@ToString(exclude = {"image"})
@Entity
public class Test02 {
    
    // 컬럼명 자동 설정
    // @Column(name = "id")
    @Id
    int id;
    String name;
    byte[] image;

    // 컬럼명 수동 설정
    @Column(name = "base_time")
    @CreationTimestamp
    Date baseTime;

}
