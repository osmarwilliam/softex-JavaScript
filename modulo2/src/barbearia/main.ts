import { Funcionarios } from "./entidades/funcionarios.js";
import { Clientes } from "./entidades/cliente.js";
import { TiposCortes } from "./entidades/tipoCorte.js";


const cliente1 = new Clientes("osmar", 17);

cliente1.dadosCliente();

cliente1.exibirCorte();
console.log("\n");
const corte1 = new TiposCortes("red", 25);
console.log(corte1)
console.log("\n");

cliente1.adicionarCorte(corte1);
cliente1.exibirCorte();
