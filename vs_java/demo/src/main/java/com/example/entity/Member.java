package com.example.entity;

import java.util.*;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

// Entity: 테이블과 메핑되는 자바의 클래스
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "member")
public class Member {
    
    @Id
    String id;

    String password;
    String username;
    String address;

    @JsonProperty(access = Access.WRITE_ONLY)
    byte[] profile;

    @JsonProperty(access = Access.READ_ONLY)
    @CreationTimestamp
    Date regdate;


}
