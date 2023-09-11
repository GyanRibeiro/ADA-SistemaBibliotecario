import { Livros, LivroAventura, LivroHistoria, LivroTerror} from './Livros';
import { Usuarios } from './Usuarios';

export class Emprestimo {
    usuario: Usuarios;
    livro: Livros;

    constructor(usuario: Usuarios, livro: Livros) {
        this.usuario = usuario;
        this.livro = livro;
    }

    emprestimos: Emprestimo[] = [];

    registrarEmprestimo(usuario: Usuarios, livro: Livros) {
        const emprestimo = new Emprestimo(usuario, livro);
        this.emprestimos.push(emprestimo);
        console.log(`Empréstimo realizado!`);
    }

    registrarDevolucao(usuario: Usuarios, livro: Livros) {
        const emprestimoIndex = this.emprestimos.findIndex(emprestimo => emprestimo.usuario === usuario && emprestimo.livro === livro);
        if (emprestimoIndex !== -1) {
          this.emprestimos.splice(emprestimoIndex, 1);
          console.log("Devolução realizada!");
          livro.qtdDisponivel++;
        }
    }

    calcularMulta(diasAtraso: number): number {
        let multa = 0;
        const livro = this.livro;

        if (livro instanceof LivroAventura) {
            multa = diasAtraso * 2; // 2 reais por dia de atraso
        } else if (livro instanceof LivroTerror) {
            multa = diasAtraso * 3; // 3 reais por dia de atraso
        } else if (livro instanceof LivroHistoria) {
            multa = diasAtraso * 1.5; // 1.5 reais por dia de atraso
        }

        console.log(`Você atrasou ${diasAtraso} dias, sua multa é de: ${multa}$`);
        return multa;
    }
}