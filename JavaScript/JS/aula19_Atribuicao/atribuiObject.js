// Atribuição via desestruturação
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

const { nome, sobrenome, ...resto } = pessoa;  //atribui valores à const pessoa
console.log(nome, resto);