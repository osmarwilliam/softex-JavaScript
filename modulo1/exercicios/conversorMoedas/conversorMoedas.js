// algoritmo simples que consume uma api e converte moedas

const apiKey = '77478b4a4fb9e95cd5cdc6d7';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

async function getExchangeRate(daMoeda, paraMoeda) {
    
    try {
        const response = await fetch(`${apiURL}${daMoeda}`)
        // pego o resultado de response e transformo em json para manipular
        const data = await response.json();

        if (data.result === "success"){
            return data.conversion_rates[paraMoeda];

        } else{
            throw new Error("Erro ao buscar a taxa de câmbio");
        }

    }catch(error) {
        console.log("error: ", error);
        return null;
    }

}

// getExchangeRate("USD", "BRL")

import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js' 

async function main() {
    let valor; // undefined, portanto é falsy iniciamente
    while (!valor) {
        valor = Number(readlineSync.question("Digite um valor para conversão: "));
        if (isNaN(valor)) {
            console.log("Digite um número válido.");
            valor = undefined; // reseta para continuar no loop
        }
    }

    const moedas = ['USD', 'EUR', 'CAD', 'GBP', 'BRL'];
    let daMoeda;
    let paraMoeda;

    try {
        daMoeda = readlineSync.keyInSelect(moedas, 'Escolha a moeda que iremos converter: ');
        if (daMoeda === -1) {
            console.log("Você escolheu cancelar a operação.");
            return;
        }
        paraMoeda = readlineSync.keyInSelect(moedas, 'Escolha a moeda para qual iremos converter: ');
        if (paraMoeda === -1) {
            console.log("Você escolheu cancelar a operação.");
            return;
        }
    } catch (error) {
        console.log("error", error);
        return;
    }

    const exchangeRate = await getExchangeRate(moedas[daMoeda], moedas[paraMoeda]);

    if (exchangeRate) {
        const valorConvertido = valor * exchangeRate;
        console.log(`A conversão de ${valor} ${moedas[daMoeda]} para ${moedas[paraMoeda]} é: ${valorConvertido.toFixed(2)}`);
    } else {
        console.log("Não foi possível realizar a conversão.");
    }
}

main();
