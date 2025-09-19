class ContaBancaria {
    private cpf : string;
    private saldo : string;
    name : string;
    idade : number;
    numero : number;

    public constructor(name : string, idade : number, numero : number, cpf : string,  saldo : string){
        this.name = name;
        this.idade = idade;
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    public mostrarSaldo() : void {
        console.log(`O seu saldo é de ${this.saldo}`)
    }

    public debitarSaldo(valor : number) : void {
        let valorTemp : number = Number(this.saldo); 
        if (valorTemp < valor){
            console.log("Saldo insuficiente!!")
        }   else {
            valorTemp = valorTemp - valor;
            this.saldo = valorTemp.toString();
            console.log("Valor debitado com sucesso!!")
        }
    }

    public juros() {

    }
}

const pessoa1 = new ContaBancaria("maria", 32, 7798989889, "5213213.123.12.3", "325.000");

pessoa1.mostrarSaldo();
pessoa1.debitarSaldo(40000);
pessoa1.mostrarSaldo();

