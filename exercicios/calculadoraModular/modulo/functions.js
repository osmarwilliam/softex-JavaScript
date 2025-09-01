function somar(a, b){
    return a + b;
}

function dividir(a, b){
    if (b == 0){
        console.log("Impossível dividir por 0!\n");
        return;
    }
    return a / b;
}

function multiplicar(a, b){
    return a * b;
}

function subtrair(a, b){
    return a - b;
}


export {somar, dividir, subtrair, multiplicar};