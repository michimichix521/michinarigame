class Enemy
{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;

		this.readImage(image);
		this.rd;
		this.ex;
		this.ey;
	}

	readImage(image)
	{
		this.image.src=image;
	}
	showImage()
	{
		this.canvas.drawImage(this.image,this.x,this.y,50-25,-25);
	}

	move(px, py)
	{
		if(this.y > py){	//up
			if(this.y-2>=125){
				this.y-=1;
			}
		}
		if(this.y < py){	//down
			if(this.y+2<=375){
				this.y+=1;
			}	
		}
		if(this.x < px){	//right
			if(this.x+2<=675){
				this.x+=1;
			}
		}
		if(this.x > px){	//left
			if(this.x-2>=25){
				this.x-=1;
			}
		}
/*		this.rd = Math.floor(Math.random() * Math.floor(5));
		switch(this.rd){
			case 0:
				break;
			case 1:	//up
				if(this.y-2>=100){
					this.y-=2;
				}
				break;
			case 2:	//dowm
				if(this.y+2<=350){
					this.y+=2;
				}	
				break;
			case 3:	//right
				if(this.x+2<=650){
					this.x+=2;
				}
				break;
			case 4:	//left
				if(this.x-2>=0){
					this.x-=2;
				}
				break;
*/
	}
}