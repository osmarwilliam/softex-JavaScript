export class Pessoa{
    constructor(nome, idade, numero){
        this.nome = nome;
        this.idade = idade;
        this.numero = numero;
    }
    apresentar(){
        console.log(`${this.nome} tem ${this.idade} anos e seu número é ${this.numero}`);
    }
}

export class PessoaFisica extends Pessoa {
    #cpf
    constructor(nome, idade, numero, cpf) {
        super(nome, idade, numero);
        this.#cpf = cpf;
    }
    mostrarCpf(){
        console.log(`${this.nome} tem o cnpj: ${this.#cpf}`);
    }
}


export class PessoaJuridica extends Pessoa {
    #cnpj
    constructor(nome, idade, numero, cpnj){
        super(nome, idade, numero);
        this.#cnpj = cpnj;
    }
    mostrarCnpj(){
        console.log(`${this.nome} tem o cnpj: ${this.#cnpj}`);
    }
}