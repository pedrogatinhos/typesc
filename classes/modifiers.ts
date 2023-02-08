class Estudante {
    codigoEstudante: number
    nomeEstudante: string
    private idade: number
    protected turma: string

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number, turma: string){
        this.codigoEstudante = codigoEstudante
        this.nomeEstudante = nomeEstudante
        this.idade = idade
        this.turma = turma
    }
    retornarDados() {
        return `${this.codigoEstudante}, ${this.nomeEstudante}, ${this.idade}, ${this.turma}`
    }
}
// const estudante1 = new Estudante(22, 'pedro', 18, 'f16')
// console.log(estudante1.retornarDados())

class Pessoa extends Estudante{
    private rg: string

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number, turma: string, rg: string){
        super(codigoEstudante, nomeEstudante, idade, turma);
        this.rg = rg;
    }
    retornarDados2(): string {
        return ` ${this.turma}, ${this.rg}`
    }

}
const pessoa1 = new Pessoa(22, 'pedro', 17, 'f18', '299881871')
console.log(pessoa1)
