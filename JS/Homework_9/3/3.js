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
            ctx.fillStyle = "black";
            ctx.fillRect(this.x-1, this.y-1, this.width+2, this.height+2);
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        this.change_pos = function(){
            if ((move_x==-1 && box.width!=0) || (move_x==1 && box.width<can.width-2)) this.width += move_x;
            if ((move_y==-1) || (move_y==1 && box.height<can.height-2)) this.height += move_y;
            
        }
    }
}

function stop(){move_x = 0;move_y = 0}

box = new component(50, 50, "green", 1, 1);

function update_area() {
    ctx.clearRect(0,0,can.width,can.height);
    box.update();
    box.change_pos()
}

setInterval(update_area)

document.onkeydown = function(e){
    if (e.key == "ArrowDown") movedown()
    if (e.key == "ArrowUp") moveup()
    if (e.key == "ArrowLeft") moveleft()
    if (e.key == "ArrowRight") moveright()
}

document.onkeyup = function(){stop();console.log("up")}

function moveup() {move_y = -1;}
function movedown() {move_y = 1}
function moveleft() {move_x = -1;}
function moveright() {move_x = 1;}
