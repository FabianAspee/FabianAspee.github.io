package com.example.database.operation.service;

import com.example.database.connection.ConnectionDatabase;
import com.example.database.connection.RetrieveConnection;
import com.example.database.operation.contract.Operation;
import com.example.database.orm.classes.WindTurbineInfo;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.*;

public abstract class CommonClass implements Operation{
    protected ConnectionDatabase connectionDatabase = RetrieveConnection.getInstance();
    @Override
    public WindTurbineInfo readTurbine(int idTurbine) {
        Session session = connectionDatabase.getSession();
        Transaction transaction = null;
        WindTurbineInfo windTurbineInfo = null;
        try {
            transaction = session.beginTransaction();
            windTurbineInfo =session.get(WindTurbineInfo.class,idTurbine);
            transaction.commit();
        } catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return windTurbineInfo;
    }

    @Override
    public String readNameTurbine(int idTurbine) {
        Session session = connectionDatabase.getSession();
        Transaction transaction = null;
        WindTurbineInfo windTurbineInfo = null;
        try {
            transaction = session.beginTransaction();
            windTurbineInfo =session.get(WindTurbineInfo.class, (long) idTurbine);
            transaction.commit();
        } catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return windTurbineInfo!=null? windTurbineInfo.getTurbineName():"Not found";
    }

    private List<WindTurbineInfo> getAllTurbine(Session session){
        List<WindTurbineInfo> allTurbine= new ArrayList<>();
        for(Object value : session.createQuery("FROM WindTurbineInfo").stream().toList()){
            allTurbine.add((WindTurbineInfo) value);
        }
        return allTurbine;
    }

    @Override
    public Optional<List<WindTurbineInfo>> readAllTurbine() {
        Optional<List<WindTurbineInfo>> allTurbine = Optional.empty();
        Transaction transaction = null;
        try (Session session = connectionDatabase.getSession()) {
            transaction = session.beginTransaction();
            allTurbine = Optional.of(getAllTurbine(session));
            transaction.commit();
        } catch (HibernateException e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
        return allTurbine;
    }
}
