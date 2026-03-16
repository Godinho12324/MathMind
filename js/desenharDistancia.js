function desenharDistancia(x1,x2,y,d){

    ctx.beginPath()
    ctx.moveTo(x1,y)
    ctx.lineTo(x2,y)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x1,y-5)
    ctx.lineTo(x1,y+5)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x2,y-5)
    ctx.lineTo(x2,y+5)
    ctx.stroke()

    ctx.fillText(d+" m",(x1+x2)/2-10,y+20)
}