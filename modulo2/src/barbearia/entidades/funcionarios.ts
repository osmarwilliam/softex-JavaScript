export class Funcionarios {
    nomeFuncionario : string;
    matriculaFuncionario : string;
    idade ?: string;
    numero ?: string;

    constructor(nome : string, matricula : string, idade ?: string, numero? : string){
        this.nomeFuncionario = nome;
        this.matriculaFuncionario = matricula;
        this.numero = numero || "não temos acesso ao numero desse funcionario";
        this.idade = idade || "não temos acesso a idade desse funcionario!";
    }
}