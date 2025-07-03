package com.myFirstSpring.learn_jpa_and_hibernate.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// import com.myFirstSpring.learn_jpa_and_hibernate.course.jdbc.CourseJdbcRepository;
import com.myFirstSpring.learn_jpa_and_hibernate.course.jpa.CourseJpaRepository;
import com.myFirstSpring.learn_jpa_and_hibernate.course.springdatajpa.CourseSpringDataJpaRepository;

// This class implements CommandLinerunner interface that makes the code run on startup..
@Component
public class CourseCommandLineRunner implements CommandLineRunner {

    // This is the JDBC appraoch to connect to database
    // @Autowired
    // private CourseJdbcRepository repository;

    // This is the JPA Approach to connect to database
    // @Autowired
    // private CourseJpaRepository repository;

    //This is the spring data JPA Approach
    @Autowired
    private CourseSpringDataJpaRepository repository;

    // This method is triggered when the application starts..
    @Override
    public void run(String... args) throws Exception {
    // Below works for JDBC and JPA approach
        // repository.insert(new Course(2, "Learn JDBC", "admin"));
        // repository.insert(new Course(3, "Learn Tester1", "admin"));
        // repository.insert(new Course(4, "Learn Tester2", "admin"));
        // repository.insert(new Course(5, "Learn Tester3", "admin"));

        // //delete a particular id  --> We inserted above and immediately deleted it below
        // repository.deleteById(3);

        // //Query a particular entry.
        // System.out.println(repository.findById(2));  // prints in the server console.
        // System.out.println(repository.findById(4));  

    // Below works for Spring Data JPA Approach
        repository.save(new Course(2, "Learn JDBC", "admin"));
        repository.save(new Course(3, "Learn Tester1", "admin"));
        repository.save(new Course(4, "Learn Tester2", "admin"));
        repository.save(new Course(5, "Learn Tester3", "admin"));

        //delete a particular id  --> We inserted above and immediately deleted it below
        repository.deleteById(3l);  //since id is expecting long value

        //Query a particular entry.
        System.out.println(repository.findById(2l));  // prints in the server console.
        System.out.println(repository.findById(4l));

        System.out.println(repository.findAll());
        System.out.println(repository.count());
        
        // custom methods defined
        System.out.println(repository.findByAuthor("admin"));
        System.out.println(repository.findByName("Learn Tester2"));
    }

}
