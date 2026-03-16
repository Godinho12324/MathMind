function desenharSistema(q1,q2,d1,d2){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    let y = 120

    let x1 = 120
    let x2 = x1 + d1*80
    let xA = x2 + d2*80

    ctx.font = "14px Arial"

    ctx.beginPath()
    ctx.moveTo(50,y)
    ctx.lineTo(550,y)
    ctx.stroke()

    desenharCarga(q1,x1,y)
    desenharCarga(q2,x2,y)

    ctx.beginPath()
    ctx.arc(xA,y,6,0,Math.PI*2)
    ctx.fill()

    ctx.fillText("A",xA-4,y+30)

    desenharDistancia(x1,x2,y+40,d1)
    desenharDistancia(x2,xA,y+40,d2)
}