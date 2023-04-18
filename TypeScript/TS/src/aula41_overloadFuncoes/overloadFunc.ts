/* OVERLOAD EM FUNÇÕES E MÉTODOS
1. A assinatura da função
Vamos considerar uma função que retorna uma mensagem de boas-vindas para uma determinada pessoa:
function greet(person: string): string {
  return `Hello, ${person}!`;
}
A função acima aceita 1 argumento do tipo string: o nome da pessoa.
Chamar a função é bem simples:
greet('World'); // 'Hello, World!'

E se você quiser tornar a função greet() mais flexível? Por exemplo, faça com que ele também aceite uma lista de pessoas para cumprimentar.
Essa função aceitaria uma string ou um array de strings como argumento, bem como retornaria uma string ou um array de strings.
Como anotar tal função? Existem 2 abordagens.
A primeira abordagem é direta e envolve modificar a assinatura da função diretamente, atualizando o parâmetro e os tipos de retorno.
Veja como o greet() fica depois de atualizar o parâmetro e os tipos de retorno:

function greet(person: string | string[]): string | string[] {
  if (typeof person === 'string') {
    return `Hello, ${person}!`;
  } else if (Array.isArray(person)) {
    return person.map(name => `Hello, ${name}!`);
  }
  throw new Error('Unable to greet');
}

Agora você pode invocar o greet() de 2 maneiras:
greet('World');          // 'Hello, World!'
greet(['Jane', 'Joe']); // ['Hello, Jane!', 'Hello, Joe!']

Atualizar a assinatura da função diretamente para suportar as múltiplas formas de invocação é a abordagem usual e boa.
No entanto, há situações em que você pode querer adotar uma abordagem alternativa e definir separadamente todas as maneiras pelas quais
sua função pode ser invocada. Essa abordagem é chamada de sobrecarga de função.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
2. O OVERLOAD (sobrecarga) de funções
A segunda abordagem é usar o recurso de sobrecarga de função. Eu o recomendo quando a assinatura da função é relativamente complexa
e tem vários tipos envolvidos. Colocar a sobrecarga de função na prática requer definir as chamadas assinaturas de sobrecarga e uma
assinatura de implementação. A assinatura de sobrecarga define os tipos de parâmetro e retorno da função e não possui um corpo.
Uma função pode ter várias assinaturas de sobrecarga: correspondendo às diferentes maneiras de invocar a função. A assinatura de
implementação, por outro lado, também possui os tipos de parâmetro e tipo de retorno, mas também um corpo que implementa a função.
Só pode haver uma assinatura de implementação. Vamos transformar a função greet() para usar a sobrecarga da função:

// Overload signatures
function greet(person: string): string;
function greet(persons: string[]): string[];

// Implementation signature
function greet(person: unknown): unknown {
  if (typeof person === 'string') {
    return `Hello, ${person}!`;
  } else if (Array.isArray(person)) {
    return person.map(name => `Hello, ${name}!`);
  }
  throw new Error('Unable to greet');
}
A função greet() tem 2 assinaturas de sobrecarga e uma assinatura de implementação.
Cada assinatura de sobrecarga descreve uma maneira pela qual a função pode ser invocada. No caso da função greet(), você pode chamá-la de 2 maneiras:
com uma string argumento ou com uma matriz de argumentos de strings. A função de assinatura de implementação function greet(person: unknown): unknown { ... }
contém a lógica de como a função funciona.
Agora, como antes, você pode invocar o greet() com os argumentos do tipo string ou array de strings:

greet('World');          // 'Hello, World!'
greet(['Jane', 'Joe']);  // ['Hello, Jane!', 'Hello, Joe!']
---------------------------------------------------------------------------------------------------------------------------------------------------------------
2.1 Overload de assinaturas são chamáveis
Embora a assinatura de implementação implemente o comportamento da função, ela não pode ser chamada diretamente.
Somente as assinaturas de sobrecarga podem ser chamadas.

greet('World');         // Overload signature chamavel
greet(['Jane', 'Joe']); // Overload signature chamavel
const someValue: unknown = 'Unknown';
greet(someValue);       // Implementação de assinatura não chamavel
No overload matches this call.
  Overload 1 of 2, '(person: string): string', gave the following error.
    Argument of type 'unknown' is not assignable to parameter of type 'string'.
  Overload 2 of 2, '(persons: string[]): string[]', gave the following error.
    Argument of type 'unknown' is not assignable to parameter of type 'string[]'.

No exemplo acima, você não pode chamar a função greet() com um argumento do tipo desconhecido (greet(someValue)), mesmo que a assinatura
da implementação aceite o argumento desconhecido.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
2.2 A assinatura da implementação deve ser geral
Esteja ciente de que o tipo de assinatura de implementação deve ser genérico o suficiente para incluir as assinaturas de sobrecarga.
Caso contrário, o TypeScript não aceitará a assinatura de sobrecarga como sendo incompatível.
Por exemplo, se você modificar o tipo de retorno da assinatura de implementação de desconhecido para string:

// Overload signatures
function greet(person: string): string;
function greet(persons: string[]): string[];
This overload signature is not compatible with its implementation signature.

// Implementation signature
function greet(person: unknown): string {
  // ...
  throw new Error('Unable to greet');
}

Então a assinatura de sobrecarga function greet(persons: string[]): string[] está marcado como incompatível com function greet(person: unknown): string.
O tipo de retorno string da assinatura de implementação não é geral o suficiente para ser compatível com o tipo de retorno string[] da assinatura de sobrecarga.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Method overloading (sobrecarga de metodo)
Nos exemplos anteriores, a sobrecarga de função foi aplicada a uma função regular. Mas você também pode sobrecarregar métodos!
Durante a sobrecarga de método, as assinaturas de sobrecarga e a assinatura de implementação agora fazem parte da classe.
Por exemplo, vamos implementar uma classe Greeter, com um método de sobrecarga greet():

class Greeter {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  // Overload signatures
  greet(person: string): string;
  greet(persons: string[]): string[];

  // Implementation signature
  greet(person: unknown): unknown {
    if (typeof person === 'string') {
      return `${this.message}, ${person}!`;
    } else if (Array.isArray(person)) {
      return person.map(name => `${this.message}, ${name}!`);
    }
    throw new Error('Unable to greet');
  }
}

A classe Greeter contém o método de sobrecarga greet(): 2 assinaturas de sobrecarga descrevendo como o método pode ser chamado e a
assinatura de implementação contendo a implementação adequada. Graças à sobrecarga de método, você pode chamar hi.greet() de 2 maneiras:
usando uma string ou usando um array de strings como argumento.

const hi = new Greeter('Hi');
hi.greet('Angela');       // 'Hi, Angela!'
hi.greet(['Pam', 'Jim']); // ['Hi, Pam!', 'Hi, Jim!']
---------------------------------------------------------------------------------------------------------------------------------------------------------------
4. Quando usar sobrecarga de função
A sobrecarga de função, quando usada da maneira correta, pode aumentar muito a usabilidade de funções que podem ser invocadas de várias maneiras.
Isso é especialmente útil durante o preenchimento automático: você lista todas as sobrecargas possíveis como registros separados.
No entanto, há situações em que eu recomendo não usar a sobrecarga de função, mas sim manter a assinatura da função.
Por exemplo, não use a sobrecarga de função para parâmetros opcionais:

// Not recommended
function myFunc(): string;
function myFunc(param1: string): string;
function myFunc(param1: string, param2: string): string;
function myFunc(...args: string[]): string {
  // implementation...
}

Usar os parâmetros opcionais na assinatura da função é mais simples e deve ser suficiente:
// OK
function myFunc(param1?: string, param2?: string): string {
  // implementation...
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------
5. Conclusão
A sobrecarga de função no TypeScript permite definir funções que podem ser chamadas de várias maneiras.
O uso de sobrecarga de função requer a definição das assinaturas de sobrecarga: um conjunto de funções com tipos de parâmetro e retorno, mas sem um corpo.
Essas assinaturas indicam como a função deve ser invocada. Além disso, você deve escrever a implementação adequada da função
(assinatura de implementação): os tipos de parâmetro e retorno, bem como o corpo da função. Observe que a assinatura de implementação não pode ser chamada.   */

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
