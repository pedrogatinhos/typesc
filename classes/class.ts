export {};

class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
    const pessoa = new Pessoa('Glaucia', 'Lemos');
    console.log(pessoa.nomeCompleto());

// ==> Exemplo 02 - Classes (sem constructor)
class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}

// Cria uma nova instancia e atribui valores
const estudante = new Estudante();
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = 'Prince Lemos';

console.log('Código do Estudante...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante...: ' + estudante.nomeEstudante);

