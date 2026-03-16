function mostrarAlternativas(lista,correta){

    let div = document.getElementById("alternativas")

    lista.forEach(valor=>{

        let botao = document.createElement("button")

        botao.innerText = cientifica(valor)

        botao.onclick = function(){

            if(respondeu) return

            respondeu = true

            let botoes = document.querySelectorAll("#alternativas button")

            botoes.forEach(b => b.disabled = true)

            if(valor === correta){

                botao.style.backgroundColor = "#4CAF50"

                document.getElementById("resultado").innerText =
                "✅ Resposta correta!"

            }else{

                botao.style.backgroundColor = "#ff4d4d"

                document.getElementById("resultado").innerText =
                "❌ Resposta incorreta."

                botoes.forEach(b=>{
                    if(b.innerText === cientifica(correta)){
                        b.style.backgroundColor = "#4CAF50"
                    }
                })
            }

            document.getElementById("explicacao").innerText =
            explicacaoTexto
        }

        div.appendChild(botao)
    })
}