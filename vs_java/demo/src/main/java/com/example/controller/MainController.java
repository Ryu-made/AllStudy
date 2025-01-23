package com.example.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Test02;
import com.example.repository.Test02Repository;

import lombok.RequiredArgsConstructor;


// 자동 임포트 단축키: Alt+Shift+O

@RequiredArgsConstructor
@RestController
@RequestMapping(value="/api")
public class MainController {
    
    @Autowired
    final Test02Repository t2Repo;

    @GetMapping(value = "/main.do")
    // 127.0.0.1:8558/api/main.do
    public Map<String, Object> main() {
        Map<String, Object> result = new HashMap<>();
        // 저장소를 통해 id가 1인 항목 1개를 반환 받는다.
        Test02 t2 = t2Repo.findById(1).orElse(null);
        System.out.println(t2.toString());
        result.put("name", "Ryu");
        result.put("id", "A");
        result.put("age", 13);
        return result;

    }

    @GetMapping(value = "/home.do")
    // 127.0.0.1:8558/api/home.do
    public Map<String, Object> home() {
        Map<String, Object> result = new HashMap<>();
        result.put("name", "댕댕이");
        result.put("id", "B");
        result.put("age", 5);
        result.put("fav", "잠자기");
        return result;
    }

    // 127.0.0.1:8558/api/test02/1
    @GetMapping(value = "/test02/{id}")
    public ResponseEntity<byte[]> image(@PathVariable int id) {
        Test02 t2 = t2Repo.findById(id).orElse(null);
        if (t2 != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);
            ResponseEntity<byte[]> response = new ResponseEntity<>(t2.getImage(), headers, HttpStatus.OK);
            return response;
        }
        return null;
    }

    @GetMapping(value="/default.do")
    public String index() {
        return "default";
    }
    
}
