export default class Biblioteca {
    livro: Livros[] = [];
    // private autores: Autores[] = [];
    // private usuarios: Usuarios[] = [];

    adicionarLivro(livro:Livros){
        this.livro.push(livro);
    }

    listarLivros() {
        console.log("\nLivros disponíveis:");
        const livrosDisponiveis = this.livro.filter((livro) => livro.qtddisponivel > 0);
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
        public titulo: string, 
        public autor: Autores, 
        public isbn: number, 
        public qtddisponivel: number){
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
        public nome: string, 
        public identificacao: number, 
        public livrosPegos: Livros[] = []) {
    }

    pegarLivroEmprestado(livro: Livros){
        this.livrosPegos.push(livro)
    }

    devolver(livro: Livros) {
        const index = this.livrosPegos.indexOf(livro);
        if (index !== -1) {
            this.livrosPegos.splice(index, 1);
        }
    }
}
