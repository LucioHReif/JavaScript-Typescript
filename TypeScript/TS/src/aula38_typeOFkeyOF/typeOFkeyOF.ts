/* The typeof type operator
O JavaScript já possui um operador typeof que você pode usar em um contexto de expressão:
// Prints "string"
console.log(typeof "Hello world");

O TypeScript adiciona um operador typeof que você pode usar em um contexto de tipo para se referir ao tipo de uma variável ou propriedade:
let s = "hello";
let n: typeof s;
let n: string

Isso não é muito útil para tipos básicos, mas combinado com outros operadores de tipo, você pode usar typeof para expressar
convenientemente muitos padrões. Por exemplo, vamos começar examinando o tipo predefinido ReturnType<T>. Ele pega um tipo de
função e produz seu tipo de retorno:
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
type K = boolean

Se tentarmos usar ReturnType em um nome de função, veremos um erro instrutivo:
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;

'f' refere-se a um valor, mas está sendo usado como um tipo aqui. Será que quis dizer 'typeof f'?
Lembre-se de que valores e tipos não são a mesma coisa. Para se referir ao tipo que o valor f possui, usamos typeof:
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;

type P = {
    x: number;
    y: number;
}

Limitações
O TypeScript limita intencionalmente os tipos de expressões nas quais você pode usar typeof.
Especificamente, só é legal usar typeof em identificadores (ou seja, nomes de variáveis) ou suas propriedades.
Isso ajuda a evitar a armadilha confusa de escrever um código que você acha que está executando, mas não está:
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
',' expected.
-----------------------------------------------------------------------------------------------------------------------------------------------------------
The keyof type operator
O operador keyof pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves. O seguinte tipo P é o mesmo tipo que “x” | "s":
type Point = { x: number; y: number };
type P = keyof Point;
type P = keyof Point

Se o tipo tiver uma assinatura de índice de string ou número, keyof retornará esses tipos:
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
type A = number
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
type M = string | number

Observe que, neste exemplo, M é string | number — isso ocorre porque as chaves do objeto JavaScript são sempre convertidas para uma string, portanto,
obj[0] é sempre o mesmo que obj["0"].
-----------------------------------------------------------------------------------------------------------------------------------------------------------
KEYOF é uma palavra-chave no TypeScript que é usada para extrair o tipo de chave de um tipo de objeto.

KEYOF com chaves explícitas
Quando usado em um tipo de objeto com chaves explícitas, keyofcria um tipo de união com essas chaves.
interface Person {
  name: string;
  age: number;
}
// `keyof Person` cria um tipo de união de "nome" e "idade", outras strings não serão permitidas
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
-----------------------------------------------------------------------------------------------------------------------------------------------------------
KEYOF com assinaturas de índice para extrair o tipo de índice:
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolve para `string` aqui
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
*/

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('roxo', coresObj));
