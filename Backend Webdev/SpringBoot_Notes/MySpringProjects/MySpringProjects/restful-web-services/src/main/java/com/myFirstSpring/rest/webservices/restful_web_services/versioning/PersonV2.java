package com.myFirstSpring.rest.webservices.restful_web_services.versioning;

// This is the V2 Person bean for versioning
public class PersonV2 {
    
    private Name name;

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public PersonV2(Name name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "PersonV2 [name=" + name + "]";
    }

}
