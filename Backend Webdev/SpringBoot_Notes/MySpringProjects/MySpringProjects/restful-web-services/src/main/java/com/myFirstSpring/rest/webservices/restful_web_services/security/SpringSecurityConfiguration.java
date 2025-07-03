package com.myFirstSpring.rest.webservices.restful_web_services.security;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

// This bean will take care the filter chain checks for the spring security
@Configuration
public class SpringSecurityConfiguration {

    // we are overwriting the default filterchain..
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // 1. All Req must be authenticated
        http.authorizeHttpRequests(
            auth -> auth.anyRequest().authenticated()
        );

        //2. If req is not auth, a popup is shown. -> withDeafults() This shows the default http basic auth
        http.httpBasic(withDefaults());

        // disable the CSRF for POST, PUT
        http.csrf().disable();

        return http.build();

    }
}
