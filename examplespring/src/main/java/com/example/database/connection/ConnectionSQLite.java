package com.example.database.connection;


import org.hibernate.Session;
import org.hibernate.cfg.Configuration;

public class ConnectionSQLite extends ConnectionDatabase{

    private static class ConnectionSQLiteImpl{
        static final ConnectionDatabase instance = new ConnectionSQLite();
    }

    private ConnectionSQLite(){
        super(new Configuration().configure().buildSessionFactory());
    }

    public static ConnectionDatabase getInstance() {
        return ConnectionSQLiteImpl.instance;
    }
}
