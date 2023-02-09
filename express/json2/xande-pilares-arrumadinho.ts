
import {nome, idade, email, telefone, profissao, rua, numero, bairro, cep, cidade, estado } from "./data";
const lista: Base[] = []

interface Endereço {
    rua: string,
    numero: string,
    bairro: string,
    cep: string,
    cidade: string,
    estado: string,

}

interface Base {
    nome: string,
    idade: number,
    email: string,
    telefone: string,
    profissao: string,
    endereço: Endereço

}


function R(min: number = 0, max: number = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function factory(index: number) : Base {
    return {
        nome: nome[index],
        idade: idade[index],
        email: email[index],
        telefone: telefone[index],
        profissao: profissao[index],
        endereço: {
            rua: rua[index],
            numero: numero[index],
            bairro: bairro[index],
            cep: cep[index],
            cidade: cidade[index],
            estado: estado[index],
        }
    }
}

for (let i = 0; i < 9; i++) {
    const temp: Base = factory(R(0,9));
    lista.push(temp);
    
}

export { lista }
export { R }





