// Retorne a soma do dobro de todos os pares
// Filter -> Filtrar pares
// Map -> Modifica os valores
// Reduce -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0) //seleciona os que são divisiveis por 2
console.log(`Os valores divisíveis por dois são: ${numerosPares}`);

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares2 = numeros2
.map(valor => valor * 2) //dobra os valores de cada indice
console.log(`O dobro de todos os valores fica: ${numerosPares2}`);

const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares3 = numeros3
.reduce((ac, valor) => ac + valor); //soma todos os indices
console.log(`A soma de todos os valores é: ${numerosPares3}` );