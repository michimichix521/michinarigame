window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var player;
var stage;
var canvas;	

function init_time()
{
	var player_image = "img/player_attack.png";
	
	player = new Player(canvas, player_image, 350, 250);
	stage = new Stage();
	
}

function update()
{
	stage.canvas();
	player.showimage();
	
}

function canvas()
{	
	canvas.fillStyle="black";
	canvas.fillRect(0,0,700,500);

	canvas.fillStyle="lightgreen";
	canvas.fillRect(0,100,700,300);

	
}