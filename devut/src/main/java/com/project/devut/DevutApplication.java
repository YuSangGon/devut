package com.project.devut;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class DevutApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevutApplication.class, args);
	}

}
