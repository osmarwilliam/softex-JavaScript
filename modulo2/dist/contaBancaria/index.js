class ContaBancaria {
    cpf;
    saldo;
    name;
    idade;
    numero;
    constructor(name, idade, numero, cpf, saldo) {
        this.name = name;
        this.idade = idade;
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    mostrarSaldo() {
        console.log(`O seu saldo é de ${this.saldo}`);
    }
    debitarSaldo(valor) {
        let valorTemp = Number(this.saldo);
        if (valorTemp < valor) {
            console.log("Saldo insuficiente!!");
        }
        else {
            valorTemp = valorTemp - valor;
            this.saldo = valorTemp.toString();
            console.log("Valor debitado com sucesso!!");
        }
    }
    juros() {
    }
}
const pessoa1 = new ContaBancaria("maria", 32, 7798989889, "5213213.123.12.3", "325.000");
pessoa1.mostrarSaldo();
pessoa1.debitarSaldo(40000);
pessoa1.mostrarSaldo();
export {};
//# sourceMappingURL=index.js.map