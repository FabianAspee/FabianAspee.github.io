package com.example.examplespring.contract;

import com.example.database.connection.RetrieveConnection;
import com.example.database.operation.contract.Operation;
import com.example.database.orm.classes.WindTurbineInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface Turbine {
    Operation logic = RetrieveConnection.getInstanceImplementation();

    @GetMapping("/api/example")
    String hello(@RequestParam(value = "name", defaultValue = "World") String name);

    @GetMapping(value ="/api/infoturbine")
    WindTurbineInfo getWindTurbineById(@RequestParam(value = "name", defaultValue = "0") String id);

    @GetMapping(value ="/api/nameturbine")
    String getWindTurbineNameById(@RequestParam(value = "name", defaultValue = "0") String id);

    @GetMapping("/api/nameallturbine")
    String getAllWindTurbine();

    @GetMapping("/api/tensionlineturbine")
    List<String> getAllTensionLine();

    @GetMapping("/api/turbinewithtorquer")
    Map<Long,String> getAllTurbineWithTorquer();

    @GetMapping("/api/turbinewithouttorquer")
    Set<String> getAllTurbineWithoutTorquer();

    @PostMapping("/api/nameturbinepost")
    String getWindTurbineByIdPost(@RequestParam(value = "name", defaultValue = "0") String id);

    @PostMapping("/api/nameallturbinepost")
    List<String> getWindAllTurbinePost();
    @PostMapping("/api/insertturbine")
    int insertTurbine(@RequestParam(value = "turbine", defaultValue = "null") final WindTurbineInfo turbine);

    @PostMapping("/api/insertmultipleturbine")
    List<Integer> insertMultipleTurbine(@RequestParam(value = "turbine", defaultValue = "null")
                              final List<WindTurbineInfo> turbine);

    @PostMapping("/api/realtimerabbitturbinebyid")
    void realTimeTurbineById(@RequestParam(value = "name", defaultValue = "0") final String id);

    @PostMapping("/api/realtimeallturbine")
    void realTimeAllTurbine();
}
