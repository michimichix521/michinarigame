class Enemy
{
	constructor(canvas,image,x,y){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;

		this.readImage(image);
		var rd;
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
		rd = Math.floor(Math.random() * Math.floor(5));
		switch(rd){
			case 0:
				break;
			case 1:	//up
				if(ry-2>=100){
					ry-=2;
				}
				break;
			case 2:	//dowm
				if(ry+2<=350){
					ry+=2;
				}	
				break;
			case 3:	//right
				if(rx+2<=650){
					rx+=2;
				}
				break;
			case 4:	//left
				if(rx-2>=0){
					rx-=2;
				}
				break;
		}
	}
}