class Player{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.image.src=image;
		this.x=x;
		this.y=y;
	}

	showImage(){
		this.canvas.drawImage(this.image,this.x,this.y,50,50);
	}
}