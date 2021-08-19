package com.example.database.connection;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

public abstract class ConnectionDatabase {
    public Session getSession(){
        return factory.openSession();
    }
    protected final SessionFactory factory;
    protected ConnectionDatabase(Configuration configuration){
        configuration = configuration.configure();
        configuration.setProperty("hibernate.connection.url", "jdbc:sqlite:"+"src/main/resources/databases/plt_wind_turbine.db");
        factory = configuration.buildSessionFactory();
    }
}
