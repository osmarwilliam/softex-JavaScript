export class Autor {
    nomeAutor;
    idadeAutor;
    idAutor;
    livrosAutor;
    constructor(nome, idade, id) {
        this.nomeAutor = nome;
        this.idadeAutor = idade;
        this.idAutor = id;
        this.livrosAutor = [];
    }
    adicionarLivros(livro) {
        return this.livrosAutor.push(livro);
    }
}
//# sourceMappingURL=autor.js.map