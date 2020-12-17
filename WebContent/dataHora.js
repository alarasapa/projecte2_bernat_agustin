/**
 * 
 */
	function dataHora(){
		var horaActual = new Date;
		
		var horas = horaActual.getHours();
		var minuts = horaActual.getMinutes();
		var segons = horaActual.getSeconds();
		
		
		var diaSetm = horaActual.getDay();
		diaSetm = diaSetmana(diaSetm);
	
		var dia = horaActual.getDate();
		var mes = horaActual.getMonth() + 1;
		var any = horaActual.getFullYear();
		
		if (tipusHora == "ampm"){
			var ampm;
			
			if (horas < 13){
				ampm = "AM";
			} else {
				ampm = "PM";
				horas = horas - 12;
			}
		
			return horas + ":" + minuts + ":" + segons + " " + ampm + "<br>" +
				"Aviu és: " + diaSetm + "<br>" +
				dia + "/" + mes + "/" + any;
				
		} else {
			return horas + ":" + minuts + ":" + segons + "<br>" + 
				"Avui es " + diaSetm + "<br>" +
				dia + "/" + mes + "/" + any;
		}
	}

	function diaSetmana(numero){
		switch(numero){		
			case 1:
				return "Dilluns";
				
			case 2:
				return "Dimarts";
				
			case 3:
				return "Dimecres";
				
			case 4:
				return "Dijous";
				
			case 5:
				return "Divendres";
				
			case 6:
				return "Dissabte";
				
			case 7:
				return "Diumenge";
				
			default:
				return "Hi ha hagut un error a l'hora d'obteniir el dia de la setmana";
			}
		}
	
	function actualitzarHora(){
		document.getElementById("hora").innerHTML = dataHora();
	}
	
	var tipusHora;
	function init(){
		tipusHora = "24h";
		
		document.getElementById("hora").addEventListener("dblclick", function(){
			if (tipusHora == "24h"){
				tipusHora = "ampm";
			} else {
				tipusHora = "24h";
			}
			console.log(tipusHora);
		})
		
		//Cridem la funció de mostrar l'hora
		actualitzarHora();
		
		//Creem un interval que cada segon s'actualitzi l'hora
		setInterval(actualitzarHora, 1000);
	}
	