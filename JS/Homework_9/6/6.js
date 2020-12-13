var can = document.querySelector("canvas");
var ctx = can.getContext("2d");

function rect(){
    
}

can.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    ctx.fillStyle = "red";
    ctx.fillRect(x-380,y-10,20,20);
}