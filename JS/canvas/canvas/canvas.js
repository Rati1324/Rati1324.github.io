function draw(){
	can = document.querySelector("canvas")
	ctx = can.getContext("2d")
	ctx.beginPath()
	ctx.moveTo(20,20)
	ctx.lineTo(20,40)
	ctx.stroke()
}