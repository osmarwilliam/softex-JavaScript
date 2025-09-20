import { Livros } from "./entidades/livros.js";
import { Autor } from "./entidades/autor.js";
const autor1 = new Autor("George Orwell", 46, 1);
const livro1 = new Livros("LIV001", "1984");
autor1.adicionarLivros(livro1);
console.log(autor1);
console.log("ola");
//# sourceMappingURL=main.js.map