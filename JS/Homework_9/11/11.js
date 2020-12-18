
function draw(){
    var can = document.querySelector("canvas")
    var ctx = can.getContext("2d")
    var img = document.getElementById("ball")
    // ctx.fillStyle = "red"
    // ctx.fillRect(20,20,20,20)
    ctx.drawImage(img, 120, 120,40,30)
}

draw()

