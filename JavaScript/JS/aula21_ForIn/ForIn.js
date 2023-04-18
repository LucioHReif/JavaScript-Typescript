// For in -> lê os índices ou chaves do objeto
//                 0       1      2
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
};

for (let chave in pessoa) {  // cria variavel chave que será atribuida à const pessoas
  console.log(chave, pessoa[chave]);  // chave/atributo e o valor correspondente
}

/*
const frutas = ['Pera', 'Maçã', 'Uva'];
for (let index in frutas) {
console.log(frutas[index]);
}

for (let i = 0; i < frutas.length; i++) {
console.log(frutas[i]);
}  */