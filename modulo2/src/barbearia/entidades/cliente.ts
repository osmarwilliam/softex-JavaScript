import { Funcionarios } from "./funcionarios.js";
import { TiposCortes } from "./tipoCorte.js";

export class Clientes {
    nomeCliente : string;
    idadeCliente : number;
    numeroCliente ?: string;
    funcionarioCliente ?: Funcionarios;
    corteCliente : TiposCortes[];

    constructor(nome: string, idade: number, numero ?: string){
        this.nomeCliente = nome;
        this.idadeCliente = idade;
        this.numeroCliente = numero || "não foi possível obter o número do cliente!"
        this.corteCliente = [];

    }

    adicionarFuncionario(funcionario : Funcionarios) : Funcionarios {
        return this.funcionarioCliente = funcionario;
    }

    adicionarCorte(corte : TiposCortes){
        if (this.idadeCliente < 18) {
            corte.valorCorte = corte.valorCorte * 0.70;
        }
        return this.corteCliente.push(corte);
    }

    exibirCorte() : void{
        this.corteCliente.forEach(element => {
            console.log(`${element.valorCorte}`);
            console.log("teste")

        });
    }

    dadosCliente() : void{
        console.log(`nome: ${this.nomeCliente}\n Idade: ${this.idadeCliente}\n Numero: ${this.numeroCliente}`)
    }

}