var can = document.querySelector("canvas");
var ctx = can.getContext("2d");
var rect = can.getBoundingClientRect();

can.onmousemove = function(e){
    var x = e.clientX;
    var y = e.clientY;
    ctx.fillStyle = "red";
    ctx.clearRect(0,0,700,700);
    ctx.fillRect(x-rect.left-10,y-rect.top-10,20,20);
}


can.onmouseleave = () => {
    ctx.clearRect(0,0,700,500);
}