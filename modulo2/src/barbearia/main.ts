import { Funcionarios } from "./entidades/funcionarios.js";
import { Clientes } from "./entidades/cliente.js";
import { TiposCortes } from "./entidades/tipoCorte.js";

// criando o cliente

const cliente1 = new Clientes("osmar", 17);
cliente1.dadosCliente();

console.log("\n");

// testando a classe TiposCortes

cliente1.exibirCorte(); 

const corte1 = new TiposCortes("red", 25);
console.log(corte1)
console.log("\n");

cliente1.adicionarCorte(corte1);

cliente1.exibirCorte(); // exibindo o tipo de corte do cliente
cliente1.exibirValorCorte(); // exibindo o valor desse corte


// Testando funcionalidade do funcionario

cliente1.exibirFuncionario(); // utilizei o operador "||" para caso não tenha sido passado nenhum valor para o funcionário dentro da class cliente
// vai exibir que não foi possível obter o "funcionário", já que ele não foi passado para a classe

console.log("\n");
const funcionario1 = new Funcionarios("pedro", "22512321");

cliente1.adicionarFuncionario(funcionario1);

cliente1.exibirFuncionario();
