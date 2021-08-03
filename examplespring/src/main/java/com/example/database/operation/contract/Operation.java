package com.example.database.operation.contract;

import com.example.database.orm.classes.WindTurbineInfo;

import java.util.List;
import java.util.Optional;

public interface Operation {
    WindTurbineInfo readTurbine(int idTurbine);

    String readNameTurbine(int idTurbine);

    Optional<List<WindTurbineInfo>> readAllTurbine();
}
