package com.myFirstSpring.rest.webservices.restful_web_services.helloWorld;

// This is how a simple Java bean class looks like...
public class HelloWorldBean {

    private String message;
    
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    // parameterized constructor...
    public HelloWorldBean(String message) {
        this.message = message;
    }
    
    @Override
    public String toString() {
        return "HelloWorldBean [message=" + message + "]";
    }
}
