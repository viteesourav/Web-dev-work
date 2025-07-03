package com.myspring.spring.learn_spring_framework;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.myspring.spring.learn_spring_framework.enterprise.example.MyWebController;
import com.myspring.spring.learn_spring_framework.game.GameRunner;
import com.myspring.spring.learn_spring_framework.game.MarioGame;
import com.myspring.spring.learn_spring_framework.game.SuperContraGame;

@SpringBootApplication
public class LearnSpringFrameworkApplication {

	public static void main(String[] args) {
	
		// MarioGame game = new MarioGame();
		// SuperContraGame game = new SuperContraGame();
		// GamingConsole game = new PacManGame();   // can directly use interface while initializing the class.
		// GameRunner runner = new GameRunner(game);

		ConfigurableApplicationContext context =
			 SpringApplication.run(LearnSpringFrameworkApplication.class, args);  // holds the context for all instances in spring application.
		GameRunner runner = context.getBean(GameRunner.class);   // using .getBean, i can get instance of any defined component 

		runner.run();

		MyWebController controller = context.getBean(MyWebController.class);
		// System.out.println(controller.getValueFRomBusinessService());
	}

}
