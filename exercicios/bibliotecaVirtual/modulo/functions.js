import rl from "../calculadoraModular/readline-sync"

function adicionarLivros(listaLivros){
    let id = rl.question("Digite o id do livro: "); 
    let titulo = rl.question("Digite o titulo do livro: "); 
    let autor = rl.question("Digite o autor do livro: "); 
    livro = {
        id : id,
        titulo : titulo,
        autor : autor,
        disponivel : true
    }
    listaLivros.push(livro);
}

function listarLivros(listaLivros){
    listaLivros.forEach(element => {
        for (chave in element){
            console.log(`titulo`);
        }
    });
}

function emprestarLivro(listaLivros){
    listarLivros(listaLivros);
    let nome = rl.question("Digite o nome do livro: ");
    let pos = -1;
    for (let i = 0; i < listaLivros.length; i++){
        if (nome == listaLivros[i].nome){
            listaLivros[i].disponivel = false
        }
    }
    if (pos == -1){
        console.log("Livro não achado.")
    }
}

export {adicionarLivros, listarLivros, emprestarLivro};