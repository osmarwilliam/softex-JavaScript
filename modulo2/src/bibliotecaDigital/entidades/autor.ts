import {Livros} from './livros.js'

export class Autor {
    nomeAutor : string;
    idadeAutor : number;
    idAutor : number;
    livrosAutor : Livros[]  

    constructor(nome : string, idade : number, id : number){
        this.nomeAutor = nome;
        this.idadeAutor = idade;
        this.idAutor = id;
        this.livrosAutor = [];
    }

    adicionarLivros(livro : Livros){
        return this.livrosAutor.push(livro);
    }

    exibirLivros() : void { 
        this.livrosAutor.forEach((element, chave) => {
            console.log(`${this.nomeAutor} livro ${chave+1}: ${element.nomeBook}`);
        });
    }

}