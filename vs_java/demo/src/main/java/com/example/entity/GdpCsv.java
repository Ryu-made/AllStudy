package com.example.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Data // getter, setter, constructor, toString 한번에
@Document(collection = "gdp_csv")
public class GdpCsv {
    

    @Id
    String id;

    @Field(name = "year")
    int year;
    
    double korea;
    double china;
    double japan;
    double usa;
    double brazil;
    double peru;
    double finland;
    double france;
    double germany;
    double sweden;
    double england;
    double southAfrica;
    double australia;
}
