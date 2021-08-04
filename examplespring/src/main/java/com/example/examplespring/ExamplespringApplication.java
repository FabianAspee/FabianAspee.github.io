package com.example.examplespring;

import com.example.database.connection.RetrieveConnection;
import com.example.database.operation.contract.Operation;
import com.example.database.operation.service.CommonClass;
import com.example.database.orm.classes.WindTurbineInfo;
import com.example.util.Util;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@SpringBootApplication
@RestController
public class ExamplespringApplication {
    private final Operation logic = RetrieveConnection.getInstanceImplementation();
    public static void main(String[] args) {
        SpringApplication.run(ExamplespringApplication.class, args);
    }
    @GetMapping("/example")
    public String hello(@RequestParam(value="name",defaultValue="World")final String name){
        return String.format("Hello %s", name);
    }

    @GetMapping("/nameturbine")
    public String getWindTurbineById(@RequestParam(value="name",defaultValue="0")final Optional<String> id){
        return id.filter(x-> !x.equals("0") && Util.tryParseInt(x))
                .map(x->String.format("Turbine Name %s", logic.readNameTurbine(Integer.parseInt(x))))
                .orElse("error value");
    }
    @GetMapping("/nameallturbine")
    public String getAllWindTurbine(){
        return  String.format("Turbine Names are %s", logic.readAllTurbine().map(x->
                        x.stream().map(WindTurbineInfo::getTurbineName).collect(Collectors.joining(",")))
                .orElseGet(()->"Not found"));
    }

    @GetMapping("/tensionlineturbine")
    public String getAllTensionLine(){
        return  String.format("Tension Line Name are %s", logic.readAllTensionLine().map(x->
                x.stream().map(WindTurbineInfo::getTensionLine).collect(Collectors.joining(",")))
                .orElseGet(()->"Not found"));
    }

    @GetMapping("/turbinewithtorquer")
    public String getAllTurbineWithTorquer(){
        return  String.format("Turbine Names are %s", logic.readAllTurbine().map(x->
                x.stream().map(WindTurbineInfo::getTurbineName).collect(Collectors.joining(",")))
                .orElseGet(()->"Not found"));
    }

    @GetMapping("/turbinewithouttorquer")
    public String getAllTurbineWithoutTorquer(){
        return  String.format("Turbine Names are %s", logic.readAllTurbine().map(x->
                x.stream().map(WindTurbineInfo::getTurbineName).collect(Collectors.joining(",")))
                .orElseGet(()->"Not found"));
    }
}
