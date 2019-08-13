window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

class main
{
	var player;

	init_time()
	{
		var canvas;	
		var player_image = "img/player_attack.png";
		
		canvas=document.getElementById("canvas").getContext("2d");
		player = new Player(canvas, player_image, 350, 250);
		canvas.fillStyle="#000000";
		canvas.fillRect(0,0,700,500);

		
	}

	update()
	{
		canvas();
		Player.showimage();
		
	}
	
	canvas()
	{	
		canvas.fillStyle="black";
		canvas.fillRect(0,0,700,500);
	
		canvas.fillStyle="lightgreen";
		canvas.fillRect(0,100,700,300);
	
		
	}
}