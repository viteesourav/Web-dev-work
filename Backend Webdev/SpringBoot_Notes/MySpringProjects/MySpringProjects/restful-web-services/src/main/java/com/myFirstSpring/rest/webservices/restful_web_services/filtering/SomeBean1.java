package com.myFirstSpring.rest.webservices.restful_web_services.filtering;

import com.fasterxml.jackson.annotation.JsonFilter;

// This bean is used for dynamic filtering..
@JsonFilter("SomeBeanFilter")
public class SomeBean1 {

    private String field1;

    private String field2;
    
    private String field3;
    
    public String getField1() {
        return field1;
    }
    public String getField2() {
        return field2;
    }
    public String getField3() {
        return field3;
    }
    public SomeBean1(String field1, String field2, String field3) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
    }


    @Override
    public String toString() {
        return "SomeBean [field1=" + field1 + ", field2=" + field2 + ", field3=" + field3 + "]";
    }   
    
}
