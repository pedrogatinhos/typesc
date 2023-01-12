let nome:string = "pedro"
let number: number = 8

let numbers: Array<number> = [1, 2, 3];
let strings: Array<String> = ["p", "a", "c", "d"]

let person: [string, number, boolean] = ["Bob", 25, true] //tuplas 

interface objeto {
    nome: string,
    email: string,
    idade: number,
    cpf?: number

}
type objeto2 = {
    nome: string,
    email: string,
    idade: number,
    cpf?: number,

}

function show (numero: number): number {

    return numero * 2
}

//ovjeto de tipo anonimo
function objeto (usuario: {username: string, email: string}): string{

    return usuario.username + usuario.email
}
 
function object2 (usuario: objeto): string {

    return usuario.nome + usuario.idade
}

function object3 (usuario: objeto2): string {

    return usuario.nome + usuario.idade
}