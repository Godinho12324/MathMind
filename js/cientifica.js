function cientifica(num){

    let partes = num.toExponential(2).split("e")

    let base = parseFloat(partes[0]) * 10
    let expoente = parseInt(partes[1]) - 1

    base = base.toFixed(1)

    return base + " × 10^" + expoente
}