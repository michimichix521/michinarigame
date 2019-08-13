window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var player;
var stage;	

function init_time()
{
	var canvas;
	canvas = document.getElementById("canvas").getContext("2d");

	var player_image = "img/player_attack.png";
	var frontground = "lightgreen";
	var background = "black";

	player = new Player(canvas, player_image, 350, 250,);
	stage = new Stage(canvas, 700, 500,
						frontground, background);
	
}

function update()
{
	stage.draw_canvas();
	player.showimage();
	
}