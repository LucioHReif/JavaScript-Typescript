/* GENERICS EM TYPE ALIAS
Exemplo
type ListType<T> = {elements:T[]};
let numList : ListType<number> = {elements: [1,2,3,4]};
console.log(numList);

--> Output
{ elements: [ 1, 2, 3, 4 ] }

Generic em Type aliases podem ser usados com interseções e uniões também:
type Entity<E> = { id: number } & E;
interface Item {
    name: string;
    price: number;
}
let itemEntity: Entity<Item> = {id: 1, name: "Laptop", price: 150};
console.log(itemEntity);

--> Output
{ id: 1, name: 'Laptop', price: 150 }
-----------------------------------------------------------------------------------------------------------------------------------------------
GENERICS EM INTERFACES

interface IProcessor<T>
{
    result:T;
    process(a: T, b: T) => T;
}

A interface acima IProcessoré genérica porque usamos a variável de tipo <T>. A IProcessorinterface inclui o campo genérico resulte o método
genérico process()que aceita dois parâmetros de tipo genérico e retorna um tipo genérico.
--> Também podemos usar a Interface Genérica como Type Alias:

interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kv1: KeyPair<number, string> = { key:1, value:"Steve" }; // OK
let kv2: KeyPair<number, number> = { key:1, value:12345 }; // OK

Como você pode ver no exemplo acima, usando interface genérica como tipo, podemos especificar o tipo de dados de chave e valor.
--> A interface genérica também pode ser usada como o tipo de função.

interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};
function processNumKeyPairs(key:number, value:number):void {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value)
}
function processStringKeyPairs(key: number, value:string):void {
    console.log('processStringKeyPairs: key = '+ key + ', value = ' + value)
}
let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345
let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(1, "Bill"); //Output: processStringKeyPairs: key = 1, value = Bill

No exemplo acima, a interface genérica KeyValueProcessorinclui a assinatura genérica de um método sem o nome do método. Isso nos permitirá
usar qualquer função com a assinatura correspondente. O tipo genérico será definido no momento da criação de uma variável como
numKVProcessore strKVProcessor. O exemplo acima pode ser reescrito como abaixo:

interface KeyValueProcessor<T, U>
{
    (key: T, val: U): void;
};
function processKeyPairs<T, U>(key:T, value:U):void {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}
let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345
let strKVProcessor: KeyValueProcessor<number, string> = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill

Como você pode ver, declaramos um tipo de função numKVProcessorcomo let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;.
O número do tipo será usado como o tipo subjacente da função genérica processKeyPairs. Isso removerá a necessidade de definir funções separadas
para diferentes tipos de dados. A interface genérica também pode ser implementada na classe:

interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};
class kvProcessor implements IKeyValueProcessor<number, string>
{
    process(key:number, val:string):void {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill

No exemplo acima, os parâmetros de tipo genérico estão sendo definidos no momento da implementação de uma interface, por exemplo
class kvProcessor implements IKeyValueProcessor<number, string>, . Isso nos forçará a implementar o método process()com parâmetros de número e string.  */

interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(aluno1, aluno2, aluno3);

// Module mode
export default 1;
