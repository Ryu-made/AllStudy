package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

// 반드시 폴더 생성하면 등록해줘야 함.
// controller 폴더
@ComponentScan(basePackages = {"com.example.controller"})
// entity 폴더
@EntityScan(basePackages = {"com.example.entity"})
// repository 폴더
@EnableJpaRepositories(basePackages = {"com.example.repository"})
@EnableMongoRepositories(basePackages = {"com.example.mongorepository"})

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
