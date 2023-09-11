import { Autores } from './Autores';

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

export class LivroAventura extends Livros {
    constructor(titulo: string, autor: Autores, isbn: number, qtddisponivel: number, public genero: string) {
        super(titulo, autor, isbn, qtddisponivel)
        this.genero = genero
    }
}

export class LivroTerror extends Livros {
    constructor(titulo: string, autor: Autores, isbn: number, qtddisponivel: number, public assunto: string) {
        super(titulo, autor, isbn, qtddisponivel)
        this.assunto = assunto
    }
}

export class LivroHistoria extends Livros {
    constructor(titulo: string, autor: Autores, isbn: number, qtddisponivel: number, public assunto: string) {
        super(titulo, autor, isbn, qtddisponivel)
        this.assunto = assunto;
    }
}
