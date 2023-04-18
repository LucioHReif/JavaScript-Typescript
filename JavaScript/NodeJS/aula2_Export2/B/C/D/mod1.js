module.exports = class Cachorro { //classe que será exportada
    constructor(nome) { //propriedade construtora
      this.nome = nome; //declara que a propriedade é dessa classe
    }
  
    latir() { //metodo
      console.log(`${this.nome} está fazendo au au`); // busca o nome e exibe a mensagem
    }
  };