enum Cidade {
  FLN = 'Florianopolis',
  SP = 'São Paulo',
  TNG = 'Tangará da Serra',
  GRU = 'Guarulhos'
}

interface Models<T> {
  id: T,
  toString(): string
}

class Produto implements Models<string> {
  id: string
}
 
class Pessoa implements Models<number>{
  id: number
  nome: string //ready only quer dizer que é apenas para leitura
  idade: number
  cidade?: string //cidade é opcional

  constructor(nome: string, idade: number, cidade?: string) {
    this.nome = nome
    this.idade = idade
    this.cidade = cidade
  }

  toString = ():string => {
    return `${this.nome} tem ${this.idade} e mora em ${this.cidade}`;
  }

  maiorDe18 = ():boolean => {
    return this.idade >= 18
  }
}

export {
  Cidade,
  Pessoa
};