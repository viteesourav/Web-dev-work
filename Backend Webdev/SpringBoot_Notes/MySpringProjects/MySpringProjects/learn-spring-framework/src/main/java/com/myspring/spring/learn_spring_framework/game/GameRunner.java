package com.myspring.spring.learn_spring_framework.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GameRunner {

    // passing the interface here, gives flexibility on choosing which game functionality to run..
    @Autowired
    private GamingConsole game;

    public GameRunner(GamingConsole game) {
       this.game = game;
    }

    public void run() {
        game.up();
        game.down();
        game.left();
        game.right(); 
    }

}
