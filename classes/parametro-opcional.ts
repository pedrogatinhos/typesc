class Estudantex {
  nome: string = 'pedro'
  id: number
    constructor(id:number, nome?:string) {

      this.id = id
      nome!=undefined? this.nome=nome: null
    }
}

const xsas = new Estudantex(2)
console.log(xsas)

const xsas2 = new Estudantex(2, 'juao')