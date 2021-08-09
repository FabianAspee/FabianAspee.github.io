package com.example.examplespring.service;

import com.example.database.operation.util.UtilDatabase;
import com.example.database.orm.classes.WindTurbineInfo;
import com.example.examplespring.contract.Turbine;
import com.example.rabbitmq.Sender;
import com.example.util.Util;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@EnableAutoConfiguration
public record TurbineService(Sender senderService) implements Turbine {

    @Override
    public String hello(@RequestParam(value = "name", defaultValue = "World") final String name) {
        return String.format("Hello %s", name);
    }

    @Override
    public WindTurbineInfo getWindTurbineById(@RequestParam(value = "name", defaultValue = "0") final String id) {
        return Optional.of(id).filter(x -> !x.equals("0") && Util.tryParseInt(x))
                .flatMap(x -> logic.executeFunction(UtilDatabase.readTurbine.apply(Long.valueOf(x))))
                .orElse(null);
    }

    @Override
    public String getWindTurbineNameById(@RequestParam(value = "name", defaultValue = "0") final String id) {
        return String.format("\"%s\"", Optional.of(id).filter(x -> !x.equals("0") && Util.tryParseInt(x))
                .map(x -> String.format("Turbine Name %s", logic.executeFunction(
                        UtilDatabase.readNameTurbine.apply(Integer.valueOf(x))).orElse("Turbine not exist")))
                .orElse("error value"));
    }

    @Override
    public String getAllWindTurbine() {
        return logic.executeFunction(UtilDatabase.readAllTurbine.get()).map(x ->
                String.format("\"Turbine Names are %s\"", x.stream().flatMap(List::stream).map(WindTurbineInfo::getTurbineName)
                        .collect(Collectors.joining(", ")))).orElse("Not found");
    }

    @Override
    public List<String> getAllTensionLine() {
        return logic.executeFunction(UtilDatabase.readAllTensionLine.get()).map(x -> Stream.concat(
                                new ArrayList<String>() {{
                                    add("Tension Line Name are");
                                }}.stream(),
                                x.stream().flatMap(List::stream).map(WindTurbineInfo::getTensionLine)).distinct()
                        .collect(Collectors.toList()))
                .orElseGet(() -> new ArrayList<>() {{
                    add("Not found");
                }});
    }

    @Override
    public Map<Long, String> getAllTurbineWithTorquer() {
        return logic.executeFunction(UtilDatabase.readAllTurbineWithTorque.get()).map(x ->
                        x.stream().flatMap(List::stream).collect(Collectors.toMap(WindTurbineInfo::getId,
                                value -> String.format("Turbine with torque %s", value.getTurbineName()))))
                .orElseGet(() -> new HashMap<>() {{
                    put((long) 0, "Not found");
                }});
    }

    @Override
    public Set<String> getAllTurbineWithoutTorquer() {
        return logic.executeFunction(UtilDatabase.readAllTurbineWithoutTorque.get()).map(x -> Stream.concat(
                                new ArrayList<String>() {{
                                    add("Turbine without torque are");
                                }}.stream(),
                                x.stream().flatMap(List::stream).map(WindTurbineInfo::getTurbineName))
                        .collect(Collectors.toSet()))
                .orElseGet(() -> new HashSet<>() {{
                    add("Not found");
                }});
    }

    @Override
    public String getWindTurbineByIdPost(@RequestParam(value = "name", defaultValue = "0") final String id) {
        return String.format("\"%s\"", Optional.of(id).filter(x -> !x.equals("0") && Util.tryParseInt(x))
                .map(x -> logic.executeFunction(UtilDatabase.readNameTurbine.apply(Integer.parseInt(x)))
                        .map(name -> String.format("Turbine Name %s", name)).orElse("Not Found"))
                .orElse("error value"));
    }

    @Override
    public List<String> getWindAllTurbinePost() {
        return logic.executeFunction(UtilDatabase.readAllTurbine.get()).map(x -> Stream.concat(
                        new ArrayList<String>() {{
                            add("Turbine Name are");
                        }}.stream(),
                        x.stream().flatMap(List::stream).map(WindTurbineInfo::getTurbineName))
                .collect(Collectors.toList())).orElseGet(() -> new ArrayList<>() {{
            add("Not found");
        }});
    }

    @Override
    public int insertTurbine(@RequestParam(value = "turbine", defaultValue = "null") final WindTurbineInfo turbine) {
        return logic.executeFunction(UtilDatabase.insertTurbine.apply(turbine)).orElse(-1);
    }

    @Override
    public List<Integer> insertMultipleTurbine(@RequestParam(value = "turbines", defaultValue = "null") final List<WindTurbineInfo> turbine) {
        return logic.executeFunction(UtilDatabase.insertMultipleTurbine.apply(turbine)).orElseGet(Collections::emptyList);

    }

    @Override
    public void realTimeTurbineById(@RequestParam(value = "id_turbine", defaultValue = "0") final String id) {
        senderService.sendViaDirectExchange(String.format("\"%s\"", Optional.of(id).filter(x -> !x.equals("0") && Util.tryParseInt(x))
                .map(x -> String.format("Turbine Name %s", logic.executeFunction(
                        UtilDatabase.readNameTurbine.apply(Integer.valueOf(x))).orElse("Turbine not exist")))
                .orElse("error value")));
    }

    @Override
    public void realTimeAllTurbine() { 
        getWindAllTurbinePost().forEach(senderService::sendViaDirectExchange);
    }
}
