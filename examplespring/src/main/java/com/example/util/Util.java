package com.example.util;

public class Util {
    public static boolean tryParseInt(String value){
        try {
             Integer.parseInt(value);
             return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
