import object from "./terrivel";

interface Base {
    nome: string,
    cidade: string,
    idade: number
}
const nomes: string[] = ["João", "Maria", "Pedro", "Ana", "Carlos", "Lucia", "Ricardo", "Juliana", "Fernando", "Paula"];
const cidades: string[] = ["Maricá", "São Paulo", "Belo Horizonte", "Salvador", "Fortaleza", "Brasília", "Curitiba", "Goiânia", "Rio de Janeiro", "São Paulo"];
let lista: object[] = []

function R(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function factory(nome: string, cidade: string, idade: number) : Base{
    return {nome, cidade, idade}

 }

for (let i = 0; i < 9; i++) {
    const temp: Base = factory(nomes[R(0,9)], cidades[R(0,9)], R(0,30));
    lista.push(temp);
    
}
console.log(lista)

export { R as random }
export { lista as lista2 }
