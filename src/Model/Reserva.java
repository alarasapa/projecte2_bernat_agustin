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
	private String pais;
	private String imatge;
	
	public Reserva(String nom, String data, int persones, String telefon, float preu, String pais, String imatge) throws SQLException {
		setNom(nom);
		setData(data);
		setPersones(persones);
		setTelefon(telefon);
		setPreu(preu);
		setPais(pais);
		setImatge(imatge);
	}
	
	public Reserva(ResultSet rs) throws SQLException {
		setNom(rs.getString("nom"));
		setData(String.valueOf(rs.getDate("data")));
		setPersones(rs.getInt("persones"));
		setTelefon(rs.getString("telefon"));
		setPreu(rs.getFloat("preu"));
		setPais(rs.getString("pais"));
		setImatge(rs.getString("imatge"));
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
		if (persones == 0) throw new Error("No es pot reservar si no hi han persones");
		
		else {			
			this.persones = persones;
		}
		
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

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getImatge() {
		return imatge;
	}

	public void setImatge(String imatge) {
		this.imatge = imatge;
	}

}
