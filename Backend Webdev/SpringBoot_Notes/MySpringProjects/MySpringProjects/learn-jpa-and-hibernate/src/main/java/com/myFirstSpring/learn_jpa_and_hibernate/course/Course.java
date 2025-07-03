package com.myFirstSpring.learn_jpa_and_hibernate.course;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

// using JPA here to map our bean to database..
// NOTE: Since our class name and column name is same in bean and database, mentioning name is not mandatory.

// @Entity(name = "CourseTable_database_name")
@Entity
public class Course {

    @Id
    private long id;

    // @Column(name="name")
    private String name;

    // @Column(name="author")
    private String author;
    
    public Course() {
        
    }
    
    public Course(long id, String name, String author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }

    public long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getAuthor() {
        return author;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Course [id=" + id + ", name=" + name + ", author=" + author + "]";
    }
}
