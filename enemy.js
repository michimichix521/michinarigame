class Enemy
{
	constructor(canvas,image,x,y,enlv){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;
		this.enlv;

		this.readImage(image);
		this.rd;
		this.ex;
		this.ey;
	}

	readImage(image)
	{
		this.image.src=image;
	}
	showImage(px, py)
	{
		this.canvas.drawImage(this.image,this.x-25,this.y-25,50,50);
	}

	move(px, py)
	{
		switch(this.enlv){
			case 0:
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
				break;
			case 1:
				this.rd = Math.floor(Math.random() * Math.floor(5));
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
					}
				break;
		}
	}
}