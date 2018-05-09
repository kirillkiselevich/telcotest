package utils;

import model.User;

import java.sql.*;
import java.util.List;

public class Database {
    private static final String url = "jdbc:mysql://localhost:3306/telco?autoReconnect=true&useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
    private static final String user = "dev";
    private static final String password = "dev";


    private static Connection con;
    private static PreparedStatement stmt;

    public Database(List<User> userList) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, user, password);

            stmt = con.prepareStatement("INSERT INTO telco.user (id, name, age, gender, email) VALUES (?, ?, ?,?,?) ON DUPLICATE KEY UPDATE name=?, age=?,gender=?,email=?;");
            for (User u : userList) {
                stmt.setString(1, u.getId());
                stmt.setString(2, u.getName());
                stmt.setInt(3, u.getAge());
                stmt.setString(4, u.getGender());
                stmt.setString(5, u.getEmail());
                stmt.setString(6, u.getName());
                stmt.setInt(7, u.getAge());
                stmt.setString(8, u.getGender());
                stmt.setString(9, u.getEmail());
                stmt.executeUpdate();
            }

        } catch (SQLException sqlEx) {
            sqlEx.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                con.close();
            } catch (SQLException se) {
            }
            try {
                stmt.close();
            } catch (SQLException se) {
            }

        }
    }

}
