window.onload=init_time_nari;
var inari_id=window.setInterval(update,50);

function init_time_nari(){
	console.log("1度だけのnari!");
}

function update(){

}

function inari(){
	document.getElementById("michi").innerHTML="Hello michi!";
}