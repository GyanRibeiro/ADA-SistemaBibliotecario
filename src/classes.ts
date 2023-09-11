export default class Biblioteca {
    livro: Livros[] = [];
    // private autores: Autores[] = [];
    // private usuarios: Usuarios[] = [];

    adicionarLivro(livro:Livros){
        this.livro.push(livro);
    }

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

    pegarLivroEmprestado(livro: Livros){
        this.livrosPegos.push(livro);
        livro.qtdDisponivel--
    }

    devolver(livro: Livros) {
        const index = this.livrosPegos.indexOf(livro);
        if (index !== -1) {
            this.livrosPegos.splice(index, 1);
            livro.qtdDisponivel++;
        }
    }
}
