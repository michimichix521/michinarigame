window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var player;
var stage;
var enemy = new Array(3);

function init_time()
{
	var canvas = document.getElementById("canvas").getContext("2d");;

	var player_image = ["img/player.png","img/player_attack.png"];
	var enemy_image = "img/enemy.png";
	var fgcolor = "lightgreen";
	var bgcolor = "black";

	stage = new Stage(canvas, 700, 500, fgcolor, bgcolor);
	enemy[0] = new Enemy(canvas, enemy_image, 150, 250);
	player = new Player(canvas, player_image, 350, 250);

}

function update()
{


	document.onkeydown=keydown;
	document.onkeyup=keyup;

	stage.draw_canvas();

	//player
	player.showImage();
	player.move();





	//enemy
	enemy.showImage();
	enemy.move(player.x,player.y);
}


function keydown(event){
	if(event.keyCode==38){player.ArrowUp=true;}
	if(event.keyCode==40){player.ArrowDown=true;}
	if(event.keyCode==39){player.ArrowRight=true;}
	if(event.keyCode==37){player.ArrowLeft=true;}
}

function keyup(event){
	if(event.keyCode==38){player.ArrowUp=false;}
	if(event.keyCode==40){player.ArrowDown=false;}
	if(event.keyCode==39){player.ArrowRight=false;}
	if(event.keyCode==37){player.ArrowLeft=false;}
}



