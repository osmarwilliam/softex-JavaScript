import rl from '../../node_modules/readline-sync/lib/readline-sync.js'

function adicionarLivros(listaLivros){
    let id = rl.question("Digite o id do livro: ");
    let titulo = rl.question("Digite o titulo do livro: ");
    let autor = rl.question("Digite o autor do livro: ");
    const livro = {
        id : id,
        titulo : titulo,
        autor : autor,
        disponivel : true
    }
    listaLivros.push(livro);
}

function listarLivros(listaLivros){
    console.log("\n!!!LISTA DE LIVROS!!!\n");
    listaLivros.forEach(livros => {
        console.log(`    titulo: ${livros.titulo}, autor: ${livros.autor}, disponibilidade: ${(livros.disponivel == true) ? "sim": "não"}`);
    });
    console.log("\n\n");
}

function emprestarLivro(listaLivros){
    listarLivros(listaLivros);
    let nome = rl.question("Digite o titulo do livro: ");
    let disponibilidadeLivro = false;
    listaLivros.forEach(livros => {
        if (livros.titulo === nome){
            livros.disponivel = false;
            disponibilidadeLivro = true;
        }
    });
    if (disponibilidadeLivro) console.log("Livro achado!!\n");
    else console.log("Livro não achado.");
}

function devolverLivro(listaLivros){
    let nome = rl.question("Digite o titulo do livro: ");
    let livroDisponibilidade = false;
    listaLivros.forEach(livros => {
        if (livros.titulo === nome){
            livros.disponivel = true;
            livroDisponibilidade = true;
            return;
        }
    });
    if (livroDisponibilidade === true) console.log("Livro devolvido!!");
    else console.log("Livro não achado.");
}

export {adicionarLivros, listarLivros, emprestarLivro, devolverLivro};
