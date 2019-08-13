class Stage
{
    constructor(){
        canvas=document.getElementById("canvas").getContext("2d");
        canvas.fillStyle="black";
        canvas.fillRect(0,0,700,500);
    }

    canvas(){
        canvas.fillStyle="black";
        canvas.fillRect(0,0,700,500);
    
        canvas.fillStyle="lightgreen";
        canvas.fillRect(0,100,700,300);
    
    }
}