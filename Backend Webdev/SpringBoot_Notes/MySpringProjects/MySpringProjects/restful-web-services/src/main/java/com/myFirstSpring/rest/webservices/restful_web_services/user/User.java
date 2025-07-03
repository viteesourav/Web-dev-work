package com.myFirstSpring.rest.webservices.restful_web_services.user;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;

// This is the User bean for handling User info...
// NOTE: validation also added for birthDate and name
// WE are using JPA to connect user bean to DB. Since user is a default table in H2, we will connect user class to user_details table in db.
@Entity(name = "user_details")
public class User {

    @Id  // Make sure "id" property is a primary key
    @GeneratedValue
    private Integer id;

    @Size(min = 2, message = "Name should has at least 2 characters")
    @JsonProperty("user_name")
    private String name;

    @Past(message = "birth date cannot be future dated")

    private LocalDate birthDate;

    //For every user will have a List of posts under it.
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Post> posts;

    
    // Added since we are using this as Entity
    protected User() {
        
    }
    
    public User(Integer id, String name, LocalDate birthDate) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public LocalDate getBirthDate() {
        return birthDate;
    }
    
    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }
    
    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }
    
    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", birthDate=" + birthDate + "]";
    }

    
}
