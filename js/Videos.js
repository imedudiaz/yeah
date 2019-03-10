function Videos(jVideo, nombreVideo, youtuber, genero, duracion){
	this.nombreVideo;
	this.youtuber;
	this.genero;
	this.duracion;
	
	
	//constructor
	
	if(jVideo) {
		this.nombreVideo = jVideo.nombreVideo;
		this.youtuber = jVideo.youtuber;
		this.genero = jVideo.genero;
		this.duracion = jVideo.duracion;
		
	}else {
		this.nombreVideo = nombreVideo;
		this.youtuber = youtuber;
		this.genero = genero;
		this.duracion = duracion;
		
		
	}
		
	//gets
	
	Videos.prototype.getNombreVideo = function(){
		return this.nombreVideo;
	}
	Videos.prototype.getYoutuber = function(){
		return this.youtuber;
	}
	Videos.prototype.getGenero = function(){
		return this.genero;
	}
	Videos.prototype.getDuracion = function(){
		return this.duracion;
	}
	
	//set
	
	Videos.prototype.setNombreVideo = function(nombreVideo) {
		this.nombreVideo;
		
	}
	Videos.prototype.setYoutuber = function(youtuber) {
		this.youtuber;
		
	}
	Videos.prototype.setGenero = function(genero) {
		this.genero;
		
	}
	Videos.prototype.setDuracion = function(duracion) {
		this.duracion;
		
	}
	
	//pasar a JsonObject
	
	Videos.prototype.toJSONObject = function() {
		let jVideos = {};
		jVideos.nombreVideo = this.nombreVideo;
		jVideos.youtuber = this.youtuber;
		jVideos.genero = this.genero;
		jVideos.duracion = this.duracion;
		
		return jVideos;
	

	}
	
}
	


Videos.GENERO_ENTRETENIMIENTO = 1;
Videos.GENERO_COMEDIA = 2;
Videos.GENERO_GAMEPLAY = 3;
Videos.GENERO_APRENDIZAJE = 4;
Videos.GENERO_REPORTAJE = 5;
Videos.GENERO_BROMAS = 6;
	