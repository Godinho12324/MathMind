function numeroCientifico(expMin, expMax){

    let mantissas = [1,1.2,1.5,2,2.4,3,4,5,6,7,8,9]

    let expoente =
        Math.floor(Math.random()*(expMax-expMin+1)) + expMin

    let mantissa =
        mantissas[Math.floor(Math.random()*mantissas.length)]

    return mantissa * 10**expoente
}

function cargaAleatoria(){

    let mantissas = [1.6,3.2,4.8,6.4,8,9.6]

    let expoente =
        Math.floor(Math.random()*4) - 13

    let mantissa =
        mantissas[Math.floor(Math.random()*mantissas.length)]

    return -(mantissa * 10**expoente)
}