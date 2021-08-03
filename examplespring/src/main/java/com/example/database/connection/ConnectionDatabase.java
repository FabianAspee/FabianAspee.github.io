package com.example.database.connection;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public abstract class ConnectionDatabase {
    public Session getSession(){
        return factory.openSession();
    }
    protected final SessionFactory factory;
    protected ConnectionDatabase(SessionFactory factory){
        this.factory = factory;
    }
}
