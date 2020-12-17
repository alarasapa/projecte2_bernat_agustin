package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connexio {
	private static String controlador = "com.mysql.jdbc.Driver";
	private static String url = "jdbc:mysql://localhost:3306/pr02_agustin_bernat";
	private static String user = "root";
	private static String password = null;
	private static Connexio instancia = null;
	private static Connection connexio;
	
	private Connexio() {
		try {
			Class.forName(controlador);
			connexio = DriverManager.getConnection(url, user, password);
			
		} catch (SQLException e) {
			e.printStackTrace();
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static Connection getConnexio() {
		if (instancia == null) {
			instancia = new Connexio();
		}
		
		return connexio;
	}
}
