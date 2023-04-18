// Array<T> - T[]
/*  O TypeScript oferece suporte a arrays, semelhante ao JavaScript. Existem duas maneiras de declarar um array:
1. Usando colchetes. Esse método é semelhante a como você declararia arrays em JavaScript.
let fruits: string[] = ['Apple', 'Orange', 'Banana'];

2. Usando um tipo de array genérico, Array<elementType>.
let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

Ambos os métodos produzem a mesma saída. Claro, você sempre pode inicializar um array como mostrado abaixo, mas não obterá
a vantagem do sistema de tipos do TypeScript.  -->  let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];

Arrays podem conter elementos de qualquer tipo de dados, números, strings ou até mesmo objetos. Arrays podem ser declarados e inicializados separadamente.
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

Um array em TypeScript pode conter elementos de diferentes tipos de dados usando uma sintaxe de tipo de matriz genérica, conforme mostrado abaixo.
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Acessando Elementos de Array:
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

Use o loop for para acessar os elementos da matriz, conforme mostrado abaixo.
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
for(var index in fruits)
{
    console.log(fruits[index]);  // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]); // output: Apple Orange Banana
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Métodos de Array do TypeScript
pop() -	Remove o último elemento da matriz e retorna esse elemento
push() -	Adiciona novos elementos ao array e retorna o novo tamanho do array
sort() -	Ordena todos os elementos do array
concat() -	Une dois arrays e retorna o resultado combinado
indexOf() -	Retorna o índice da primeira correspondência de um valor na matriz (-1 se não for encontrado)
copyWithin() - Copia uma sequência de elementos dentro do array
fill() -	Preenche a matriz com um valor estático do índice inicial fornecido até o índice final
shift() -	Remove e retorna o primeiro elemento do array
splice() -	Adiciona ou remove elementos do array
unshift() -	Adiciona um ou mais elementos ao início do array
includes() - Verifica se o array contém um certo elemento
join()	- Une todos os elementos do array em uma string
lastIndexOf() -	Retorna o último índice de um elemento no array
slice() -	Extrai uma seção do array e retorna o novo array
toString() -	Retorna uma representação de string do array
toLocaleString() -	Retorna uma string localizada representando o array

var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.pop()); //output: Orange
fruits.push('Papaya');
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango']
console.log(fruits.indexOf('Papaya'));//output: 2   */

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
