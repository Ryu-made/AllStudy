package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;




@Controller
public class HTMLController {
    

    // 127.0.0.1:9090/home.x를 크롬에 입력하면 실제로는 templates/home.html이 표시됨
    @GetMapping(value="/home.x")
    public String home() {
        return "home"; // html문서 파일명: home.html
    }
    
    // 127.0.0.1:9090/index.naver을 크롬에 입력하면 실제로는 templates/index.html이 표시됨
    @GetMapping(value="/index")
    public String index() {
        return "index";
    }
    
    // 회원가입 페이지
    // 127.0.0.1:9090/join.html을 크롬에 입력하면 실제로는 templates/join.html이 표시됨
    @GetMapping(value="/join")
    public String join() {
        return "join";
    }

    @GetMapping(value="/list")
    public String list() {
        return "list";
    }
    
    // http:192.168.0.20:8558/gdpcsv
    @GetMapping(value="/gdpcsv")
    public String gdpcsv() {
        return "gdpcsv";
    }
}
