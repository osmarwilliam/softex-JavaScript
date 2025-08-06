// let, var, const


// +, -, *, / (divisão), ** (potencia), % (resto de divisão)


function soma(a, b){
    return a + b;
};


function subtrair(a, b){
    return a - b;
};

function verificarPar(a){
    if (a  % 2 == 0){
        return console.log("O número " + a + " é par");
    } else {
        return console.log("O número " + a + " é impar");
    }
}

const prompt = require('prompt-sync')({sigint: true});

let a = Number(prompt("Digite um número: "));
let b = Number(prompt("Digite um segundo número: "));

console.log("A soma é = ", soma(a,b),", a subtração é = ", subtrair(a,b));

let qtd = Number(prompt("Quantos digitos vc quer verificar? "));

for (let i = 0; i < qtd; i++){
    let numero = Number(prompt("\nDigite o "+ (i + 1)+ "º número: "))
    verificarPar(numero);
}

