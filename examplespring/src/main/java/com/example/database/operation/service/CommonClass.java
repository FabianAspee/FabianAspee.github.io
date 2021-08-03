package com.example.database.operation.service;

import com.example.database.operation.contract.Operation;
import com.example.database.orm.classes.WindTurbineInfo;

import java.util.List;

public abstract class CommonClass implements Operation{
    @Override
    public WindTurbineInfo readTurbine(int idTurbine) {
        return null;
    }

    @Override
    public List<WindTurbineInfo> readAllTurbine() {
        return null;
    }
}
