const { Console } = require("console");

frutas = ["banana", "jaca", "uva"]

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

console.log("\n-------------------\n");

for (let fruta in frutas){
    // ao utilizar o {IN} a variável retorna o INDEX 
    console.log(fruta, frutas[fruta]) 
}

console.log("\n-------------------\n");

for (let fruta of frutas){
    // já quando utilizamos o {OF} a variável criada retorna o ELEMENTO
    console.log(fruta, frutas[fruta])
}

const cores = ["amarelo", "vermelho", "azul"]

for (const index in cores){
    console.log(index, cores[index]);
}

console.log("\n-------------------\n");

let aumento = 500;
do {
    console.log(`o salário é de: ${aumento}`);
    aumento += 50; 
} while(aumento < 500);
