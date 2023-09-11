import { Livros } from './Livros';

export class Usuarios {

    constructor (
        private _nome: string, 
        private _identificacao: number, 
        private _livrosPegos: Livros[] = []) {
    }

    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get identificacao(): number {
        return this._identificacao
    }

    set identificacao(identificacao: number) {
        this._identificacao = identificacao;
    }

    get livrosPegos(): Livros[] {
        return this._livrosPegos
    }

    set livrosPegos(livrosPegos: Livros[]) {
        this._livrosPegos = livrosPegos;
    }

    // Método que faz o usuário pegar um livro emprestado (Dinimui a quantidade disponível)
    pegarLivroEmprestado(livro: Livros){
        this.livrosPegos.push(livro);
        console.log(`Livro pego: ${livro.titulo}`)
        livro.qtdDisponivel--
    }

    // Método que faz o usuário devolver um livro pego emprestado (Almenta a quantidade disponível)
    devolver(livro: Livros) {
        const index = this.livrosPegos.indexOf(livro);
        if (index !== -1) {
            this.livrosPegos.splice(index, 1);
            livro.qtdDisponivel++;
        }
    }
}