/* Polimorfismo, o que é?
Na programação, o Polimorfismo remete a capacidade de alterar o comportamento de determinado método de uma
Super Classe em qualquer uma das Sub Classes que à herdem.

O que faz?
Como dito em sua definição, permite a alteração de comportamentos de um determinado método sem alterar sua
assinatura, dessa forma podemos ter o mesmo método com diferentes comportamentos a depender da classe que o implementa.
Um exemplo disso seria os métodos de ciclo de vida no React, ao trabalharmos o React com classes definimos os métodos
de ciclo de vida com diferentes comportamentos dependendo do componente, porém esses métodos continuam a ter o mesmo
nome, parâmetros e tipo de retorno.

Tipos
Existem diferentes tipos de Polimorfismo dentro da POO (Programação Orientada a Objetos),entre eles a Sobrescrita de Métodos com TypeScript.

Sobrescrita de Métodos, o que é?
É a alteração do comportamento padrão de um método da Super Classe para um comportamento mais específico de uma Sub Classe,
sendo que, se não o sobrescrevermos o método manterá o comportamento definido na Super Classe.

Sintaxe
Para sobrescrevermos um determinado método, tudo que precisamos fazer é instanciá-lo na Sub Classe e definirmos uma nova lógica.
Uma obervação, os parâmetros e o tipo de retorno do método a ser sobrescrito podem ser mantidos, no intuito de padronizar o método,
sendo a única alteração, a lógica interna.
class Person {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} se move`);
  }
}
class Runner extends Person {
  move() {
    console.log(`${this.name} corre`);
  }
}

class Lazy extends Person {
  move() {
    console.log(`${this.name} anda devagar`);
  }
}
const john = new Person('John');
const runnerJohn = new Runner('John');
const lazyJohn = new Lazy('John');
john.move();  // John se move
runnerJohn.move();  // John corre
lazyJohn.move();  // John anda devagar     */

export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setUrl('http://www.google.com').setMethod('post').send();
