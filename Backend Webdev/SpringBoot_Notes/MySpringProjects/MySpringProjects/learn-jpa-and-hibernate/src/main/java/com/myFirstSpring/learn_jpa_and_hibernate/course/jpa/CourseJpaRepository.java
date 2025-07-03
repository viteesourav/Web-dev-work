package com.myFirstSpring.learn_jpa_and_hibernate.course.jpa;

import org.springframework.stereotype.Repository;

import com.myFirstSpring.learn_jpa_and_hibernate.course.Course;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

// This class manages the JPA to tal to database.
@Repository
@Transactional
public class CourseJpaRepository {

    // instead of @autowired, since we are using entityManager, we can use @PersistenceContext
    @PersistenceContext
    private EntityManager entityManager;

    //inserting a row..
    public void insert(Course course) {
        entityManager.merge(course);
    }

    //find a course item
    public Course findById(long id) {
        return entityManager.find(Course.class, id);
    }

    // delete a course Id
    public void deleteById(long id) {
        Course course = entityManager.find(Course.class, id);
        entityManager.remove(course);
    }
}
