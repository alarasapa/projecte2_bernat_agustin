package DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import Model.Reserva;

public class ReservaDAO {
	
	/***
	 * Métode que afegeix una reserva a la BBDD i aplica un descompte si s'ha seleccionat 
	 * 
	 * @param reserva Objecte que conté la informació de la reserva
	 * @param descompte Determina si l'usuari aplicarà el descompte a la reserva
	 * @throws SQLException Llença una excepció quan es produeix un error dins de les sentencies SQL
	 */
	public static void afegirReserva(Reserva reserva, String descompte) throws SQLException {
		Connection conn = null;
		PreparedStatement sent = null;
		
		//Si el descompte no és NULL (és a dir, "on") canvia el preu del hotel
		if (descompte != null) {
			//Calculem el preu que hem de restar al preu original
			float preuRestar = (float) (reserva.getPreu() * 0.2);
			
			//Restem per a conseguir el preu final
			float preuFinal = reserva.getPreu() - preuRestar;
			//Estableixem que el preu de l'objecte reserva el preu final
			reserva.setPreu(preuFinal);
		}
		
		try {
			//Estableixem connexió
			conn = Connexio.getConnexio();
			
			//Senténcia SQL per a inserir a la BBDD
			String sql = "INSERT INTO reserves(nom, persones, telefon, preu, data, pais, imatge) VALUES(?, ?, ?, ?, ?, ?, ?)";
			
			//Creem l'objecte del PreparedStatement passant-li la senténcia SQL
			sent = conn.prepareStatement(sql);
			
			//Igualem cada paràmetre de la senténcia a cada atribut de la reserva 
			sent.setString(1, reserva.getNom());
			sent.setInt(2, reserva.getPersones());
			sent.setString(3, reserva.getTelefon());
			//Multipliquem el numero de persones pel preu de la reserva
			sent.setFloat(4, reserva.getPreu() * reserva.getPersones());
			sent.setDate(5, Date.valueOf(reserva.getData()));
			sent.setString(6, reserva.getPais());
			sent.setString(7, reserva.getImatge());
			
			//Executem la senténcia
			sent.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {			
			//I la tanquem
			sent.close();
		}
	}
	
	/***
	 * Funció per a afegir reserves en una Arraylist
	 * @return Retorna la llista de reserves que es troben
	 * @throws SQLException Llença una excepció quan es produeix un error dins de les sentencies SQL
	 */
	public static ArrayList<Reserva> getReserves() throws SQLException{
		//Creem un objecte ArrayList de tipus Reserva on guardarem
		//Totes les reserves emmagatzemades en la BBDD
		ArrayList<Reserva> llistaReserves = new ArrayList<Reserva>();
		
		//Inicialitzem les variables
		Connection conn = null;
		Statement sent = null;
		ResultSet res = null;
		
		try {
			//Estableixem connexió
			conn = Connexio.getConnexio();
			
			//Senténcia SQL per a consultar a la BBDD
			String sql = "SELECT data, pais, nom, telefon, persones, preu FROM reserves";
			
			//Creem la senténcia amb la connexió anterior
			sent = conn.createStatement();
			
			//Executem la consulta amb la senténcia i guardem el 
			//resultat en el ResultSet
			res = sent.executeQuery(sql);
			
			//Creem un bucle per a cada fila de la BBDD...
			while (res.next()) {
				//i l'afegim a la llista de reserves
				llistaReserves.add(new Reserva(res));
			}
			
			//Retornem la llista 
			return llistaReserves;
			
		} catch (SQLException e) {
			//En cas d'error, retornem NULL
			e.printStackTrace();
			return null;
			
		} finally {
			res.close();
			sent.close();
		}
		
	}
	
}
