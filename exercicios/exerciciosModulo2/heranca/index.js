import { Pessoa, PessoaFisica, PessoaJuridica } from "./modulo/modulo.js";

function espacamento(){
    console.log("\n------------------------------\n")
}

const pessoa1 = new Pessoa("marta", 24, 888999009);
const PessoaFisica1 = new PessoaFisica("maria", 37, 80912830921,2312314);
const PessoaJuridica1 = new PessoaJuridica("maria", 37, 80912830921,12312312312);

PessoaFisica1.mostrarCpf();
espacamento()
PessoaJuridica1.mostrarCnpj();
PessoaJuridica1.apresentar
espacamento()
pessoa1.apresentar();
