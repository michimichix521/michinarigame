class Stage
{
    constructor(canvas, x, y, frontscreen, backscreen){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.fs = frontscreen;
        this.bs = backscreen;

        this.canvas=document.getElementById("canvas").getContext("2d");
        this.canvas.fillStyle=bs;
        this.canvas.fillRect(0, 0, this.x, this.y);
    }

    draw_canvas(){
        this.canvas.fillStyle=this.bs;
        this.canvas.fillRect(0, 0, this.x, this.y);
    
        this.canvas.fillStyle=this.fs;
        this.canvas.fillRect(0, 100, this.x, this.y-100);
    
    }
}