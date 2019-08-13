class Stage
{
    constructor(canvas, x, y, frontground, background){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.fg = frontground;
        this.bg = background;

        this.canvas.fillStyle=this.bg;
        this.canvas.fillRect(0, 0, this.x, this.y);
    }

    draw_canvas(){
        this.canvas.fillStyle=this.bg;
        this.canvas.fillRect(0, 0, this.x, this.y);
    
        this.canvas.fillStyle=this.fg;
        this.canvas.fillRect(0, 100, this.x, this.y-100);
    
    }
}