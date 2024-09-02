package com.project.gitpolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class GitpolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(GitpolioApplication.class, args);
	}

}
