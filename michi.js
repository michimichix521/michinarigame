window.onload=init_timeMichi;
var michiId=window.setInterval(update,50);

function init_timeMichi(){
	console.log("1度だけのmichi!");
}

function update(){

}

function michi(){
	document.getElementById("michi").innerHTML="Hello michi!";
}