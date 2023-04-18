//  Atribuição via desestruturação (Arrays)
// ... rest, ... spread
//                 lista1     lista2     lista3
//                 0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]];
const [lista1, lista2, lista3, ...resto] = numeros2;  //atribui valores de cada array a uma lista, separados por virgula
console.log(lista1, lista2, lista3);                  // ...resto vale para todos os valores restantes
console.log(resto);
console.log(lista1[0], lista2[1], lista3[2]);
