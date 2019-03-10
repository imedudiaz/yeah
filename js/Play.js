function obtenerYoutubeDelNavegador(){
	let jYoutubeAccount = sessionStorage.getItem("youtube");	
	
	let youtubeAccount = null;
	
	if (jYoutubeAccount != null){		
		jYoutubeAccount = JSON.parse(jYoutubeAccount);
		
		youtubeAccount = new Youtube(jYoutubeAccount);
	}	
	
	return youtubeAccount;	
}

function guardar(){
	let nombreVideo = document.getElementById("nombre").value;
	let youtuber = document.getElementById("youtub").value;
	let genero = document.getElementById("genere").value;
	let duracion = document.getElementById("duration").value;
	
	
	if (nombreVideo != "" && youtuber != "" &&
		genero != "" && duracion !="") {
			
		let vidi = new Videos(null, nombreVideo, 
		youtuber, genero, duracion);
		//console.log(vidi);
		youtubeAccount.addVideo(vidi);
		guardarYoutubeEnNavegador(youtubeAccount);
		pintar();
	}
}
function guardarYoutubeEnNavegador(youtubeAccount){	
	let jEduTube = youtubeAccount.toJSONObject();
	jEduTube = JSON.stringify(jEduTube);

	sessionStorage.setItem("youtube", jEduTube);	
}
function cargarDatosIniciales(){
	
	youtubeAccount = obtenerYoutubeDelNavegador();
	
	if (youtubeAccount == null){
		youtubeAccount = new Youtube(null, "edudiaz", "vivayo");
		guardarYoutubeEnNavegador(youtubeAccount);
	}	
	
	pintar();
}




function pintar(){
	
	document.getElementById("vidi").innerHTML = "";
	
	let youtubeAccount = obtenerYoutubeDelNavegador();
	
	let videoss = youtubeAccount.getVideos();
	
	let idBase =  new Date().getTime();
	let cont = 0;
	for (let vidi of videoss){
		//obtener el div de pintar
		let div = document.getElementById("vidi");
		
		//pintar los datos del capitulos
		let datos = vidi.nombreVideo + " - " + 
			vidi.youtuber + " - " + 
			vidi.genero + "-" + vidi.duracion;
			
		let divHijo = document.createElement("div");
		divHijo.innerHTML = datos;
		divHijo.id = idBase++;
		
		if (cont % 2 == 0) {
			divHijo.classList.add("interno");
		}
		else {
			divHijo.classList.add("interno2");
		}
		
		
		//aĂ±adirlo al div
		div.appendChild(divHijo);	
		cont++;		
	}
}

