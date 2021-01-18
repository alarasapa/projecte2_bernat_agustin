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
	<div class ="encabezado shadow rounded">
		<div id=logo><img src="imatges/imatgesAuxiliars/Calavera_png_tranparente.png" height="100px"></div>
		<div id="hora"></div>
	</div>
	<br><br>
	<div class="container">
		<div class="row">
			<div class="col border-end">
				<form action="reservaservlet" name="formulariReserva" method="POST">
				 <div class="row">
				    <div class="col-9">
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
						
						<label>Persones </label><input type="text" class="form-control form-control-sm" name="persones" pattern ="[0-9]+" placeholder="Introdueix el número de persones (1,2,3,...)" required>
						
						<div class="form-check form-switch">
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
		<div class="imatge">
			<!--<img alt="" src="imatges/africa/angola.jpg">-->
		</div>
		</form>
			</div>
			<div class="col">
				<div class="contenidoImagen ml-2">
					<img id="imatge" name="imatge" width="300" height="300"><br><br>
				</div>
			</div>
			</div>
			
	</div>
	<div class="imatge">
		<c:choose>
			<c:when test="${empty llistaReserves}">
				<p>No hi han reserves en la base de dades</p>
			</c:when>
			
			<c:otherwise>
				<c:forEach var="reserva" items="${llistaReserves}">
					<div class="imatgeReserva">
						<a class="fa fa-trash" href="eliminarservlet"></a>
						<p>Sr/Sra: ${reserva.nom}</p>
						<p>A: ${reserva.pais}</p>
						<p>Data: ${reserva.data}</p>
						<p>Preu: ${reserva.preu}€</p>
						<p>Persona/es: ${reserva.persones}</p>
						<p>Tel: ${reserva.telefon}</p>
					</div>
				</c:forEach>
			</c:otherwise>
		</c:choose>
	
	</div>
</body>
</html>