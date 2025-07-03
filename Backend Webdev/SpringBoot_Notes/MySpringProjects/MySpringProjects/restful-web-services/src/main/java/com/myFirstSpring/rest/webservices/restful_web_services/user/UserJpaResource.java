package com.myFirstSpring.rest.webservices.restful_web_services.user;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.myFirstSpring.rest.webservices.restful_web_services.jpa.PostRepository;
import com.myFirstSpring.rest.webservices.restful_web_services.jpa.UserRepository;

import jakarta.validation.Valid;


// This is the Controller for the user that connects to DB using JPA and Hibernate
@RestController
public class UserJpaResource {

    //using userRepository interface
    @Autowired
    private UserRepository repository;

    @Autowired
    private PostRepository postRepository;

    //GET /users - Fetch all the users
    @GetMapping("/jpa/users")
    public List<User> retrieveAllUsers() {
        return repository.findAll();
    }    

    //GET /users/{id} - Fetch a particular user [Exception is handled for Data not found]
    // With EntityModel and WebMvcLinkBuilder, we will add a link in the resp to fetch all users [HATEOAS]
    @GetMapping("/jpa/users/{id}")
    public EntityModel<User> retrieveUser(@PathVariable int id) {
        Optional<User> user = repository.findById(id);
        if(user.isEmpty()) {
            throw new UserNotFoundException("id:" + id);
        }

        EntityModel<User> entityModel = EntityModel.of(user.get());
        //create and add links to the entityModel
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllUsers());  //using webMvcLinkBuilder to create a link to a particular method in this class
        entityModel.add(link.withRel("all-users"));

        return entityModel;
    } 
    
    //POST /users - Create a new user. [@Valid do the validation checks defined in the User Class]
    @PostMapping("/jpa/users")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User saveResp = repository.save(user);
        // /user/4 --> 4 is the id of the newly created user.
        URI location = ServletUriComponentsBuilder
                            .fromCurrentRequest()
                            .path("/{id}").buildAndExpand(saveResp.getId())
                            .toUri();
        return ResponseEntity.created(location).build(); // you get the url in the response header under "location"
    } 

    //Delete /users/{id} - Delete a particular user [Exception is handled for Data not found]
    @DeleteMapping("/jpa/users/{id}")
    public void deleteUser(@PathVariable int id) {
        repository.deleteById(id);
    } 


    //Adding Routes to fetch Posts. 
    @GetMapping("/jpa/users/{id}/posts")
    public List<Post> retrieveAllPosts(@PathVariable int id) {
        // Find the user
        Optional<User> user = repository.findById(id);
        if(user.isEmpty()) {
            throw new UserNotFoundException("id:" + id);
        }
        return user.get().getPosts();
    } 

    //Adding Routes to fetch a particular post. 
    @GetMapping("/jpa/users/{user_id}/posts/{id}")
    public EntityModel<Post> retrievePostDetails(@PathVariable int user_id, @PathVariable int id) {
        // Find the user
        Optional<User> user = repository.findById(user_id);
        if(user.isEmpty()) {
            throw new UserNotFoundException("id:" + user_id);
        }

        //find the post
        Optional<Post> post = postRepository.findById(id);
        if(post.isEmpty()) {
            throw new UserNotFoundException("Post id:" + id + "not found for the user id: "+ user_id);
        }

        EntityModel<Post> entityModel = EntityModel.of(post.get());
        //create and add links to the entityModel
        WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllPosts(user_id));  //using webMvcLinkBuilder to create a link to a particular method in this class
        entityModel.add(link.withRel("all-posts"));

        return entityModel;

    } 

    // route to post a new Post for a particular user -> id is of the user from pathVariable, and the body must have the Post details
     @PostMapping("/jpa/users/{id}/posts")
    public ResponseEntity<Post> createPostForUser(@PathVariable int id, @Valid @RequestBody Post post) {
        // Find the user
        Optional<User> user = repository.findById(id);
        if(user.isEmpty()) {
            throw new UserNotFoundException("id:" + id);
        }
        // save the user data in post payload
        post.setUser(user.get());

        //save the post
        Post save = postRepository.save(post);

        //we will generate location header link to fetch all posts for this user
        URI location = ServletUriComponentsBuilder
                            .fromCurrentRequest()
                            .path("/{id}").buildAndExpand(save.getId())
                            .toUri();
        return ResponseEntity.created(location).build(); 
    } 
}
