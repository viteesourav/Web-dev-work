package com.myFirstSpring.rest.webservices.restful_web_services.versioning;


// This is the Person bean used for implementing versioning
public class Person {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Person [name=" + name + "]";
    }

    public Person(String name) {
        this.name = name;
    }

}
