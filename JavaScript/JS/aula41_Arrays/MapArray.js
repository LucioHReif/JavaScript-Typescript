// Map --> modifica valores dos indices

// Dobre os números
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2); //dobra o valor de cada item dentro do array
console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome); //pega apenas o nome
const idades = pessoas.map(obj => ({ idade: obj.idade })); //pega apenas a idade

const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice; //adiciona um id a cada objeto dentro da array
  return newObj;
});

console.log(nomes);
console.log(idades);
console.log(comIds);