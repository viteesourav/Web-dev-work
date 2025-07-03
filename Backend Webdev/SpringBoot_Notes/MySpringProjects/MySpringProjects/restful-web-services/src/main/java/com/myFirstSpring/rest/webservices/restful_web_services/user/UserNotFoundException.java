package com.myFirstSpring.rest.webservices.restful_web_services.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Custom Exception which catches the Error message and Pass it RunTimeException
// NOTE: the below annotation, makes this annotation returns 404 [not found] instead of default 500 [Internal server Error]
@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String message) {
        super(message);
    }
}
