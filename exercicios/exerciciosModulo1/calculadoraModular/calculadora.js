import rl from '../node_modules/readline-sync/lib/readline-sync.js';


import {somar, dividir, subtrair, multiplicar} from "./modulo/functions.js"

function main() {
    const opções = ["Somar", "Dividir", "Subtrair", "Multiplicar"];
    let optionSelectByUser = 1;

    console.log("Iniciando a calculadora...\n")
    while (optionSelectByUser != -1){
        let valor;
        let num1 = rl.question("Digite o primeiro número: ");
        let num2 = rl.question("Digite o segundo número: ");
        
        optionSelectByUser = rl.keyInSelect(opções, "Escolha uma da opções: ", {cancel : "Sair da calculadora"})
        
        switch (optionSelectByUser){
            case 0:
                console.log(`A soma de ${num1} por ${num2} é: ${somar(num1,num2).toFixed(2)} \n`)
                break;
            case 1:
                valor = dividir(num1, num2);
                if(valor != undefined){
                    console.log(`A divisão de ${num1} por ${num2} é: ${dividir(num1,num2).toFixed(2)}\n`)
                }
                break;
            case 2:
                console.log(`A subtração de ${num1} por ${num2} é: ${subtrair(num1,num2).toFixed(2)}\n`)
                break;
            case 3:
                valor = multiplicar(num1, num2);
                console.log(`A multiplicação de ${num1} por ${num2} é: ${Number.isInteger(valor) ? valor: valor.toFixed(2)}\n`)
                break;
            default:
                console.log("\n!!!Saindo!!!!")
                break
            
        }

    }
}

main()
