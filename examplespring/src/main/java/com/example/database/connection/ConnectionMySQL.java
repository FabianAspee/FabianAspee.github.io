package com.example.database.connection;


import org.hibernate.cfg.Configuration;

public class ConnectionMySQL extends ConnectionDatabase{
    private static class ConnectionMySQLImpl{
        static final ConnectionDatabase instance = new ConnectionMySQL();
    }

    private ConnectionMySQL(){
        super(new Configuration().configure().buildSessionFactory());
    }

    public static ConnectionDatabase getInstance() {
        return ConnectionMySQLImpl.instance;
    }
}
