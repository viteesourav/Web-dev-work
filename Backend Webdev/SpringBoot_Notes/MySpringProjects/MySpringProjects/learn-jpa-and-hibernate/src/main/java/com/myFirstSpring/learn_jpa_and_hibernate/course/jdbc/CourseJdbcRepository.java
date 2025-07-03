package com.myFirstSpring.learn_jpa_and_hibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.myFirstSpring.learn_jpa_and_hibernate.course.Course;

// using Spring JDBC, I want to fire queries...
@Repository
public class CourseJdbcRepository {

    @Autowired
    private JdbcTemplate springJdbcTemplate;

    private static String INSER_QUERY = 
        """
            insert into course(id, name, author)
            values(?, ?, ?)

        """;
    
    private static String DELETE_QUERY = 
        """
            delete from course where id = ?

        """;
    
    private static String SELECT_QUERY = 
        """
            select * from course where id = ?

        """;

    // Insert a Course data in Database using spring JDBC
    public void insert(Course course) {
        springJdbcTemplate.update(INSER_QUERY, course.getId(), course.getName(), course.getAuthor());
    }

    // delate a Course
    public void deleteById(long id) {
        springJdbcTemplate.update(DELETE_QUERY, id);
    }

     // query a Course -> We need to map REsultSet --> bean [Row Mapper]
    public Course findById(long id) {
        return springJdbcTemplate.queryForObject(SELECT_QUERY, new BeanPropertyRowMapper<>(Course.class), id);
    }



}
