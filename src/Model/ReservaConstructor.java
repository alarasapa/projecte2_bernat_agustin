package Model;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

public class ReservaConstructor {

	public static Reserva getReserva(HttpServletRequest request) {
		Reserva reserva = null;
		
		try {
			
			//Extraiem les dades del formulari
			String data = request.getParameter("data");
			
			float preu = Float.parseFloat(request.getParameter("preu").replace(',', '.'));
			String nom = request.getParameter("nom");
			String telefon = request.getParameter("telefon").replace(".", "");
			int persones = Integer.parseInt(request.getParameter("persones"));
			String pais = request.getParameter("paisos");
			String imatge = request.getParameter("imatgeNom");
			
			//Li pasem al objecte reserva les dades del formulari
			reserva = new Reserva(nom, data, persones, telefon, preu, pais, imatge);
			
			return reserva;
	
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
}
