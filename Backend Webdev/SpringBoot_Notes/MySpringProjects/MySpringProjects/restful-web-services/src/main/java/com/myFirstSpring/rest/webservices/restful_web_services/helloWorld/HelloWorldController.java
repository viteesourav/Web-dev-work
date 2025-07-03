package com.myFirstSpring.rest.webservices.restful_web_services.helloWorld;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// REST API
@RestController 
public class HelloWorldController {

    private MessageSource messageSource;

    // constructor injection
    public HelloWorldController(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    // url: hello-world
    // resp: "Hello World"
    // @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
    @GetMapping(path = "/hello-world")   // [Recommended annotation]
    public String helloWorld() {
        return "Hello World1";
    }

    @GetMapping(path = "/hello-world-bean")   
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World From Bean");
    }

    // Implementing a path parameter Request
    @GetMapping(path = "/hello-world/path-variable/{name}")   
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World from path variable By %s", name));
    }

    // Internationalization of the Response --> using messageSource
    @GetMapping(path = "/hello-world-i18n")   
    public String helloWorldI18n() {
        
        Locale locale = LocaleContextHolder.getLocale(); //returns locale associated with current thread or returns system default locale
        return messageSource.getMessage("good.morning.message", null, "Default Message", locale);
    }
}
