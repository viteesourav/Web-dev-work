package com.myFirstSpring.rest.webservices.restful_web_services.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

//DAO service  class is needed when we work with database...
// marking the class as @Component let's Spring handles that class's bean.
// Goal: Here it should have the JPA/Hibernate talk to database and implements methods like findAll, save a user, findone User from the database.
@Component
public class UserDaoService {

    //Implementation-1: To keep things simple, we will use static List to store data...
    private static List<User> users = new ArrayList<>();

    private static int userCount = 0;

    // Initializing the above list with some default values
    static {
        users.add(new User(++userCount, "tester1", LocalDate.now().minusYears(30)));
        users.add(new User(++userCount, "tester2", LocalDate.now().minusYears(25)));
        users.add(new User(++userCount, "tester3", LocalDate.now().minusYears(20)));
        users.add(new User(++userCount, "tester4", LocalDate.now().minusYears(15)));
    }

    // returns all the users
    public List<User> findAll() {
        return users;
    }

    // add a new user to the list
    public User save(User user) {
        user.setId(++userCount); // assigns an incremented count value to the new user
        users.add(user);
        return user;
    }

    // returns a particular user -> Returns a user if id matches else return null.
    public User findOne(int id) {
        return users.stream().filter(item -> item.getId().equals(id)).findFirst().orElse(null);
    }

    //delete an user... --> Remvoe the item with the matching id.
    public void deleteById(int id) {
        users.removeIf(item -> item.getId().equals(id));
    }
}
