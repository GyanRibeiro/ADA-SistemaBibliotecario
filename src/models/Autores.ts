import { Livros } from './Livros';

export class Autores {
    livrosEscritos: Livros[] = []
    constructor(public nome: string, livrosEscritos: Livros[] = []){
    }

    adicionarLivro(livro: Livros) {
        this.livrosEscritos.push(livro)
    }
}