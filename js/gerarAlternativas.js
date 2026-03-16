function gerarAlternativas(respostaCorreta){

    let alternativas = [respostaCorreta]

    while(alternativas.length < 5){

        let erro = respostaCorreta * (Math.random()*2 -1) * 0.8
        let fake = respostaCorreta + erro

        let repetir = alternativas.some(a =>
            Math.abs(a-fake) < Math.abs(respostaCorreta)*0.05
        )

        if(!repetir){
            alternativas.push(fake)
        }
    }

    alternativas.sort(() => Math.random() - 0.5)

    mostrarAlternativas(alternativas,respostaCorreta)
}