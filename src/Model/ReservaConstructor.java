package Model;

import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.Charset;


public class ReservaConstructor {

	public static Reserva getReserva(HttpServletRequest request) {
		Reserva reserva = null;
		
		try {
			//Creem els charsets per als noms amb caracters especials
			Charset c = Charset.forName("UTF-8");
			Charset c2 = Charset.forName("ISO-8859-1");
			
			//Extraiem les dades del formulari
			String data = request.getParameter("data");
			
			float preu = Float.parseFloat(request.getParameter("preu").replace(',', '.'));
			String nom = request.getParameter("nom");
			String telefon = request.getParameter("telefon").replace(".", "");
			int persones = Integer.parseInt(request.getParameter("persones"));
			
			String pais = request.getParameter("paisos");
			
			
			pais = new String(pais.getBytes(c2), c);
			
			String imatge = request.getParameter("imatgeNom");
			imatge = new String(imatge.getBytes(c2), c);
			
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
