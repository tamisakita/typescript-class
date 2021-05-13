"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = exports.Cidade = void 0;
var Cidade;
(function (Cidade) {
    Cidade["FLN"] = "Florianopolis";
    Cidade["SP"] = "S\u00E3o Paulo";
    Cidade["TNG"] = "Tangar\u00E1 da Serra";
    Cidade["GRU"] = "Guarulhos";
})(Cidade || (Cidade = {}));
exports.Cidade = Cidade;
class Produto {
}
class Pessoa {
    constructor(nome, idade, cidade) {
        this.toString = () => {
            return `${this.nome} tem ${this.idade} e mora em ${this.cidade}`;
        };
        this.maiorDe18 = () => {
            return this.idade >= 18;
        };
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}
exports.Pessoa = Pessoa;
