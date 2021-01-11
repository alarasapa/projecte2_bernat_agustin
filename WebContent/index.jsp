<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Index</title>
	<link rel="stylesheet" type="text/css" href="estils/estils.css">
	<script src="dataHora.js"></script>
	<script src="dades.js"></script>
</head>

<body onload="init()">
	<div id="hora"></div>
	<br><br>
	<form action="reservaservlet" name="formulariReserva" method="POST">
		<div class="contenido">
		<div>
			<label>Data </label><input type="date" name="data" onkeydown ="return false" required><br><br>
			<label>Destí </label><select id="continents" onchange="escullContinent()" required></select><select name="paisos" id="paisos" onchange="escullPais()" disabled></select>
			<input type="hidden" name="imatgeNom" id="imatgeNom">
			<label>Preu </label><input type="text" id="preu" name="preu" readonly><label>€</label><br><br>
			<label>Nom </label><input type="text" name="nom" required><br><br>
			<label>Telèf. </label><input type="tel" name="telefon" name="telefon" placeholder="XXX.YYY.ZZZ" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}" required><br><br>
			<label>Persones </label><input type="text" name="persones" required><br><br>
			<input type="checkbox" name="checkbox"><label> Descompte 20% </label><br><br>
		</div>
		<div class="contenidoImagen">
			<img id="imatge" name="imatge" width="300" height="300"><br><br>
		</div>
		</div>
	<div class="divBoto">
		<input class="boto" type="submit" name="guardaReserva" value="Afegir"></input>
		<div></div>
	</div>
	<div class="imatge">
		<!--<img alt="" src="imatges/africa/angola.jpg">-->
	</div>
	</form>
</body>
</html>