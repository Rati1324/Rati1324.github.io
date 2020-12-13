var can = document.querySelector("canvas");
var ctx = can.getContext("2d");
var rect = can.getBoundingClientRect();

function rect(){
    
}

can.onmousemove = function(e){
    var x = e.clientX;
    var y = e.clientY;
    ctx.fillStyle = "red";
    ctx.fillRect(x-rect.left,y-rect.top,20,20);
}