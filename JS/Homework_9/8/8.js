var can = document.querySelector("canvas")
var ctx = can.getContext("2d")
var x = 0,y = 0
var box;
var move_x=0,move_y=0
var objects = []

class component {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.random_color = () =>{
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            return `rgba(${r},${g},${b})` 
        }
        this.place = () => {
            ctx.fillStyle = this.random_color();
            ctx.fillRect(x,y, 50,50);
        };
    }
}

for (i=0;i<190;i++){
    box = new component(x,y);
    x += 50;
    if (i>0 && i%15==0) {y += 50;x=0}
    box.place();
}
