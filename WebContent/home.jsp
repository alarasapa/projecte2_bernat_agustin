<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Index</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="estils/estils.css">
	<script src="dataHora.js"></script>
	<script src="dades.js"></script>
</head>

<body onload="init()">
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #5d758c !important;">
	  	<div class="container-fluid">
	  		<div id=logo>
	  			<img src="imatges/imatgesAuxiliars/Calavera_png_tranparente.png" height="100px">
	  		</div>
		    <div><h1>WONDERFUL TRAVEL</h1></div>
		        
			<div class="mr-2"><div id="hora"></div></div>
		</div>
	 </nav>
	 <br><br>
	<div class="container">
		<div class="row">
			<div class="col border-end">
				<form action="reservaservlet" name="formulariReserva" method="POST">
					<div class="row">
				    	<div class="col col-lg-9">
						    <label>Data</label>
						    <input type="date" class="form-control form-control-sm" name="data" onkeydown ="return false" required>
						    
						    <div class="row">
						    	<div class="col mr-2">
						    		<label>Continents</label><select id="continents" class="form-select" onchange="escullContinent()" required></select>
						    	</div>
						    	<div class="col">
						    		<label>Països</label>
						    		<select class="form-select"name="paisos" id="paisos" onchange="escullPais()" disabled></select>
						    	</div>
						    </div>
						    
							<input type="hidden" name="imatgeNom" id="imatgeNom">
							
							<label>Preu (€)</label><input type="text" class="form-control form-control-sm" id="preu" name="preu" readonly>
							
							<label>Nom </label>
						    <input type="text" name="nom" class="form-control form-control-sm"   pattern="[a-zA-Z]+" placeholder="Introdueix el teu nom" required>
						    
						    <label>Telèf. </label><input type="tel"  class="form-control form-control-sm"name="telefon" placeholder="XXX.YYY.ZZZ" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}" required>
							
							<label>Persones </label><input type="text" class="form-control form-control-sm mb-2" name="persones" pattern ="[0-9]+" placeholder="Introdueix el número de persones (1,2,3,...)" required>
							
							<div class="form-check form-switch mb-2">
								<input name="checkbox" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
								<label class="form-check-label" for="flexSwitchCheckDefault">Descompte 20%</label>
							</div>
							
							<div class="d-grid gap-2">
								<input name="guardaReserva" class="btn btn-outline-primary" type="submit" value="Afegir">
							</div>
					    </div>
				    	<div class="col">
				    </div>
				</div>
				</form>
			</div>
			
			<div class="col-md-6 ms-auto">
				<div class="contenidoImagen ml-2">
					<img id="imatge" name="imatge" width="300" height="300"><br><br>
				</div>
			</div>
			</div>
			
	</div>
	<br><br><br>
	<div class="imatge">
		<div class="container">
			<c:choose>
				<c:when test="${empty llistaReserves}">
				<br><br>
					<hr>
					<label>No hi han reserves en la base de dades</label>
				</c:when>
				<c:otherwise>
				<div class="row">
					<c:forEach var="reserva" items="${llistaReserves}">
						
				        	<div class="col-md-4">
				            	<div class="card mb-4 box-shadow shadow-sm">
				                	<img class="card-img-top" height="300px" width="300px" src="${reserva.imatge}" alt="Card image cap">
				                	<div class="card-body">
				                  		<p class="card-text">
							                  Sr/Sra: ${reserva.nom}<br>
							                  A: ${reserva.pais}<br>
							                  Data : ${reserva.data}<br>
							                  Preu: ${reserva.preu}€<br>
							                  Persona/es: ${reserva.persones}<br>
							                  Tel: ${reserva.telefon}<br>
				                  		</p>
				                  		<div class="d-flex justify-content-end align-items-center">
				                  			<a class="fa fa-trash" style="font-size:30px" href="eliminarservlet?elimid=${reserva.id}"></a>
				                  		</div>
				                	</div>
				              	</div>
				            </div>
				         
					</c:forEach>
					</div>
				</c:otherwise>
			</c:choose>  
		</div>
	</div>
</body>
</html>