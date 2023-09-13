import { Livros } from './Livros';

export class Autores {
    _livrosEscritos: Livros[] = []
    constructor(public nome: string, livrosEscritos: Livros[] = []){
        this._livrosEscritos = livrosEscritos;
    }

    
    get livrosEscritos(): Livros[]{
        return this._livrosEscritos
    }
    
    set livrosEscritos(livrosEscritos : Livros[]) {
        this._livrosEscritos = livrosEscritos;
    }

    adicionarLivro(livro: Livros) {
        this.livrosEscritos.push(livro)
    }
}