var can = document.querySelector("canvas")
var ctx = can.getContext("2d")
var box;
var move_x=0,move_y=0


class component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;

        this.update = function () {
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            // ctx.fillStyle = "black";
            // ctx.fillRect(this.x-1, this.y-1, this.width+2, this.height+2);
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        this.change_pos = function(){
            if ((move_x==-2 && this.x!=1) || (move_x==2 && this.x<can.width-52)) this.x += move_x
            if ((move_y==-2 && this.y!=1) || (move_y==2 && this.y<can.height-52)) this.y += move_y
        }
    }
}

function update_area() {
    ctx.clearRect(0,0,can.width,can.height);
    box.update();
    box.change_pos()
}

function stop(){move_x = 0;move_y = 0}
box = new component(50, 50, "green", 1, 1);

setInterval(update_area,1)
   
function moveup() {move_y = -2;}
function movedown() {move_y = 2}
function moveleft() {move_x = -2;}
function moveright() {move_x = 2;}




