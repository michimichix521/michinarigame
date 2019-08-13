window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var player;
var stage;
var enemy;	

function init_time()
{
	var canvas = document.getElementById("canvas").getContext("2d");;

	var player_image = "img/player.png";
	var enemy_image = "img/enemy.png";
	var fgcolor = "lightgreen";
	var bgcolor = "black";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor);
	enemy = new Enemy(canvas, enemy_image, 150, 250);
	player = new Player(canvas, player_image, 350, 250);
	
}

function update()
{
	stage.draw_canvas();
	player.showImage();
	enemy.showImage();
	
	
}