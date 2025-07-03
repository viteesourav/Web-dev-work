package com.myspring.spring.learn_spring_framework.game;

import org.springframework.stereotype.Component;

@Component
public class SuperContraGame implements GamingConsole {

    public void up() {
        System.out.println("Contra Game Jump");
    }

    public void down() {
        System.out.println("Contra Game down");
    }

    public void left() {
        System.out.println("Contra Game left");
    }

    public void right() {
        System.out.println("Contra Game right");
    }
}
