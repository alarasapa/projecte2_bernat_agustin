const continents = [
	{
		nom:"Asia",
		paisos:[
			{
				nom:"China",
				preu:"1960,00",
				imatge:"imatges/asia/china.jpg"
			},
			{
				nom:"Corea del Sud",
				preu:"2300,00",
				imatge:"imatges/asia/coreaSud.jpg"
			},
			{
				nom:"Emirats Àrabs",
				preu:"2500,00",
				imatge:"imatges/asia/emiratsArabs.jpg"
			},
			{
				nom:"Filipinas",
				preu:"1850,00",
				imatge:"imatges/asia/filipinas.jpg"
			},
			{
				nom:"India",
				preu:"1950,00",
				imatge:"imatges/asia/india.jpg"
			},
			{
				nom:"Iran",
				preu:"1550,00",
				imatge:"imatges/asia/iran.jpg"
			},
			{
				nom:"Japó",
				preu:"2350,00",
				imatge:"imatges/asia/japo.jpg"
			},
			{
				nom:"Mongolia",
				preu:"2000,00",
				imatge:"imatges/asia/mongolia.jpg"
			},
			{
				nom:"Tailandia",
				preu:"1780,00",
				imatge:"imatges/asia/tailandia.jpg"
			},
			{
				nom:"Vietnam",
				preu:"1340,00",
				imatge:"imatges/asia/vietnam.jpg"
			}
		]
		
	},
	{
		nom:"Europa",
		paisos:[
			{
				nom:"Alemanya",
				preu:"520,00",
				imatge:"imatges/europa/alemania.jpg"
			},
			{
				nom:"Espanya",
				preu:"500,00",
				imatge:"imatges/europa/espanya.jpg"
			},
			{
				nom:"França",
				preu:"500,00",
				imatge:"imatges/europa/frança.jpg"
			},
			{
				nom:"Hungria",
				preu:"620,00",
				imatge:"imatges/europa/hungria.jpg"
			},
			{
				nom:"Italia",
				preu:"480,00",
				imatge:"imatges/europa/italia.jpg"
			},
			{
				nom:"Polonia",
				preu:"650,00",
				imatge:"imatges/europa/polonia.jpg"
			},
			{
				nom:"Portugal",
				preu:"430,00",
				imatge:"imatges/europa/portugal.jpg"
			},
			{
				nom:"Regne Unit",
				preu:"570,00",
				imatge:"imatges/europa/reinoUnido.jpg"
			},
			{
				nom:"Serbia",
				preu:"850,00",
				imatge:"imatges/europa/serbia.jpg"
			},
			{
				nom:"Suecia",
				preu:"690,00",
				imatge:"imatges/europa/suecia.jpg"
			}
		]
		
	},
	{
		nom:"Amèrica del Nord",
		paisos:[
			{
				nom:"Canadà",
				preu:"1550,00",
				imatge:"imatges/americaNord/canada.jpg"
			},
			{
				nom:"Costa Rica",
				preu:"2000,00",
				imatge:"imatges/americaNord/costaRica.jpg"
			},
			{
				nom:"Cuba",
				preu:"2350,00",
				imatge:"imatges/americaNord/cuba.jpg"
			},
			{
				nom:"EE.UU",
				preu:"2000,00",
				imatge:"imatges/americaNord/eeuu.jpg"
			},
			{
				nom:"Groenlandia",
				preu:"2700,00",
				imatge:"imatges/americaNord/groenlandia.jpg"
			},
			{
				nom:"Haití",
				preu:"1650,00",
				imatge:"imatges/americaNord/haiti.jpg"
			},
			{
				nom:"Jamaica",
				preu:"1230,00",
				imatge:"imatges/americaNord/jamaica.jpg"
			},
			{
				nom:"Mèxic",
				preu:"1120,00",
				imatge:"imatges/americaNord/mexic.jpg"
			},
			{
				nom:"Panamà",
				preu:"1465,00",
				imatge:"imatges/americaNord/panama.jpg"
			},
			{
				nom:"República Dominicana",
				preu:"1940,00",
				imatge:"imatges/americaNord/republicaDominicana.jpg"
			}
		]
		
	},
	{
		nom:"Amèrica del Sud",
		paisos:[
			{
				nom:"Argentina",
				preu:"1800,00",
				imatge:"imatges/americaSud/argentina.jpg"
			},
			{
				nom:"Bolivia",
				preu:"1850,00",
				imatge:"imatges/americaSud/bolivia.jpg"
			},
			{
				nom:"Brasil",
				preu:"1870,00",
				imatge:"imatges/americaSud/brasil.jpg"
			},
			{
				nom:"Chile",
				preu:"1895,00",
				imatge:"imatges/americaSud/chile.jpg"
			},
			{
				nom:"Colombia",
				preu:"2498,00",
				imatge:"imatges/americaSud/colombia.jpg"
			},
			{
				nom:"Ecuador",
				preu:"2250,00",
				imatge:"imatges/americaSud/ecuador.jpg"
			},
			{
				nom:"Paraguay",
				preu:"2320,00",
				imatge:"imatges/americaSud/paraguay.jpg"
			},
			{
				nom:"Perú",
				preu:"1850,00",
				imatge:"imatges/americaSud/peru.jpg"
			},
			{
				nom:"Uruguay",
				preu:"2600,00",
				imatge:"imatges/americaSud/uruguay.jpg"
			},
			{
				nom:"Venezuela",
				preu:"2000,00",
				imatge:"imatges/americaSud/venezuela.jpg"
			}
		]
		
	},
	{
		nom:"Àfrica",
		paisos:[
			{
				nom:"Angola",
				preu:"850,00",
				imatge:"imatges/africa/angola.jpg"
			},
			{
				nom:"Camerún",
				preu:"600,00",
				imatge:"imatges/africa/camerun.jpg"
			},
			{
				nom:"Costa de Marfil",
				preu:"550,00",
				imatge:"imatges/africa/costaMarfil.jpg"
			},
			{
				nom:"Egipte",
				preu:"960,00",
				imatge:"imatges/africa/egipte.jpg"
			},
			{
				nom:"Gambia",
				preu:"450,00",
				imatge:"imatges/africa/gambia.jpg"
			},
			{
				nom:"Kenia",
				preu:"1950,00",
				imatge:"imatges/africa/kenia.jpg"
			},
			{
				nom:"Marroc",
				preu:"1050,00",
				imatge:"imatges/africa/marroc.jpg"
			},
			{
				nom:"Senegal",
				preu:"1000,00",
				imatge:"imatges/africa/senegal.jpg"
			},
			{
				nom:"Sudàfrica",
				preu:"2350,00",
				imatge:"imatges/africa/sudafrica.jpg"
			},
			{
				nom:"Túnez",
				preu:"1810,00",
				imatge:"imatges/africa/tunez.jpg"
			}
		]
		
	},
	{
		nom:"Oceania",
		paisos:[
			{
				nom:"Australia",
				preu:"3400,00",
				imatge:"imatges/oceania/australia.jpg"
			},
			{
				nom:"Fiyi",
				preu:"2850,00",
				imatge:"imatges/oceania/fiyi.jpg"
			},
			{
				nom:"Illes Marshall",
				preu:"2950,00",
				imatge:"imatges/oceania/illesMarshall.jpg"
			},
			{
				nom:"Micronesia",
				preu:"2900,00",
				imatge:"imatges/oceania/micronesia.jpg"
			},
			{
				nom:"Nova Zelanda",
				preu:"2500,00",
				imatge:"imatges/oceania/novaZelanda.jpg"
			},
			{
				nom:"Palaos",
				preu:"2150,00",
				imatge:"imatges/oceania/palaos.jpg"
			},
			{
				nom:"Papúa Nova Guinea",
				preu:"1990,00",
				imatge:"imatges/oceania/papuaNovaGuinea.jpg"
			},
			{
				nom:"Samoa",
				preu:"1855,00",
				imatge:"imatges/oceania/samoa.jpg"
			},
			{
				nom:"Tonga",
				preu:"1910,00",
				imatge:"imatges/oceania/tonga.jpg"
			},
			{
				nom:"Vanuatu",
				preu:"2005,00",
				imatge:"imatges/oceania/vanuatu.jpg"
			}
		]
		
	},
];
	
	function initDades(){
		var despContinents = document.getElementById("continents");
		 
		for (let continent of continents){
			var opt = document.createElement("option");
			opt.text = continent.nom;
			despContinents.add(opt);
			
			escullContinent();
		}
	}
	
	
	function escullContinent(){
		var pais = document.getElementById("paisos");
		pais.removeAttribute("disabled");
		
		var despPaisos = document.getElementById("paisos");
		
		for (let i = despPaisos.options.length - 1; i >= 0; i--){
			despPaisos.remove(i);
		}
		var continentNom = document.getElementById("continents").value;
		var preuInput = document.getElementById("preu");
		
		for (let continent of continents){
			if (continentNom == continent.nom){
				preuInput.value = continent.paisos[0].preu;
				
				for (let pais of continent.paisos){
					var opt = document.createElement("option");
					opt.text = pais.nom;
					despPaisos.add(opt);	
				}
			}
		}
	}
	
	function escullPais(){
		var continentNom = document.getElementById("continents").value;
		var paisNom = document.getElementById("paisos").value;
		var preuInput = document.getElementById("preu");
		
		for (let continent of continents){
			if (continent.nom == continentNom){
				for (let pais of continent.paisos){
					if (pais.nom == paisNom){
						preuInput.value = pais.preu;	
					}
				}
			}
		}
	}