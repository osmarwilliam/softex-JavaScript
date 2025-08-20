const rl = require('readline-sync');

function armazenaEstoque(estoque){
    const nome = rl.question("Escreva o nome do produto que ira ser armazenado: "); 
    const quantidadeDisponivel = rl.question("Escreva a quantidade de : "); 
    const precoUnitario = rl.question("Escreva o preco unitario desse produto: ");    
    pedido = {
        nome : nome,
        quantidadeDisponivel : quantidadeDisponivel,
        precoUnitario : precoUnitario
    };
    
    estoque.push(pedido);

}

function exibirEstoque(estoque){
    if (estoque.length == 0){
        return console.log("ADICIONE PRIMEIRO UM PRODUTO AO ESTOQUE!!");
    }
    for(let i = 0; i < estoque.length; i++){
        console.log(`Produto: ${estoque[i].nome} \n  Quantidade disponível: ${estoque[i].quantidadeDisponivel}\n  Preço unitário: R$${estoque[i].precoUnitario}`);
    }
}

function validarNome(){
    let nomeProduto = rl.question("Digite o nome do produto solicitado: ");    

}

function receberPedido(estoque){
    let nomeProdutoPedido = validar();
    let quantidaSolicitadaUsuario;
    if(){

    } 
    let condition = rl.question("Deseja adicionar outro produto? (s/n) ")
    if (condition == "s") receberPedido();
}

function sistemaAlmoxarifado(){
    let optionsSelectByUsuario = 0
    const opcoesLoja = ["Armazenar o estoque", "Exibir o estoque atual",
        "Receber o Pedido", "Validar o pedido"];

    const estoque = [];
    while (optionsSelectByUsuario != -1) {
        optionsSelectByUsuario = rl.keyInSelect(opcoesLoja, "Escolha uma das opcoes: ");
        console.log("\n_______________________\n");

        switch (optionsSelectByUsuario){
            case 0:
                armazenaEstoque(estoque);
                break;
            case 1:
                exibirEstoque(estoque);
                break;
            case 2:
                receberPedido(estoque);
                break;            
            default:
                console.log("SAINDO DO SISTEMA.....\n")

        }
    }

}

sistemaAlmoxarifado();

