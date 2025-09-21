import { Funcionarios } from "./funcionarios.js";
import { TiposCortes } from "./tipoCorte.js";

export class Clientes {
    nomeCliente : string;
    idadeCliente : number;
    numeroCliente ?: string;
    // não sei se essa é a melhor forma, apesar de ser possível um cliente ter mais de um tipo de corte no seu estilo
    corteCliente : TiposCortes[]; 
    // da mesma forma, um cliente pode ter mais de um funcionário que atende ele, assim como um funcionário terá diversos clientes
    funcionarioCliente ?: Funcionarios;
    
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

    exibirFuncionario() : void {
        console.log(`nome do funcionario: ${this.funcionarioCliente?.nomeFuncionario || "não foi possível obter o nome do funcionario!"}\n ID do funcionario: ${this.funcionarioCliente?.matriculaFuncionario || "não foi possível obter id"}`)
    }

    exibirCorte() : void{
        this.corteCliente.forEach(element => {
            console.log(`Estilo do corte: ${element.nomeCorte}`);
        });
    }
    
    dadosCliente() : void{
        console.log(`nome: ${this.nomeCliente}\n Idade: ${this.idadeCliente}\n Numero: ${this.numeroCliente}`)
    }

    exibirValorCorte() : void {
        this.corteCliente.forEach(element => {
            console.log(`Valor do corte: ${element.valorCorte}`)
        });
    }
    
}