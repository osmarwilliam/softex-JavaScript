function bonusTempoServico(tempoDeServico, salario){
    if (tempoDeServico <= 2) return salario * 0.05;
    else if (tempoDeServico <= 5) return salario * 0.1;
    else return salario * 0.15;
}

function bonusDesempenho(pontuacaoDesempenho, salario){
    if (pontuacaoDesempenho >= 5 &&  pontuacaoDesempenho <=7 ) return salario * 0.2;
    else if (pontuacaoDesempenho >= 7 &&  pontuacaoDesempenho <= 10) return salario * 0.5;
    else return 0;
}

const rl = require('readline-sync');
let salario = rl.question("Digite o seu salário anual: ");
const tempoDeServico = rl.question("Digite quantos anos de serviço: ");
const pontuacaoDesempenho = rl.question("Digite sua pontuaçao de desempenho(de 1 a 10): ");

let bonus_salario = 0;

bonus_salario = bonusTempoServico(tempoDeServico, salario) + bonusDesempenho(pontuacaoDesempenho, salario);
console.log(`O bônus salarial é de: ${bonus_salario}.`);


