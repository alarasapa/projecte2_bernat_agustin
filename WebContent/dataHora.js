	/**
	* Funció que retorna les dades de la data i hora actual 
	* @returns Les dades de la data i la hora actual
	*/
	function dataHora(){
		//Data i hora actual
		var horaActual = new Date;
		
		//Agafem les dades de l'hora
		var horas = horaActual.getHours();
		var minuts = horaActual.getMinutes();
		var segons = horaActual.getSeconds();
		
		//Agafem el dia de la setmana
		var diaSetm = horaActual.getDay();
		
		//Com és un numero, ho passem per una funció que ens diu quin dia de la setmana és
		diaSetm = diaSetmana(diaSetm);
	
		//Agafem les dades de la data
		var dia = horaActual.getDate();
		var mes = horaActual.getMonth() + 1;
		var any = horaActual.getFullYear();
		
		//En cas que l'hora estigui en el format AM/PM
		if (tipusHora == "ampm"){
			//Creem variable de quin dels dos es refereix
			let ampm;
			
			//Si no es sobrepasa de les 13 hores, és AM
			if (horas < 13){
				ampm = "AM";
			//En cas contrari, és PM
			} else {
				ampm = "PM";
				//Restem per a que estigui en el format 12 hores
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

	/**
	* Funció que depenent del numero, treu el dia de la setmana
	* 
	* @param numero El numero del dia de la setmana
	* @returns El dia de la setmana corresponent 
	*/
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
	
	/** 
	* Funció que actualitza l'hora a l'actual
	*/
	function actualitzarHora(){
		document.getElementById("hora").innerHTML = dataHora();
	}
	
	//Declarem la variable global del tipus d'hora
	var tipusHora;
	
	/**
	* Funció que s'executarà quan s'iniciï el codi
	*/
	function init(){
		//Per defecte, el tipus d'hora serà en el format de 24 horess
		tipusHora = "24h";
		
		//Creem el escoltador d'events, per a quan es fagi un doble click, canviï el format 
		document.getElementById("hora").addEventListener("dblclick", function(){
			//Si està en el format de 24 hores es canvia per el de AM/PM
			if (tipusHora == "24h") tipusHora = "ampm";
			//En cas contrari, al de 24h
			else tipusHora = "24h";
		});
		
		//Cridem la funció de mostrar l'hora
		actualitzarHora();
		
		//Creem un interval que cada segon s'actualitzi l'hora
		setInterval(actualitzarHora, 1000);
	}
	