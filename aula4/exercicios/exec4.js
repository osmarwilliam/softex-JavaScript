const rl = require('readline-sync');

const numero = rl.question("Digite o número:")

for (let i = numero; i > 0; i--){
    console.log(i);
}