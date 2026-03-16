function desenharCarga(q,x,y){

    ctx.beginPath()
    ctx.arc(x,y,15,0,Math.PI*2)

    ctx.fillStyle = q>0 ? "#4dabf7" : "#ff6b6b"
    ctx.fill()

    ctx.strokeStyle = "black"
    ctx.stroke()

    ctx.fillStyle = "black"
    ctx.fillText(q,x-10,y-20)
}