/*  TypeScript é uma linguagem tipada, onde podemos especificar o tipo das variáveis, parâmetros de função
e propriedades do objeto. Podemos especificar o tipo usando :Typeapós o nome da variável, parâmetro ou propriedade.
Pode haver um espaço após os dois pontos. TypeScript inclui todos os tipos primitivos de JavaScript - número, string e booleano.

Cada variável é declarada com seu tipo de dados. Estas são anotações de tipo. Você não pode alterar o valor usando um tipo
de dados diferente do tipo de dados declarado de uma variável. Se você tentar fazer isso, o compilador TypeScript mostrará um erro.
Isso ajuda a detectar erros de JavaScript. Por exemplo, se você atribuir uma string a uma idade variável ou a um número para nomear ocorrerá um erro.

As anotações de tipo são usadas para impor a verificação de tipo. Não é obrigatório no TypeScript usar anotações de tipo.
No entanto, as anotações de tipo ajudam o compilador na verificação de tipos e ajudam a evitar erros ao lidar com tipos de dados.
Também é uma boa maneira de escrever código para facilitar a leitura e manutenção por futuros desenvolvedores trabalhando em seu código.  */

/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
//let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz'
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;
