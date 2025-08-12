const readlineSync = require('readline-sync');

let salario = Number(readlineSync.question("Digite o seu salário: "));

let aumentoSalarial = salario * 0.03;

if (salario < 1050) {
    salario += 200;
}
salario += aumentoSalarial;
console.log(`Seu novo salário é de R$${salario.toFixed(2)}`);