class Player{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;
		this.ArrowUp=false;
		this.ArrowDown=false;
		this.ArrowRight=false;
		this.ArrowLeft=false;

		this.readImage(image);
	}

	readImage(image){
		this.image.src=image;
	}

	showImage(){
		this.canvas.drawImage(this.image,this.x,this.y,50,50);
	}

	move(){
		if(this.ArrowUp){
			if(this.y-2>=100){
				this.y-=2;
			}
		}
		if(this.ArrowDown){
			if(this.y+2<=350){
				this.y+=2;
			}
		}
		if(this.ArrowRight){
			if(this.x+2<=650){
				this.x+=2;
			}
		}
		if(this.ArrowLeft){
			if(this.x-2>=0){
				this.x-=2;
			}
		}
	}

	keydown(event){
		if(event.keyCode==38){this.ArrowUp=true;}
		if(event.keyCode==40){this.ArrowDown=true;}
		if(event.keyCode==39){this.ArrowRight=true;}
		if(event.keyCode==37){this.ArrowLeft=true;}
	}

	keyup(event){
		if(event.keyCode==38){this.ArrowUp=false;}
		if(event.keyCode==40){this.ArrowDown=false;}
		if(event.keyCode==39){this.ArrowRight=false;}
		if(event.keyCode==37){this.ArrowLeft=false;}
	}
}