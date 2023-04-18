//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);

// Estrutura do método Splice
// nomes.splice(índice atual, delete, add elementos (Ex: "elem1", "elem2", "elem3"));
// o primeiro seleciona de qual indice se quer trabalhar, dps vem o que quer deletar e por fim,
// o que se quer adicionar dentro do array

// POP
const removidos = nomes.splice(-1, 1); // remove o ultimo item
console.log(nomes, removidos);

// SHIFT
const removidos2 = nomes.splice(0, 1); // remove o primeiro item
console.log(nomes, removidos2);

// UNSHIFT
nomes.splice(0, 0, 'Otávio'); // adiciona item no final do array
console.log(nomes);

// PUSH
nomes.splice(nomes.length, 0, 'Luiz'); // adiciona item no final do array
console.log(nomes);


