/* 
    Calculadora usando switch-case
        1 - M
        2 - Som
        3 - sub
        4 - Div
*/

const readlineSync = require('readline-sync');
let num1;
let num2;
let operacao = ["Multiplicacao", "Soma", "Subtracao", "Divisao"]; 
let condicao = 1;
let index;

while (condicao != -1){
    num1 = Number(readlineSync.question("Digite o primeiro numero: "));
    num2 = Number(readlineSync.question("Digite o primeiro numero: "));
    index = readlineSync.keyInSelect(operacao, "Qual operacao? ");

    switch (index) {
        case 0:
            console.log(`O resultado da multiplicação é: ${num1 * num2}`);   
            break;     
        case 1:
            console.log(`O resultado da soma é: ${num1 + num2}`);        
            break;     
        case 2:
            console.log(`O resultado da subtração é: ${num1 - num2}`);        
            break;     
        case 3:
            console.log(`O resultado da divisão é: ${num1/ num2}`);  
            break;     

        }
    console.log("\n")
    if (index == -1){
        condicao = -1;
    }
}