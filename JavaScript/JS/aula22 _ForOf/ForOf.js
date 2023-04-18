
const nomes = ['Carlos', 'Jack', 'Kayn']
// For clássico - Geralmente com iteráveis (array ou strings)
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
} console.log('-----------');
//------------------------------------------------------------------------------

// For in - Retorna o índice ou chave (string, array ou objetos)
for (let i in nomes) {
  console.log(nomes[i]);
} console.log('-----------');
//------------------------------------------------------------------------------

// For of - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nomes) {
  console.log(valor);
} console.log('-----------');

nomes.forEach(function (valor, indice, array) {  // pega o objeto, o indice do objeto e o array completo
  console.log(valor, indice, array);
});