package com.myFirstSpring.learn_jpa_and_hibernate.course.springdatajpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myFirstSpring.learn_jpa_and_hibernate.course.Course;
import java.util.List;



// This shows implementation of Spring data JPA
// NOTE: it extends JpaRepository for Course class where the primary key is of type long.
public interface CourseSpringDataJpaRepository extends JpaRepository<Course, Long> {

    // Custom methods defined on the properties of the class
    List<Course> findByAuthor(String author);

    List<Course> findByName(String name);
}
