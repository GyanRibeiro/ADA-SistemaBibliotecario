export default class Biblioteca {
    livro: Livros[] = [];

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
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor.nome}, ISBN: ${livro.isbn}`);
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
export class Livros {

    constructor(
        private _titulo: string, 
        private _autor: Autores, 
        private _isbn: number, 
        private _qtddisponivel: number){
    }

    
    get titulo(): string {
        return this._titulo
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }
    
    get autor(): Autores {
        return this._autor
    }

    set autor(autor: Autores) {
        this._autor = autor;
    }

    get isbn(): number {
        return this._isbn
    }

    set isbn(isbn: number) {
        this._isbn = isbn;
    }

    get qtdDisponivel(): number {
        return this._qtddisponivel
    }

    set qtdDisponivel(qtdDisponivel: number) {
        this._qtddisponivel = qtdDisponivel;
    }
}

export class Autores {
    livrosEscritos: Livros[] = []
    constructor(public nome: string, livrosEscritos: Livros[] = []){
    }

    adicionarLivro(livro: Livros) {
        this.livrosEscritos.push(livro)
    }
}

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