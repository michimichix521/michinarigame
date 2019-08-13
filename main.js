window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var player;
var stage;	

function init_time()
{
	var canvas;
	var player_image = "img/player_attack.png";
	var frontscreen = "lightgreen";
	var backscreen = "black";

	player = new Player(canvas, player_image, 350, 250, frontscreen, backscreen);
	stage = new Stage(canvas, 700, 500);
	
}

function update()
{
	stage.draw_canvas();
	player.showimage();
	
}