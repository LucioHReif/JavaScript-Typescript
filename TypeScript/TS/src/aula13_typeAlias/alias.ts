/* No TypeScript, os aliases de tipo criam definições de tipo que podem ser reutilizadas em todo o código.
Isso é diferente de uniões e interseções de tipo, onde as informações de tipo explícitas são usadas repetidamente.

--> Sintaxe
Aliases de tipo requerem a palavra-chave type e um nome. Eles podem ser criados de duas maneiras. Eles podem ser definidos como
um objeto que descreve os membros e seus respectivos tipos.
type myType = {
  memberOne: string;
  memberTwo: number;
}
let favoriteNum: myType = {"my favorite number is ", 42}

Eles também podem se referir a outros tipos conhecidos, como um tipo de união.
type myType = string | number;
let favoriteNum: myType = '42';

Posteriormente, sempre que o nome for usado, o TypeScript assumirá que isso se refere ao valor do alias. Type alias são
semelhantes a interfaces em termos de sintaxe e comportamento. No entanto, uma diferença fundamental é que uma interface
pode ter membros adicionados posteriormente, enquanto os aliases de tipo não podem ser alterados após serem definidos.

Type Aliases com Type Guards
Neste exemplo, o alias do tipo StringsIsh pode ser usado no lugar do tipo union com vários membros. Quando aplicado à função logAllStrings():

type StringsIsh = string | string[] | null | undefined;
function logAllStrings(values: StringsIsh) {
  if (values === null || typeof values === 'undefined') return;

  if (typeof values === 'string') {
    console.log(values);
  } else {
    values.forEach(logAllStrings);
  }
}
logAllStrings('hello'); // Ok
logAllStrings(['hello', 'world']); // Also Ok

O primeiro tipo de proteção verifica se os valores correspondem a nulo ou indefinido no alias de tipo StringIsh.
Em seguida, a instrução if/else verifica se há um caso base de valores do tipo string. Caso contrário, invoca recursivamente logAllStrings novamente.

Type alias com generics
Os aliases de tipo podem ser genéricos e podem conter qualquer descrição de tipo, incluindo:
- Primitivos
- Literais
- Tipos de objeto

O seguinte tipo Result<T> pode conter um valor, T, ou um objeto contendo o valor, { value: T }:
type Result<T> = T | { value: T };
let value: Result<string> = 'hello'; // Ok
let other: Result<string> = { value: 'world' }; // Also Ok   */

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; // OR
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
