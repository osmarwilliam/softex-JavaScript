let num = 0;
let soma = 0;

for (let i = 0; i < 20; i++){
    if (i % 2 != 0){
        console.log(i);
        soma += i;
    }
}

console.log(`A soma do elementos ímpares entre 1 a 20 é: ${soma}`)