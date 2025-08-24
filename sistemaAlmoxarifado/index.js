const rl = require('readline-sync');

function espacamento(){
    console.log("\n_______________________\n");
}

function armazenaEstoque(estoque){
    const nome = (rl.question("Escreva o nome do produto que ira ser armazenado: ")).toLowerCase()  ; 
    const quantidadeDisponivel = Number(rl.question("Escreva a quantidade de : ")); 
    const precoUnitario = Number(rl.question("Escreva o preco unitario desse produto: "));    
    pedido = {
        nome : nome,
        quantidadeDisponivel : quantidadeDisponivel,
        precoUnitario : precoUnitario
    };
    estoque.push(pedido);
}

function exibirEstoque(estoque){
    if (estoque.length == 0){
        console.log("ADICIONE PRIMEIRO UM PRODUTO AO ESTOQUE!!");
        espacamento();
        return
    }
    for(let i = 0; i < estoque.length; i++){
        console.log(`Produto: ${estoque[i].nome} \n  Quantidade disponível: ${estoque[i].quantidadeDisponivel}\n  Preço unitário: R$ ${(estoque[i].precoUnitario).toFixed(2)}\n`);
    }
    espacamento();
}

function validarNome(estoque){
    const opcoesMenuNome = ["Tentar outro produto", "Sair para o menu"];
    let opcoesUsuario;
    let nomeProduto;
    
    while (opcoesUsuario != 1) {
        nomeProduto = rl.question("Digite o nome do produto solicitado: ");    
        
        for (let i = 0; i < estoque.length; i++) {
            if (nomeProduto == estoque[i].nome){
                console.log("Produto encontrado com sucesso!!!")
                return [nomeProduto, estoque[i].precoUnitario];
            } 
        }
        console.log("\n Infelizmente não encontramos esse produto em nosso estoque.\n")
        opcoesUsuario = rl.keyInSelect(opcoesMenuNome, "Escolha uma das opções acima: ", {cancel : false});    
    }
    return [];
}

function validarPedido(pedidoCliente){
    if (pedidoCliente.length == 0){
        espacamento();
        console.log("Nenhum produto foi solicitado.. \n");
        return;
    }
    let valorTotalPedido = 0;
    for (let i = 0; i < pedidoCliente.length; i++){
        console.log(`${pedidoCliente[i].nome}: ${pedidoCliente[i].quantidade} quantidades por R$${pedidoCliente[i].valorUnitario}`);
        valorTotalPedido += pedidoCliente[i].quantidade * pedidoCliente[i].valorUnitario;
    }
    console.log(`Total da compra: ${valorTotalPedido}`)
}

function validarQuantidadeSolicitada(estoque, nomeProdutoPedido){
    let qtdUsuario;
    let qtdTotalProduto = 0, pos = 0;
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].nome == nomeProdutoPedido){
            qtdTotalProduto = estoque[i].quantidadeDisponivel; // pego a quantidade total de itens do produto escolhido pelo user
            pos = i; // salvo a posição desse produto
        } 
    }

    while (!qtdUsuario){
        qtdUsuario = Number(rl.question(`\nEscolha a quantidade ${nomeProdutoPedido} (há ${qtdTotalProduto} desse produto no estoque) : `))
        if (qtdUsuario > qtdTotalProduto || qtdUsuario <= 0){
            console.log("\nNão HÁ essa QUANTIDADE no estoque, por favor, digite novamente uma quantidade VÁLIDA!!!\n");
            qtdUsuario = undefined;
        }
    }

    estoque[pos].quantidadeDisponivel -= qtdUsuario;
    if (estoque[pos].quantidadeDisponivel == 0) {
        estoque.splice(pos, 1); // se a quantidade zerou, então eu removo o produto do estoque
    }
    return qtdUsuario;
}

function receberPedido(estoque, pedidoCliente){
    if (estoque.length == 0){
        console.log("!!!!!ESTOQUE VAZIO!!!!!");
        espacamento();
        return;
    }

    let [nomeProdutoPedido, valorUnitario] = validarNome(estoque);
    if (nomeProdutoPedido == undefined){
        espacamento();
        validarPedido(pedidoCliente);
        return;
    } 
    
    let quantidaSolicitadaUsuario = validarQuantidadeSolicitada(estoque, nomeProdutoPedido);
    espacamento();
    
    let condition = rl.question("\nDeseja adicionar outro produto? (s/n) ")
    
    pedido = {
        nome : nomeProdutoPedido,
        quantidade : quantidaSolicitadaUsuario,
        valorUnitario : valorUnitario
    }

    pedidoCliente.push(pedido);
    if (condition == "s") {
        receberPedido(estoque, pedidoCliente);
    } else {
        validarPedido(pedidoCliente);
    }
}

function sistemaAlmoxarifado(){
    let optionsSelectByUsuario = 0
    const opcoesLoja = ["Armazenar o estoque", "Exibir o estoque atual",
        "Realizar Pedido"];

    const estoque = [];
    while (optionsSelectByUsuario != -1) {
        optionsSelectByUsuario = rl.keyInSelect(opcoesLoja, "Escolha uma das opcoes: ", {cancel : "Sair do sistema"});
        espacamento();
        switch (optionsSelectByUsuario){
            case 0:
                armazenaEstoque(estoque);
                break;
            case 1:
                exibirEstoque(estoque);
                break;
            case 2:
                const pedidoCliente = [];
                receberPedido(estoque, pedidoCliente);
                break;            
            default:
                console.log("SAINDO DO SISTEMA.....")
                espacamento();
        }
    }
}

sistemaAlmoxarifado();
