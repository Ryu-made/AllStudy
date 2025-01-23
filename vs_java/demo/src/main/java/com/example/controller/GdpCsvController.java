package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.GdpCsv;
import com.example.mongorepository.GdpCsvRepository;


@RestController
@RequestMapping(value="/api/gdpcsv")
public class GdpCsvController {
    
    @Autowired
    GdpCsvRepository gRepository;


    @GetMapping("/list.json")
    public Map<String, Object> list() {
        Map<String, Object> map = new HashMap<>();
        try {
            List<GdpCsv> list = gRepository.findAll();
            map.put("status", 200);
            map.put("list", list);
        } catch (Exception e) {
            map.put("status", -1);
            map.put("message", e.getMessage());
        }
        return map;
    }
    
}
