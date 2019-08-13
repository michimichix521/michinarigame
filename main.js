window.onload=init_time; //最初にロードされる
var id=window.setInterval(update,10); //アップロードされる

var canvas;
var player=new Array(2);
var playerCounter;

var rx,ry;

var ArrowUp,ArrowDown,ArrowRight,ArrowLeft;

function init_time(){
	canvas=document.getElementById("canvas").getContext("2d");
	console.log("hello");

	canvas.fillStyle="#000000";
	canvas.fillRect(0,0,700,500);

	for(var i=0;i<player.length;i++){
		player[i]=new Image();
	}
	player[0].src="img/player.png";
	player[1].src="img/player_attack.png";
	playerCounter=0;

	rx=350;
	ry=250;

	ArrowUp=ArrowDown=ArrowRight=ArrowLeft=false;

}

function update(){
	canvas.fillStyle="black";
	canvas.fillRect(0,0,700,500);

	canvas.fillStyle="lightgreen";
	canvas.fillRect(0,100,700,300);

	document.onkeydown=keydown;
	document.onkeyup=keyup;

	canvas.drawImage(player[playerCounter],rx,ry,50,50);

	playerMove();
}

function playerMove(){
	if(ArrowUp){
		if(ry-2>=100){
			ry-=2;
		}
	}
	if(ArrowDown){
		if(ry+2<=350){
			ry+=2;
		}
	}
	if(ArrowRight){
		if(rx+2<=650){
			rx+=2;
		}
	}
	if(ArrowLeft){
		if(rx-2>=0){
			rx-=2;
		}
	}
}

function keydown(event){
	if(event.keyCode==38){ArrowUp=true;}
	if(event.keyCode==40){ArrowDown=true;}
	if(event.keyCode==39){ArrowRight=true;}
	if(event.keyCode==37){ArrowLeft=true;}
	if(event.keyCode==32){
		if(playerCounter==0){
			playerCounter=1;
		}else{
			playerCounter=0;
		}
	}
}

function keyup(event){
	if(event.keyCode==38){ArrowUp=false;}
	if(event.keyCode==40){ArrowDown=false;}
	if(event.keyCode==39){ArrowRight=false;}
	if(event.keyCode==37){ArrowLeft=false;}
}






