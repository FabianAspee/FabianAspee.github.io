package com.example.database.operation.util;

import com.example.database.orm.classes.WindTurbineInfo;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public class UtilDatabase {
    public static Function<Long, Function<Session, WindTurbineInfo>> readTurbine = idTurbine-> session -> (session.get(WindTurbineInfo.class,idTurbine));

    public static Function<Integer,Function<Session,String>> readNameTurbine = idTurbine->session -> {
            WindTurbineInfo windTurbineInfo =session.get(WindTurbineInfo.class, (long) idTurbine);
            return windTurbineInfo!=null? windTurbineInfo.getTurbineName():"Not found";
        };

    public static Function<Session,Function<String, List<WindTurbineInfo>>> getAllTurbine= session -> query-> {
            List<WindTurbineInfo> allTurbine= new ArrayList<>();
            for(Object value : session.createQuery(query).stream().toList()){
                allTurbine.add((WindTurbineInfo) value);
            }
            return allTurbine;
        };

    public static Supplier<Function<Session, Optional<List<WindTurbineInfo>>>> readAllTurbine = ()-> session ->
                Optional.of(getAllTurbine.apply(session).apply("FROM WindTurbineInfo"));

    public static Supplier<Function<Session,Optional<List<WindTurbineInfo>>>> readAllTensionLine = readAllTurbine;

    public static Supplier<Function<Session,Optional<List<WindTurbineInfo>>>> readAllTurbineWithTorque = ()->session ->
                Optional.of(getAllTurbine.apply(session).apply("FROM WindTurbineInfo WHERE haveTorquer=1"));

    public static Supplier<Function<Session,Optional<List<WindTurbineInfo>>>> readAllTurbineWithoutTorque = ()->session ->
                Optional.of(getAllTurbine.apply(session).apply("FROM WindTurbineInfo WHERE haveTorquer=0"));

    public static Function<WindTurbineInfo, Function<Session,Integer>> insertTurbine = turbine->(session -> (Integer)session.save(turbine));

    public static Function<List<WindTurbineInfo>, Function<Session,List<Integer>>> insertMultipleTurbine = turbines->(session -> turbines.stream()
                .map(turbine->(Integer)session.save(turbine)).collect(Collectors.toList()));

}
