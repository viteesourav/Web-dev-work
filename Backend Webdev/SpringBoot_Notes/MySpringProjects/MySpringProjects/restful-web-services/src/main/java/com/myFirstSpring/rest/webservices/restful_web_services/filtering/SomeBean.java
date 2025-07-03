package com.myFirstSpring.rest.webservices.restful_web_services.filtering;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//This class shows how to do static filtering of a property.

@JsonIgnoreProperties("field1")  //This is at class level, which field we need to ignore..
public class SomeBean {

    private String field1;

    // static filtering: It ignores this field to send in the response
    @JsonIgnore
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
    public SomeBean(String field1, String field2, String field3) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
    }


    @Override
    public String toString() {
        return "SomeBean [field1=" + field1 + ", field2=" + field2 + ", field3=" + field3 + "]";
    }   
    
}
