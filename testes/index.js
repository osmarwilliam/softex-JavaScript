let a = "-";
let b;
let c = null;
let d = 1234;
console.log(a ?? 1);
console.log(b ?? 1);
console.log(c ?? 1);
console.log(d ?? 1);

pessoa = [
    {nome: "osmar", idade : 25}, 
    {nome: "maria", idade : 21}
];

function mostrarDados(){
    pessoa.forEach(element => {
        console.log(element);
        // for (chave in element){
        //     console.log(`A chave: ${chave} e valor: ${element[chave]} `);
        // }
        console.log('\n');
    });
}

mostrarDados();
