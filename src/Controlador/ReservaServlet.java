package Controlador;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DAO.ReservaDAO;
import Model.Reserva;

/**
 * Servlet implementation class ReservaServlet
 */
@WebServlet("/reservaservlet")
public class ReservaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReservaServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			//Extraiem les dades del formulari
			String data = request.getParameter("data");
			
			float preu = Float.parseFloat(request.getParameter("preu").replace(',', '.'));
			String nom = request.getParameter("nom");
			String telefon = request.getParameter("telefon").replace(".", "");
			int persones = Integer.parseInt(request.getParameter("persones"));
			String descompte = request.getParameter("checkbox");
			String pais = request.getParameter("paisos");
			String imatge = request.getParameter("imatgeNom");
			
			//Creem un objecte reserva amb les dades del formulari
			Reserva reserva = new Reserva(nom, data, persones, telefon, preu, pais, imatge);
			
			//Cridem a la funció d'afegir la reserva a la BBDD
			ReservaDAO.afegirReserva(reserva, descompte);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		//Redirigim al índex
		response.sendRedirect("index.jsp");
	}

}
