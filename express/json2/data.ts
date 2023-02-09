const nome: string[] = ['John', 'Jane', 'Jim', 'Jessica', 'Jake', 'Julia', 'Jack', 'Jasmine', 'Joel', 'Jenny'];
const idade: number[] = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const email: string[] = ['john@example.com', 'jane@example.com', 'jim@example.com', 'jessica@example.com', 'jake@example.com', 'julia@example.com', 'jack@example.com', 'jasmine@example.com', 'joel@example.com', 'jenny@example.com'];
const telefone: string[] = ['11912-345678', '21923-456789', '31934-567890', '41945-678901', '51956-789012','61967-890123', '71978-901234', '81989-123456', '91999-123456', '61955-676789'];
const profissao: string[] = ['Médico', 'Professor', 'Engenheiro', 'Advogado', 'Artista', 'Músico', 'Atleta', 'Escritor', 'Programador', 'Chefe de cozinha'];
const rua: string[] = ['Avenida Paulista', 'Rua dos Inválidos', 'Rua Marechal Deodoro', 'Rua Libero Badaró', 'Avenida Brigadeiro Luis Antonio','Rua da Glória', 'Avenida Rio Branco', 'Rua Tupi', 'Avenida Atlântica', 'Rua Barão de Tefé'];
const numero: string[] = ["147", "93", "139", "115", "111", "37", "93", "114", "114", "115"]
const bairro: string[] = ['Botafogo', 'Flamengo', 'Ipanema', 'Leblon', 'Copacabana','Barra da Tijuca', 'Glória', 'Jardim Botânico', 'Lagoa', 'Santa Teresa'];
const cep: string[] = ['04001-000', '04002-000', '04003-000', '04004-000', '04005-000','04006-000', '04007-000', '04008-000', '04009-000', '04010-000'];
const cidade: string[] = ['Campinas', 'Niterói', 'Santos', 'Florianópolis', 'Joinville', 'Goiânia', 'Manaus', 'Cuiabá', 'Ribeirão Preto', 'Maceió'];
const estado: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília','Fortaleza', 'Curitiba', 'Recife', 'Porto Alegre', 'Natal'];

  const keys: string[] = ['nome', 'idade', 'email', 'telefone', 'profissao', 'rua', 'numero', 'bairro', 'cep', 'cidade', 'estado']
  const values: Array<any> = [nome, idade, email, telefone, profissao, rua, numero, bairro, cep, cidade, estado]
  
    interface Model  {
      [Key : string ] : Array<string | number>
    }
 let dictionary: Model = {}
 for (let i = 0; i < keys.length; i++) {
    dictionary[keys[i]] = values[i]
  
 } 


 export { nome, idade, email, telefone, profissao, rua, numero, bairro, cep, cidade, estado }
