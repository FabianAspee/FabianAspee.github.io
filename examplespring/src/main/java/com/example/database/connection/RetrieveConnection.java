package com.example.database.connection;

public class RetrieveConnection {
    private RetrieveConnection(){}
    private static class RetrieveConnectionImp{
        static final ConnectionDatabase instance = ConnectionDatabase.getInstanceDbSqlite();
    }
    public static ConnectionDatabase getInstance(){
        return RetrieveConnectionImp.instance;
    }
}
