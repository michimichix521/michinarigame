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
		this.canvas.drawImage(this.image,this.x-25,this.y-25,50,50);
	}

	move(){
		if(this.ArrowUp){
			if(this.y-2>=125){
				this.y-=2;
			}
		}
		if(this.ArrowDown){
			if(this.y+2<=375){
				this.y+=2;
			}
		}
		if(this.ArrowRight){
			if(this.x+2<=675){
				this.x+=2;
			}
		}
		if(this.ArrowLeft){
			if(this.x-2>=25){
				this.x-=2;
			}
		}
	}

}