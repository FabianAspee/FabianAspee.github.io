package com.example.database.operation.contract;

import org.hibernate.Session;

import java.util.Optional;
import java.util.function.Function;

public interface Operation{
    <B> Optional<B> executeFunction(Function<Session,B> function);

}
