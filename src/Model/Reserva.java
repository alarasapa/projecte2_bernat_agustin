package Model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class Reserva {
	private String nom;
	private String data;
	private int persones;
	private String telefon;
	private float preu;
	
	public Reserva(String nom, String data, int persones, String telefon, float preu) throws SQLException {
		setNom(nom);
		setData(data);
		setPersones(persones);
		setTelefon(telefon);
		setPreu(preu);
	}
	
	public Reserva(ResultSet rs) throws SQLException {
		setNom(rs.getString("nom"));
		setData(String.valueOf(rs.getDate("data")));
		setPersones(rs.getInt("persones"));
		setTelefon(rs.getString("telefon"));
		setPreu(rs.getFloat("preu"));
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getPersones() {
		return persones;
	}

	public void setPersones(int persones) {
		this.persones = persones;
	}

	public String getTelefon() {
		return telefon;
	}

	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}

	public float getPreu() {
		return preu;
	}

	public void setPreu(float preu) {
		this.preu = preu;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

}
