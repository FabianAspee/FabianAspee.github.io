package com.example.database.connection;

public class ConnectionDatabase {

    private static class ConnectionSQLite{
        static final ConnectionDatabase instance = new ConnectionDatabase();
    }
    private static class ConnectionMySQL{
        static final ConnectionDatabase instance = new ConnectionDatabase();
    }
    private ConnectionDatabase(){}
    public static ConnectionDatabase getInstanceDbSqlite(){
        return ConnectionSQLite.instance;
    }
    public static ConnectionDatabase getInstanceDbMysql(){
        return ConnectionMySQL.instance;
    }
}
