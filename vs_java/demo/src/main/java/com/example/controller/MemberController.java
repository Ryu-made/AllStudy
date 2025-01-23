package com.example.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Member;
import com.example.repository.MemberRepository;




@RestController
@RequestMapping(value = "/api/member")
public class MemberController {
    
    @Autowired
    MemberRepository mRepository;

    // 회원가입(url: 127.0.0.1:8558/api/member/join.json)
    @PostMapping("/join.json") // 아이디(id), 암호(password), 이름(username), 주소(address)
    public Map<String, Object> postMethodName(@RequestBody Member entity) {
        String currtime = (new Date()).toString();
        System.out.print(" [" + currtime + "] (" + this.getClass().getSimpleName() + ") ");
        System.out.println("{회원가입 실행}");
        System.out.println(entity.toString());
        Map<String, Object> result = new HashMap<>();
        try {
            mRepository.save(entity);
            result.put("status", 200);
        } catch (Exception e) {
            result.put("status", -1);
            result.put("error-message", e.getMessage());
        }
        return result;
    }
    // 로그인

    // 회원정보 수정

    // 비밀번호 변경
    
    // 회원탈퇴

    // 관리자(회원목록관리)(url: 127.0.0.1:8558/api/member/list.json)
    @GetMapping("/list.json")
    public Map<String, Object> list() {
        String currtime = (new Date()).toString();
        System.out.print(" [" + currtime + "] (" + this.getClass().getSimpleName() + ") ");
        System.out.println("회원목록확인");
        Map<String, Object> result = new HashMap<>();
        try {
            List<Member> list = mRepository.findAll();
            result.put("status", 200);
            result.put("memberlist", list);
        } catch (Exception e) {
            result.put("status", -1);
            result.put("error-message", e.getMessage());
        }
        
        return result;
    }
    
}
