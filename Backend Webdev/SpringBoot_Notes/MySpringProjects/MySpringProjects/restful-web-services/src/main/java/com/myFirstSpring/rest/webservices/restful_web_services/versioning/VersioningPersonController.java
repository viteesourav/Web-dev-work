package com.myFirstSpring.rest.webservices.restful_web_services.versioning;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// This implementation shows how to enable versioning in Spring REST Project
@RestController
public class VersioningPersonController {

    //versioning based on url
    @GetMapping("/v1/person")
    public Person getFirstVersionOfPerson() {
        return new Person("Test Person 1");
    }

     @GetMapping("/v2/person")
    public PersonV2 getSecondVersionOfPerson() {
        return new PersonV2(new Name("Tester", "Version2"));
    }

    // Versioning based on req parameter
    @GetMapping(path = "/person", params = "version=1")
    public Person getPersonVersionOneByReqParam() {
        return new Person("Test Person 1");
    }

    @GetMapping(path = "/person", params = "version=2")
    public PersonV2 getPersonVersionTwoByReqParam() {
        return new PersonV2(new Name("Tester", "Version2"));
    }

    // Versioning based on req header
    @GetMapping(path = "/person", headers = "X-API-VERSION=1")
    public Person getPersonVersionOneByHeader() {
        return new Person("Test Person 1");
    }

    @GetMapping(path = "/person", headers = "X-API-VERSION=2")
    public PersonV2 getPersonVersionTwoByHeader() {
        return new PersonV2(new Name("Tester", "Version2"));
    }

     // Versioning based on content type
    @GetMapping(path = "/person/accept", produces = "application/vnd.company.app-v1+json")
    public Person getPersonVersionOneByMediaType() {
        return new Person("Test Person 1");
    }

    @GetMapping(path = "/person/accept", produces = "application/vnd.company.app-v2+json")
    public PersonV2 getPersonVersionTwoByMediaType() {
        return new PersonV2(new Name("Tester", "Version2"));
    }

}
