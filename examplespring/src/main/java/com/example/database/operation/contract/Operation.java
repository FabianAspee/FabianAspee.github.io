package com.example.database.operation.contract;

import com.example.database.orm.classes.WindTurbineInfo;

import java.util.List;

public interface Operation {
    WindTurbineInfo readTurbine(int idTurbine);
    List<WindTurbineInfo> readAllTurbine();
}
