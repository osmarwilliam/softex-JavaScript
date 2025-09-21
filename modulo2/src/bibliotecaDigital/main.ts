import { Livros } from "./entidades/livros.js";
import { Autor } from "./entidades/autor.js";

const autor1 = new Autor("George Orwell", 46, 1);
const livro1 = new Livros("LIV001", "1984");
const livro2 = new Livros("liv12321","2012");
autor1.adicionarLivros(livro1);

console.log(autor1);

autor1.exibirLivros();
autor1.adicionarLivros(livro2);
autor1.exibirLivros();
