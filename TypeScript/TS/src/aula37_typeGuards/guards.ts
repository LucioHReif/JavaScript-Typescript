/* O type Guard é usado para determinar o tipo de uma variável, geralmente dentro de um bloco condicional ou funcional. Geralmente pegam a variável
e retornam um valor booleano ou o tipo de variável. Os protetores de tipo permitem que você diga ao compilador TypeScript para inferir um determinado
tipo para uma variável em um contexto específico, garantindo que o tipo de um argumento seja o que você diz que é.
Assim como a detecção de recursos, os protetores de tipo são frequentemente usados para limitar um tipo e permitir que você identifique os protótipos,
métodos e atributos adequados de um valor. Como resultado, o manuseio desse valor tornou-se simples para o usuário.
Os type Guards definidos pelo usuário podem ser criados no TypeScript, mas também possuem operadores integrados como 'typeof', 'in' e o operador 'instanceof'.

--> Operador typeOf - é usado para obter o tipo da variável. De acordo com o tipo da variável, ela retorna os valores como −
Número, Corda, booleano, Objeto, Bigint, Símbolo, Função, Indefinido.
Sintaxe: typeof nome_variavel

--> Exemplo
No exemplo a seguir, usaremos a proteção de tipo 'typeof' no TypeScript. Nós declaramos quatro variáveis dos tipos 'number', 'string', 'boolean' e 'object'.
Depois disso, registramos o tipo de variável no console usando o operador 'typeof' do TypeScript.
let my_number: number = 123
let my_string: string = 'Tutorialspoint'
let my_boolean: boolean = true
let my_object: { id: number } = { id: 1 }

console.log('type of my_number variable is: ' + typeof my_number)
console.log('type of my_string variable is: ' + typeof my_string)
console.log('type of my_boolean variable is: ' + typeof my_boolean)
console.log('type of my_object variable is: ' + typeof my_object)

--> Ao compilar, ele gerará o seguinte código JavaScript:
var my_number = 123;
var my_string = 'Tutorialspoint';
var my_boolean = true;
var my_object = { id: 1 };
console.log('type of my_number variable is: ' + typeof my_number);
console.log('type of my_string variable is: ' + typeof my_string);
console.log('type of my_boolean variable is: ' + typeof my_boolean);
console.log('type of my_object variable is: ' + typeof my_object);

--> Resultado:
type of my_number variable is: number
type of my_string variable is: string
type of my_boolean variable is: boolean
type of my_object variable is: object
--------------------------------------------------------------------------------------------------------------------------------------------------------------
Operador IN
A proteção de tipo 'in' determina se um objeto contém um atributo específico, que é usado para distinguir entre tipos distintos. Normalmente retorna um valor
booleano, indicando se a propriedade está presente no objeto. É utilizado por suas características de estreitamento.
Sintaxe: property_name in object_name

--> Exemplo
No exemplo a seguir, usaremos a proteção de tipo 'in' no TypeScript. Declaramos três objetos que consistem em propriedades diferentes. Usamos o tipo de
proteção 'in' para verificar se uma propriedade necessária existe no objeto. Podemos até verificar se uma propriedade contém outra propriedade ou se não a
está usando. No 'obj3', verificamos se a propriedade de um objeto contém outra propriedade ou não.
let obj1: { id: number; name: string } = { id: 1, name: 'Tutorialspoint' }
let obj2: { name: string; roll: number } = { name: 'XYZ', roll: 12 }
let obj3: { id: number; marks: { english: number; math: number } } = {
   id: 101,
   marks: {
      math: 90,
      english: 80,
   },
}
console.log('Is name is in obj1? => ' + ('name' in obj1))
console.log('Is id is in obj2? => ' + ('id' in obj2))
console.log('Is marks is in obj3? => ' + ('marks' in obj3))
console.log('Is math is in obj3.marks? => ' + ('math' in obj3.marks))

--> Ao compilar, ele gerará o seguinte código JavaScript:
var obj1 = { id: 1, name: 'Tutorialspoint' };
var obj2 = { name: 'XYZ', roll: 12 };
var obj3 = {
   id: 101,
   marks: {
      math: 90,
      english: 80
   }
};
console.log('Is name is in obj1? => ' + ('name' in obj1));
console.log('Is id is in obj2? => ' + ('id' in obj2));
console.log('Is marks is in obj3? => ' + ('marks' in obj3));
console.log('Is math is in obj3.marks? => ' + ('math' in obj3.marks));

--> Resultado:
Is name is in obj1? => true
Is id is in obj2? => false
Is marks is in obj3? => true
Is math is in obj3.marks? => true
--------------------------------------------------------------------------------------------------------------------------------------------------------------
Operador instanceOf
O 'instanceof' é um protetor de tipo interno usado para determinar se um valor é uma instância de uma função ou classe de construtor específica. Podemos usar
essa proteção de tipo para determinar o tipo de instância testando se um objeto ou valor é derivado de uma classe.
Sintaxe: object_name instanceof class_name

--> Exemplo
No exemplo a seguir, usaremos a proteção de tipo 'instanceof' no TypeScript. Nós declaramos uma classe 'Pai' e uma classe filha, 'Filho'. Declaramos um objeto
da classe 'Filho' e usamos o operador 'instanceof' para encontrar o objeto que pertence a qual classe.
class Parent {
   id: number
   constructor(id: number) {
      this.id = id
   }
}
class Child extends Parent {
   id: number
   name: string

   constructor(id: number, name: string) {
      super(id)
      this.name = name
   }
}
let child = new Child(101, 'ABC')
console.log('child instanceof Child => ' + (child instanceof Child))
console.log('child instanceof Parent => ' + (child instanceof Parent))

--> Ao compilar, ele gerará o seguinte código JavaScript:
var __extends = (this && this.__extends) || (function () {
   var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
         ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
         function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
   };
class Parent {
   id: number
   constructor(id: number) {
      this.id = id
   }
}
class Child extends Parent {
   id: number
   name: string

   constructor(id: number, name: string) {
      super(id)
      this.name = name
   }
}
let child = new Child(101, 'ABC')
console.log('child instanceof Child => ' + (child instanceof Child))
console.log('child instanceof Parent => ' + (child instanceof Parent))

--> Ao compilar, ele gerará o seguinte código JavaScript:
   return function (d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
   };
})();
var Parent = /* @class / (function () {
  function Parent(id) {
    this.id = id;
 }
 return Parent;
}());
var Child = /* @class / (function (_super) {
 __extends(Child, _super);
 function Child(id, name) {
    var _this = _super.call(this, id) || this;
    _this.name = name;
    return _this;
 }
 return Child;
}(Parent));
var child = new Child(101, 'ABC');
console.log('child instanceof Child => ' + (child instanceof Child));
console.log('child instanceof Parent => ' + (child instanceof Parent));

--> Resultado
child instanceof Child => true
child instanceof Parent => true        */

export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo = 'pessoa' as const;
  constructor(public nome: string) {}
}

export function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'rosa' });
