package com.example.database.operation.contract;

import com.example.database.orm.classes.WindTurbineInfo;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public interface Operation{
    <B> Optional<B> executeFunction(Function<Session,B> function);

}
