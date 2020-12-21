const continents = [
	{
		nom:"Asia",
		paisos:[
			{
				nom:"China",
				imatge:"imatges/asia/china.jpg"
			},
			{
				nom:"Corea del Sud",
				imatge:"imatges/asia/coreaSud.jpg"
			},
			{
				nom:"Emirats Àrabs",
				imatge:"imatges/asia/emiratsArabs.jpg"
			},
			{
				nom:"Filipinas",
				imatge:"imatges/asia/filipinas.jpg"
			},
			{
				nom:"India",
				imatge:"imatges/asia/india.jpg"
			},
			{
				nom:"Iran",
				imatge:"imatges/asia/iran.jpg"
			},
			{
				nom:"Japó",
				imatge:"imatges/asia/japo.jpg"
			},
			{
				nom:"Mongolia",
				imatge:"imatges/asia/mongolia.jpg"
			},
			{
				nom:"Tailandia",
				imatge:"imatges/asia/tailandia.jpg"
			},
			{
				nom:"Vietnam",
				imatge:"imatges/asia/vietnam.jpg"
			}
		]
		
	},
	{
		nom:"Europa",
		paisos:[
			{
				nom:"Alemanya",
				imatge:"imatges/europa/alemania.jpg"
			},
			{
				nom:"Espanya",
				imatge:"imatges/europa/espanya.jpg"
			},
			{
				nom:"França",
				imatge:"imatges/europa/frança.jpg"
			},
			{
				nom:"Hungria",
				imatge:"imatges/europa/hungria.jpg"
			},
			{
				nom:"Italia",
				imatge:"imatges/europa/italia.jpg"
			},
			{
				nom:"Polonia",
				imatge:"imatges/europa/polonia.jpg"
			},
			{
				nom:"Portugal",
				imatge:"imatges/europa/portugal.jpg"
			},
			{
				nom:"Regne Unit",
				imatge:"imatges/europa/reinoUnido.jpg"
			},
			{
				nom:"Serbia",
				imatge:"imatges/europa/serbia.jpg"
			},
			{
				nom:"Suecia",
				imatge:"imatges/europa/suecia.jpg"
			}
		]
		
	},
	{
		nom:"Amèrica del Nord",
		paisos:[
			{
				nom:"Canadà",
				imatge:"imatges/americaNord/canada.jpg"
			},
			{
				nom:"Costa Rica",
				imatge:"imatges/americaNord/costaRica.jpg"
			},
			{
				nom:"Cuba",
				imatge:"imatges/americaNord/cuba.jpg"
			},
			{
				nom:"EE.UU",
				imatge:"imatges/americaNord/eeuu.jpg"
			},
			{
				nom:"Groenlandia",
				imatge:"imatges/americaNord/groenlandia.jpg"
			},
			{
				nom:"Haití",
				imatge:"imatges/americaNord/haiti.jpg"
			},
			{
				nom:"Jamaica",
				imatge:"imatges/americaNord/jamaica.jpg"
			},
			{
				nom:"Mèxic",
				imatge:"imatges/americaNord/mexic.jpg"
			},
			{
				nom:"Panamà",
				imatge:"imatges/americaNord/panama.jpg"
			},
			{
				nom:"República Dominicana",
				imatge:"imatges/americaNord/republicaDominicana.jpg"
			}
		]
		
	},
	{
		nom:"Amèrica del Sud",
		paisos:[
			{
				nom:"Argentina",
				imatge:"imatges/americaSud/argentina.jpg"
			},
			{
				nom:"Bolivia",
				imatge:"imatges/americaSud/bolivia.jpg"
			},
			{
				nom:"Brasil",
				imatge:"imatges/americaSud/brasil.jpg"
			},
			{
				nom:"Chile",
				imatge:"imatges/americaSud/chile.jpg"
			},
			{
				nom:"Colombia",
				imatge:"imatges/americaSud/colombia.jpg"
			},
			{
				nom:"Ecuador",
				imatge:"imatges/americaSud/ecuador.jpg"
			},
			{
				nom:"Paraguay",
				imatge:"imatges/americaSud/paraguay.jpg"
			},
			{
				nom:"Perú",
				imatge:"imatges/americaSud/peru.jpg"
			},
			{
				nom:"Uruguay",
				imatge:"imatges/americaSud/uruguay.jpg"
			},
			{
				nom:"Venezuela",
				imatge:"imatges/americaSud/venezuela.jpg"
			}
		]
		
	},
	{
		nom:"Àfrica",
		paisos:[
			{
				nom:"Angola",
				imatge:"imatges/africa/angola.jpg"
			},
			{
				nom:"Camerún",
				imatge:"imatges/africa/camerun.jpg"
			},
			{
				nom:"Costa de Marfil",
				imatge:"imatges/africa/costaMarfil.jpg"
			},
			{
				nom:"Egipte",
				imatge:"imatges/africa/egipte.jpg"
			},
			{
				nom:"Gambia",
				imatge:"imatges/africa/gambia.jpg"
			},
			{
				nom:"Kenia",
				imatge:"imatges/africa/kenia.jpg"
			},
			{
				nom:"Marroc",
				imatge:"imatges/africa/marroc.jpg"
			},
			{
				nom:"Senegal",
				imatge:"imatges/africa/senegal.jpg"
			},
			{
				nom:"Sudàfrica",
				imatge:"imatges/africa/sudafrica.jpg"
			},
			{
				nom:"Túnez",
				imatge:"imatges/africa/tunez.jpg"
			}
		]
		
	},
	{
		nom:"Oceania",
		paisos:[
			{
				nom:"Australia",
				imatge:"imatges/oceania/australia.jpg"
			},
			{
				nom:"Fiyi",
				imatge:"imatges/oceania/fiyi.jpg"
			},
			{
				nom:"Illes Marshall",
				imatge:"imatges/oceania/illesMarshall.jpg"
			},
			{
				nom:"Micronesia",
				imatge:"imatges/oceania/micronesia.jpg"
			},
			{
				nom:"Nova Zelanda",
				imatge:"imatges/oceania/novaZelanda.jpg"
			},
			{
				nom:"Palaos",
				imatge:"imatges/oceania/palaos.jpg"
			},
			{
				nom:"Papúa Nova Guinea",
				imatge:"imatges/oceania/papuaNovaGuinea.jpg"
			},
			{
				nom:"Samoa",
				imatge:"imatges/oceania/samoa.jpg"
			},
			{
				nom:"Tonga",
				imatge:"imatges/oceania/tonga.jpg"
			},
			{
				nom:"Vanuatu",
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
	
	for (let continent of continents){
		if (continentNom == continent.nom){
			for (let pais of continent.paisos){
				var opt = document.createElement("option");
				opt.text = pais.nom;
				despPaisos.add(opt);
				
				var preuInput = document.getElementById("preu");
				preuInput.value = pais.preu;
			}
		}
	}
}