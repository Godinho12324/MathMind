function gerarExercicio(){

    respondeu = false

    let tipo = Math.floor(Math.random()*6)

    document.getElementById("resultado").innerText = ""
    document.getElementById("explicacao").innerText = ""

    let altDiv = document.getElementById("alternativas")
    altDiv.innerHTML = ""

    ctx.clearRect(0,0,canvas.width,canvas.height)

    canvas.style.display = "none"

    if(tipo === 0){

        let n = Math.floor(Math.random()*9 + 1) * 10**13
        resposta = n * cargaEletron

        document.getElementById("pergunta").innerText =
`Um objeto possui ${cientifica(n)} elétrons em excesso.
Qual é sua carga elétrica?`

        explicacaoTexto =
`Q = n × e

Q = ${cientifica(n)} × 1.6×10⁻¹⁹

Q = ${cientifica(resposta)} C`
    }

    else if(tipo === 1){

        let n = Math.floor(Math.random()*9 + 1) * 10**13
        resposta = n * cargaProton

        document.getElementById("pergunta").innerText =
`Um cátion possui excesso de ${cientifica(n)} prótons.
Qual é sua carga elétrica?`

        explicacaoTexto =
`Q = n × e

Q = ${cientifica(n)} × 1.6×10⁻¹⁹

Q = ${cientifica(resposta)} C`
    }

    else if(tipo === 2){

        let protons = Math.floor(Math.random()*9 + 1) * 10**25
        let eletrons = Math.floor(Math.random()*9 + 1) * 10**25

        resposta = (protons*cargaProton) + (eletrons*cargaEletron)

        document.getElementById("pergunta").innerText =
`Um objeto possui ${cientifica(protons)} prótons
e ${cientifica(eletrons)} elétrons.

Calcule sua carga elétrica.`

        explicacaoTexto =
`n = prótons - elétrons

Q = n × e

Q = ${cientifica(resposta)} C`
    }

    else if(tipo === 3){

        let n = Math.floor(Math.random()*9 + 1) * 10**14
        let Q = n * e

        resposta = n

        document.getElementById("pergunta").innerText =
`Um objeto possui carga total de ${cientifica(Q)} C.

Quantas partículas estão em excesso?`

        explicacaoTexto =
`n = Q / e

n = ${cientifica(n)} partículas`
    }

    else if(tipo === 4){

        let q = (Math.floor(Math.random()*9)+1) * 10
        let d = Math.floor(Math.random()*9 + 1)

        resposta = k*q/(d**2)

        document.getElementById("pergunta").innerText =
`Uma carga de ${q} c está a ${d} m
de um ponto.

Calcule o campo elétrico.`

        explicacaoTexto =
`E = kQ / d²

E = 9 × 10⁹ × ${q} / ${d}²

E = ${cientifica(resposta)} N/C`
    }

    else if(tipo === 5){

        canvas.style.display = "block"

        let q1 = (Math.floor(Math.random()*5)+1) * 10
        let q2 = (Math.floor(Math.random()*5)+1) * 10

        if(Math.random()>0.5) q1 *= -1
        if(Math.random()>0.5) q2 *= -1

        let d1 = Math.floor(Math.random()*3 +1)
        let d2 = Math.floor(Math.random()*3 +1)

        let r1 = d1 + d2
        let r2 = d2

        let E1 = k*q1/(r1**2)
        let E2 = k*q2/(r2**2)

        resposta = E1 + E2

        desenharSistema(q1,q2,d1,d2)

        document.getElementById("pergunta").innerText =
`Calcule o campo elétrico resultante no ponto A.`

        explicacaoTexto =
`E₁ = 9 × 10⁹ × ${q1} / ${r1}²

E₂ = 9 × 10⁹ × ${q2} / ${r2}²

E = E₁ + E₂

E = ${cientifica(resposta)} N/C`
    }

    gerarAlternativas(resposta)
}