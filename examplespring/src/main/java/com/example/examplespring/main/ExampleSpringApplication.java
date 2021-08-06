package com.example.examplespring.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.example"})
public class ExampleSpringApplication {
    public static void main(String[] args) {
        SpringApplication.run(ExampleSpringApplication.class, args);
    }

}
