const e = 1.6e-19
const cargaEletron = -e
const cargaProton = +e

const k = 9e9

let resposta
let explicacaoTexto = ""

let canvas
let ctx

let respondeu = false

window.onload = function () {

    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    gerarExercicio()
}