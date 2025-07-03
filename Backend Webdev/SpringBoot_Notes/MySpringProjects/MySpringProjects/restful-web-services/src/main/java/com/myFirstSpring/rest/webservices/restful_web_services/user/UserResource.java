package com.myFirstSpring.rest.webservices.restful_web_services.user;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.net.URI;
import java.util.List;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import jakarta.validation.Valid;


// This is the Controller for the User Entity...
@RestController
public class UserResource {

    //use constructor injection Approach here... 
    private UserDaoService service;

    public UserResource(UserDaoService service) {
        this.service = service;
    }

    //GET /users - Fetch all the users
    @GetMapping("/users")
    public List<User> retrieveAllUsers() {
        return service.findAll();
    }    

    //GET /users/{id} - Fetch a particular user [Exception is handled for Data not found]
    // With EntityModel and WebMvcLinkBuilder, we will add a link in the resp to fetch all users [HATEOAS]
    @GetMapping("/users/{id}")
    public EntityModel<User> retrieveUser(@PathVariable int id) {
        User user = service.findOne(id);
        if(user == null) {
            throw new UserNotFoundException("id:" + id);
        }

        EntityModel<User> entityModel = EntityModel.of(user);
        //create and add links to the entityModel
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllUsers());  //using webMvcLinkBuilder to create a link to a particular method in this class
        entityModel.add(link.withRel("all-users"));

        return entityModel;
    } 
    
    //POST /users - Create a new user. [@Valid do the validation checks defined in the User Class]
    @PostMapping("/users")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User saveResp = service.save(user);
        // /user/4 --> 4 is the id of the newly created user.
        URI location = ServletUriComponentsBuilder
                            .fromCurrentRequest()
                            .path("/{id}").buildAndExpand(saveResp.getId())
                            .toUri();
        return ResponseEntity.created(location).build(); // you get the url in the response header under "location"
    } 

    //Delete /users/{id} - Delete a particular user [Exception is handled for Data not found]
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable int id) {
        service.deleteById(id);
    } 
}
