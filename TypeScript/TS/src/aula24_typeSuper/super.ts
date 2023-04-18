/* SUPER em classes no Typescript
A palavra-chave super é usada para acessar propriedades em um literal de objeto ou [[Prototype]] da classe,
ou invocar o construtor de uma superclasse. As expressões super.prop e super[expr] são válidas em qualquer
definição de método em classes e objetos literais. A expressão super(...args) é válida em construtores de classe.

Descrição
A palavra-chave super pode ser usada de duas maneiras: como uma "chamada de função" (super(...args)) ou como uma
"pesquisa de propriedade" (super.prop e super[expr]). Observação: super é uma palavra-chave e essas são construções
sintáticas especiais. super não é uma variável que aponta para o objeto protótipo. A tentativa de ler o próprio super é um SyntaxError.

const child = {
  myParent() {
    console.log(super); // SyntaxError: 'super' keyword unexpected here
  },
};

No corpo do construtor de uma classe derivada (com extends), a palavra-chave super pode aparecer como uma "chamada de função" (super(...args)),
que deve ser chamada antes que a palavra-chave this seja usada e antes que o construtor retorne . Ele chama o construtor da classe pai e liga
os campos públicos da classe pai, após o que o construtor da classe derivada pode acessar e modificar isso.

O formulário "property lookup" pode ser usado para acessar métodos e propriedades de um objeto literal ou de uma classe [[Prototype]].
Dentro do corpo de uma classe, a referência de super pode ser o próprio construtor da superclasse ou o protótipo do construtor, dependendo se o
contexto de execução é a criação da instância ou a inicialização da classe. Consulte a seção Exemplos para obter mais detalhes.

Observe que a referência de super é determinada pela classe ou objeto literal em que super foi declarado, não pelo objeto no qual o método é chamado.
Portanto, desvincular ou revincular um método não altera a referência de super nele (embora alterem a referência de this).
Ao definir propriedades por meio de super, a propriedade é definida neste lugar.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Usando super nas classes
Aqui super() é chamado para evitar a duplicação das partes do construtor que são comuns entre Rectangle e Square.

class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; //ReferenceError, super precisa ser chamado primeiro!

    // Aqui, ele chama o construtor da classe pai com comprimentos
    // fornecido para a largura e altura do Retângulo
    super(length, length);

    // Nota: Em classes derivadas, super() deve ser chamado antes de você
    // pode usar 'this'. Omitir isso causará um erro de referência.
    this.name = "Square";
  }
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Chamando super métodos estáticos

class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription();  // 'I have 4 sides which are all equal'
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Acessando super na declaração de campo de classe
A referência de super depende se o campo atual é um campo de instância ou um campo estático.

class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField; // 90
}

Observe que os campos de instância são definidos na instância em vez do protótipo do construtor, portanto, você não pode usar super para
acessar o campo de instância de uma superclasse.

class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
Aqui, extendedField é indefinido ao invés de 10, porque baseField é definido como uma propriedade própria da instância Base, ao invés de
Base.prototype. super, neste contexto, apenas procura propriedades em Base.prototype, porque esse é o [[Prototype]] de Extended.prototype.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Excluir propriedades do super gerará um erro
Você não pode usar o operador delete e super.prop ou super[expr] para excluir uma propriedade da classe pai — isso lançará um ReferenceError.

class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}
new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Usando super.prop em objetos literais
Super também pode ser usado na notação do inicializador de objeto. Neste exemplo, dois objetos definem um método. No segundo objeto, super
chama o método do primeiro objeto. Isso funciona com a ajuda de Object.setPrototypeOf() com o qual podemos definir o protótipo de obj2 para
obj1, de modo que super seja capaz de encontrar method1 em obj1.

const obj1 = {
  method1() {
    console.log("method 1");
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // Logs "method 1"
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Os métodos que lêem super.prop não se comportam de maneira diferente quando vinculados a outros objetos
Acessar super.x se comporta como Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this), o que significa que a propriedade é sempre procurada
no protótipo do literal de objeto/declaração de classe, e desvincular e revincular um método não t alterar a referência de super.

class Base {
  baseGetX() {
    return 1;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}

const e = new Extended();
console.log(e.getX()); // 1
const { getX } = e;
console.log(getX()); // 1

O mesmo acontece em literais de objeto.
const parent1 = { prop: 1 };
const parent2 = { prop: 2 };

const child = {
  myParent() {
    console.log(super.prop);
  },
};

Object.setPrototypeOf(child, parent1);
child.myParent(); // Logs "1"

const myParent = child.myParent;
myParent(); // Still logs "1"

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // Still logs "1"

Apenas redefinir toda a cadeia de herança mudará a referência de super.
class Base {
  baseGetX() {
    return 1;
  }
  static staticBaseGetX() {
    return 3;
  }
}
class AnotherBase {
  baseGetX() {
    return 2;
  }
  static staticBaseGetX() {
    return 4;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
  static staticGetX() {
    return super.staticBaseGetX();
  }
}
const e = new Extended();
// Redefine a herança da instância
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // Registra "2" em vez de "1", porque a cadeia de protótipos foi alterada
console.log(Extended.staticGetX()); // Ainda registra "3", porque ainda não modificamos a parte estática
// Redefine a herança estática
Object.setPrototypeOf(Extended, OutraBase);
console.log(Extended.staticGetX()); // Agora registra "4"
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Chamando métodos do super
Ao chamar super.prop como uma função, o valor this dentro da função prop é o this atual, não o objeto para o qual super aponta. Por exemplo,
a chamada super.getName() registra "Extended", apesar do código parecer equivalente a Base.getName().

class Base {
  static getName() {
    console.log(this.name);
  }
}
class Extended extends Base {
  static getName() {
    super.getName();
  }
}
Extended.getName(); // Logs "Extended"
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Definir super.prop define a propriedade neste lugar
Definir propriedades de super, como super.x = 1, se comporta como Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this).
Este é um dos casos em que entender super como simplesmente "referência do objeto protótipo" é insuficiente, porque na verdade define a propriedade this.

class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true

super.x = 1 procurará o descritor de propriedade de x em A.prototype (e invocará os setters definidos lá), mas o valor this será definido como this,
que é b neste contexto. Você pode ler Reflect.set para obter mais detalhes sobre o caso em que o alvo e o receptor diferem. Isso significa que, enquanto
os métodos que recebem super.prop geralmente não são suscetíveis a alterações no contexto this, aqueles que definem super.prop são.

Reutilizando as mesmas declarações acima
const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
No entanto, super.x = 1 ainda consulta o descritor de propriedade do objeto protótipo, o que significa que você não pode reescrever propriedades
não graváveis e os setters serão invocados.

class X {
  constructor() {
    // Create a non-writable property
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // Cannot overwrite the value.
  }
}

const y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1                         */

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto(); //pra acessar a super classe
    return result + ' HEYYYYYYYY!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00', '0001');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
