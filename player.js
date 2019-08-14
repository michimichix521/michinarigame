class Player{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Array(image.length);
		this.imageChangeNumber=0;
		this.x=x;
		this.y=y;
		this.HP=100;

		this.ArrowUp=false;
		this.ArrowDown=false;
		this.ArrowRight=false;
		this.ArrowLeft=false;
		this.Space=false;

		this.readImage(image);
	}

	readImage(image){
		for(var i=0;i<image.length;i++){
			this.image[i]=new Image();
			this.image[i].src=image[i];
		}
	}

	showImage(){
		this.canvas.drawImage(this.image[this.imageChangeNumber],this.x-25,this.y-25,50,50);
	}

	showHP(){
		this.canvas.fillStyle="white";
		this.canvas.font="48px serif";
		this.canvas.fillText(this.HP,10,50);
	}

	hitJudge(ex,ey){
		var distance=Math.sqrt((ex-this.x)**2+(ey-this.y)**2);
		if(distance<=50){
			this.HP-=1;
		}
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

		if(this.Space){
			if(this.imageChangeNumber==0){
				this.imageChangeNumber=1;
			}else{
				this.imageChangeNumber=0;
			}
		}

	}

}