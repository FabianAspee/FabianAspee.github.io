package com.example.database.connection;

import com.example.database.operation.contract.Operation;
import com.example.database.operation.service.CommonClass;
import com.example.database.operation.service.SQLiteClass;

public class RetrieveConnection {
    private RetrieveConnection(){}
    private static class RetrieveConnectionImp{
        static final ConnectionDatabase instanceSQLite = ConnectionSQLite.getInstance();
        static final ConnectionDatabase instanceMySQL = ConnectionMySQL.getInstance();
    }
    public static ConnectionDatabase getInstance(){
        try{
            return RetrieveConnectionImp.instanceSQLite;
        }catch(Exception e){
            return RetrieveConnectionImp.instanceMySQL;
        }
    }
    public static Operation getInstanceImplementation(){
        return new SQLiteClass();
    }
}
