/* Tipos de métodos para objetos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
//---------------------------------------------------------------------------------------------
// ... (spread) --> Copia as propriedades, porém os valores atribuidos são diferentes
const produto1 = { nome: 'Caneca', preco: 1.8 };
const OutraCoisa = { ...produto1 };
OutraCoisa.nome = 'Copo';
OutraCoisa.preco = 2.0;
console.log(produto1);
console.log(OutraCoisa);
//---------------------------------------------------------------------------------------------
// Object.assign(des, any) --> basicamente igual ao spread
/* const produto1 = { nome: 'Caneca', preco: 1.8};
const OutraCoisa = Object.assign({}, produto);
OutraCoisa.nome = 'Copo';
OutraCoisa.preco = 2.0;
*/
//---------------------------------------------------------------------------------------------
// Object.getOwnPropertyDescriptor(o, 'prop') --> mostra a descrição/condição das propriedades
const produto2 = { nome: 'Vaso', preco: 5, material: 'porcelana' };
Object.defineProperty(produto2, 'nome', {   //define/altera valor das propriedades
  writable: false,      //mudou valor de true para false
  configurable: false   //mudou valor de true para false
});
console.log(Object.getOwnPropertyDescriptor(produto2));
//---------------------------------------------------------------------------------------------
// Object.values --> mostra apenas o valor das propriedades
const produto3 = { nome: 'Bolsa', preco: 10, material: 'Couro' };
console.log(Object.values(produto3));
//---------------------------------------------------------------------------------------------
// Object.entries --> mostra as chaves/propriedades e seus valores de forma separada
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {  // para tirar os colchetes
  console.log(valor[0], valor[1]);  //mostra prop. e valores sem colchetes
}