window.onload=init_time;
var id=window.setInterval(update,50);

function init_time(){
	console.log("1度だけのmichi!");
}

function update(){

}

function michi(){
	document.getElementById("michi").innerHTML="Hello michi!";
}