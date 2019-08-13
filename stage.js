class Stage
{
    constructor(canvas, x, y, frontscreen, backscreen){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.fs = frontscreen;
        this.bs = backscreen;

        canvas=document.getElementById("canvas").getContext("2d");
        canvas.fillStyle=bs;
        canvas.fillRect(0, 0, this.x, this.y);
    }

    draw_canvas(){
        canvas.fillStyle=this.bs;
        canvas.fillRect(0, 0, this.x, this.y);
    
        canvas.fillStyle=this.fs;
        canvas.fillRect(0, 100, this.x, this.y-100);
    
    }
}