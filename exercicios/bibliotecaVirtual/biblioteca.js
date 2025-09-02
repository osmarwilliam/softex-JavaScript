import rl from 'readline-sync';
import {adicionarLivros, listarLivros, emprestarLivro, devolverLivro} from './modulo/functions.js';

function bibliotecaVirtual(){
    let opcoes = ["Adicionar Livro", "Listar Livros", "Emprestar Livro", "Devolver Livro"]; 
    let optionSelectByUser = 1;

    let listaLivros = []

    while(optionSelectByUser != -1){
        optionSelectByUser = rl.keyInSelect(opcoes, "Escolha uma das opções acima: ",
             {cancel: "Sair da biblioteca virtual!"})

        switch (optionSelectByUser){
            case 0:
                adicionarLivros(listaLivros);
                break;
            case 1:
                listarLivros(listaLivros);
                break;
            case 2:
                emprestarLivro(listaLivros);
                break;
            case 3:
                devolverLivro(listaLivros);
                break;
            default:
                console.log("\nSaindo do sistema...")
                break;
        }

    }
}

bibliotecaVirtual();