import Biblioteca, { Autores, Livros, Usuarios } from "./classes";

// Exemplo de uso
const autor1 = new Autores('Herman Melville');
const livro1 = new Livros('Moby Dick', autor1, 127473, 555);

const autor2 = new Autores('J. K. Rowling');
const livro2 = new Livros('Harry Potter e as Relíquias da Morte', autor2, 128367, 333);

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

const usuario1 = new Usuarios('Usuário 1', 12);
usuario1.pegarLivroEmprestado(livro1);

const usuario2 = new Usuarios('Usuário 2', 21);
usuario2.pegarLivroEmprestado(livro2);

//Lista os livros
biblioteca.listarLivros();

// Remove Livro
biblioteca.removerLivro(livro2)

// Lista os livros novamente
biblioteca.listarLivros();