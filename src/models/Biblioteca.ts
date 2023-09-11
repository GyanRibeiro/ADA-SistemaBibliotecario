import { Livros } from './Livros';
import { Autores } from './Autores';

export default class Biblioteca {
    _livro: Livros[] = [];

    get livro() : Livros[] {
        return this._livro
    }

    set livro(livro: Livros[]) {
        this._livro = livro;
    }
    

    // Método que adiciona um livro a biblioteca
    adicionarLivro(livro:Livros){
        this.livro.push(livro);
    }

    // Método que remove um livro da biblioteca
    removerLivro(livro:Livros) {
        console.log(`\nLivro Removido: ${livro.titulo}, ISBN: ${livro.isbn}`);
        const indexParaRemover = this.livro.indexOf(livro)
        this.livro.splice(indexParaRemover, 1);
    }

    // Método que lista os livros da Biblioteca
    listarLivros() {
        console.log("\nLivros disponíveis:");
        const livrosDisponiveis = this.livro.filter((livro) => livro.qtdDisponivel > 0);
        livrosDisponiveis.forEach((livro) => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor.nome}, ISBN: ${livro.isbn}, Quantidades disponíveis: ${livro.qtdDisponivel}`);
        });

        // for (const i in this.livro){
        //     console.log(`Título: ${this.livro[i]}`);
        // }
    }

    // Método que encontra um livro pelo seu ISBN
    encontrarLivros(isbn: number) {
        return `Livro encontrado${this.livro.find((livro)=> livro.isbn === isbn)}`
    }
}