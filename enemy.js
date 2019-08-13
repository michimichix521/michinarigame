class Enemy{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;

		this.readImage(image);
	}

	readImage(image){
		this.image.src=image;
	}

	showImage(){
		this.canvas.drawImage(this.image,this.x,this.y,50,50);
	}
}