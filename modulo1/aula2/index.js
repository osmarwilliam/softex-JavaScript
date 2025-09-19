
function calcularMedia(a, b, c) {
    let valor = (a + b + c)/3;

    if (valor >= 8){
        return "aprovado";
    } else if (valor >= 5) {
        return "recuperação";
    } else {
        return "reprovado";
    }
}

console.log(calcularMedia(10,20,30))


