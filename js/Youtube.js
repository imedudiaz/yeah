function Youtube(jYoutube, username, password) {
	this.username = username;
	this.password = password;
	this.videos = new Array();
	
	if (jYoutube){
		this.username = jYoutube.username;
		this.password = jYoutube.password;
		
		let jVideos = jYoutube.videos;
		for (let i = 0; i < jVideos.length; i++){
			let videosfresh = new Videos(jVideos[i]);
			this.videos.push(videosfresh);
		}
	}
	else {
		this.username = username;
		this.password = password;
	}

	//el for hay que entenderlo
	Youtube.prototype.getDuracion = function(){
		let sumatorio = 0;
		
		for (let capi of this.capitulos){
			sumatorio = sumatorio + capi.getDuration();
		}
		
		return sumatorio;
	}
	
	Youtube.prototype.getVideos = function(){
		return this.videos;
	}
	Youtube.prototype.addVideo = function(video){
		this.videos.push(video);
	}	
	Youtube.prototype.eliminarVideo = function(capitulo){
		let pos = -1;
		for (let i = 0; i < this.videos.length && pos == -1; i++){
			if (this.videos[i].getNombreVideo() == video.getNombreVideo() &&
				this.videos[i].getYoutuber() == video.getYoutuber())
				pos = i;
		}
		
		if (pos != -1) {
			this.videos.splice(pos, 1);
		}
	}
	Youtube.prototype.orderByDuration = function(){
		this.videos.sort(
			function(a,b){
				return b.getDuration() - a.getDuration();
			}
		);
	}
	
	Youtube.prototype.toJSONObject = function(){
		let jYoutube = {};
		
		jYoutube.username = this.username;
		jYoutube.password = this.password;
		
		let jVideos = new Array();
		for (let i = 0; i < this.videos.length; i++){
			let jVideo = this.videos[i].toJSONObject();
			jVideos.push(jVideo);
		}
		
		jYoutube.videos = jVideos;
		
		return jYoutube;
	}
	

	
	
	Youtube.prototype.getVideos = function(){
		return this.videos;
	}



}