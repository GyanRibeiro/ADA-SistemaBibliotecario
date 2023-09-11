import Biblioteca, { Autores, LivroAventura, LivroHistoria, Livros, Usuarios,} from "./classes";

// Exemplo de uso
const autor1 = new Autores('Herman Melville');
const livro1 = new Livros('Moby Dick', autor1, 127473, 555);

const autor2 = new Autores('J. K. Rowling');
const livro2 = new Livros('Harry Potter e as Relíquias da Morte', autor2, 128367, 333);

const autor3 = new Autores('Antoine de Saint-Exupéry');
const livroAventura = new LivroAventura('O Pequeno Príncipe', autor3, 1936, 222, 'Aventura');

const autor4 = new Autores('Andrew Hodges');
const livroHistoria = new LivroHistoria('Alan Turing: The Enigma', autor4, 12837, 43, 'Uma biografia detalhada de Alan Turing, explorando sua vida e contribuições para a ciência da computação.')

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livroAventura);
biblioteca.adicionarLivro(livroHistoria);

//Lista os livros
biblioteca.listarLivros();

console.log("-------------------------------------------------------------");

const usuario1 = new Usuarios('Usuário 1', 12);
usuario1.pegarLivroEmprestado(livro1);

const usuario2 = new Usuarios('Usuário 2', 21);
usuario2.pegarLivroEmprestado(livroAventura);

const usuario3 = new Usuarios('Gyan', 19);
usuario3.pegarLivroEmprestado(livroHistoria)

console.log("-------------------------------------------------------------");
// Remove Livro
biblioteca.removerLivro(livro2)

console.log("-------------------------------------------------------------");
// Lista os livros novamente
biblioteca.listarLivros();