package com.myFirstSpring.rest.webservices.restful_web_services.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myFirstSpring.rest.webservices.restful_web_services.user.Post;

// This interface implements the String data JPA by extending to jpaRepository
// This will manage the Post class which has the primary key of type Integer.
public interface PostRepository extends JpaRepository<Post, Integer> {

}
