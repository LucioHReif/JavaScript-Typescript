class Pessoa { //cria classe Pessoa
    constructor(nome) {  //parametro nome
      this.nome = nome;
    }
  }
  
  const nome = 'Luiz';
  const sobrenome = 'Miranda';
  
  exports.nome = nome;  //exporta chave nome com o valor de nome (forma abreviada)
  module.exports.sobrenome = sobrenome; //exporta chave sobrenome com o valor de sobrenome (forma normal)
  exports.outraCoisa = 'Outra coisa';  // cria e exporta uma propriedade 
  this.Pessoa = Pessoa;
  console.log(exports); //mmostra tudo que foi exportado