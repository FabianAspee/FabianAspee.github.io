package com.example.database.operation.service;

import com.example.database.connection.ConnectionDatabase;
import com.example.database.connection.RetrieveConnection;
import com.example.database.operation.contract.Operation;
import com.example.database.orm.classes.WindTurbineInfo;
import org.checkerframework.checker.nullness.Opt;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.*;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public abstract class CommonClass implements Operation{
    protected ConnectionDatabase connectionDatabase = RetrieveConnection.getInstance();
    public <B> Optional<B> executeFunction(Function<Session,B> function){
        Transaction transaction = null;
        try (Session session = connectionDatabase.getSession()) {
            transaction = session.beginTransaction();
            B listId =function.apply(session);
            transaction.commit();
            return Optional.of(listId);
        } catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
            return Optional.empty();
        }
    }
}
