package DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import Model.Reserva;

public class ReservaDAO {
	
	/***
	 * M�tode que afegeix una reserva a la BBDD i aplica un descompte si s'ha seleccionat 
	 * 
	 * @param reserva Objecte que cont� la informaci� de la reserva
	 * @param descompte Determina si l'usuari aplicar� el descompte a la reserva
	 * @throws SQLException Llen�a una excepci� quan es produeix un error dins de les sentencies SQL
	 */
	public static void afegirReserva(Reserva reserva, String descompte) throws SQLException {
		Connection conn = null;
		PreparedStatement sent = null;
		
		//Si el descompte no �s NULL (�s a dir, "on") canvia el preu del hotel
		if (descompte != null) {
			//Calculem el preu que hem de restar al preu original
			float preuRestar = (float) (reserva.getPreu() * 0.2);
			
			//Restem per a conseguir el preu final
			float preuFinal = reserva.getPreu() - preuRestar;
			//Estableixem que el preu de l'objecte reserva el preu final
			reserva.setPreu(preuFinal);
		}
		
		try {
			//Estableixem connexi�
			conn = Connexio.getConnexio();
			//Sent�ncia SQL per a inserir a la BBDD
			String sql = "INSERT INTO reserves(nom, persones, telefon, preu, data, pais, imatge) VALUES(?, ?, ?, ?, ?, ?, ?)";
			//Creem l'objecte del PreparedStatement passant-li la sent�ncia SQL
			sent = conn.prepareStatement(sql);
			
			//Igualem cada par�metre de la sent�ncia a cada atribut de la reserva 
			sent.setString(1, reserva.getNom());
			sent.setInt(2, reserva.getPersones());
			sent.setString(3, reserva.getTelefon());
			//Multipliquem el numero de persones pel preu de la reserva
			sent.setFloat(4, reserva.getPreu() * reserva.getPersones());
			sent.setDate(5, Date.valueOf(reserva.getData()));
			sent.setString(6, reserva.getPais());
			sent.setString(7, reserva.getImatge());
			
			//Executem la sent�ncia
			sent.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {			
			//I la tanquem
			sent.close();
		}
	}
	
}
