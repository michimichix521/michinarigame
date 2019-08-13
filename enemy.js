class Enemy
{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;

		this.readImage(image);
		this.x;
		this.y;
		this.rd;
	}

	readImage(image)
	{
		this.image.src=image;
	}
	showImage()
	{
		this.canvas.drawImage(this.image,this.x,this.y,50,50);
	}

	move()
	{
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
	}
}