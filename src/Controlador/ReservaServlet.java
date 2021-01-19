package Controlador;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DAO.ReservaDAO;
import Model.Reserva;
import Model.ReservaConstructor;

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
		try {
			ArrayList<Reserva> llistaReserves = ReservaDAO.getReserves();
			request.setAttribute("llistaReserves", llistaReserves);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		request.getRequestDispatcher("/home.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Reserva res = ReservaConstructor.getReserva(request);
			String descompte = request.getParameter("checkbox");
			
			//Cridem a la funció d'afegir la reserva a la BBDD
			ReservaDAO.afegirReserva(res, descompte);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		//Redirigim al índex
		response.sendRedirect("reservaservlet");
	}

}
