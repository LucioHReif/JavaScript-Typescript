/* eslint-disable prettier/prettier */
/* Os quatro pilares da programação orientada a objetos são:
Abstração
Encapsulamento
Herança
Polimorfismo
-----------------------------------------------------------------------------------------------------------------------------------------------------------
***** Abstração na Programação Orientada a Objetos *****
Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento do programa.

export class Pessoa {
  private nome : string;
  private sobrenome : string;

  constructor (nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

Um bom exemplo para entender a Abstração é: imagine se você estivesse criando uma máquina para fazer café para seus usuários. Pode haver duas abordagens:
--> Como criá-la com abstração
Ter um botão escrito "Fazer café"

--> Como criá-la sem abstração
Ter um botão escrito "Adicionar água fria à chaleira"
Ter um botão escrito "Ferver a água"
Ter um botão escrito "Adicionar uma cápsula de café"
Ter um botão escrito "Passar a água pela cápsula de café"
Além de vários outros botões para completar o processo

A primeira abordagem abstrai toda a lógica da máquina. A segunda abordagem força o usuário a entender como fazer café e essencialmente fazer o seu próprio.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
***** Encapsulamento na Programação Orientada a Objetos *****
Visa ocultar partes internas de um objeto e exibir apenas o necessário para uso externo.
export class Control {
  constructor (private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }

  public turnOff(): void {
    this.powerStatus = false;
  }

  public getStatus(): boolean {
    return this.powerStatus;
  }
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------
***** Herança na Programação Orientada a Objetos *****
Visa passar características de um objeto para ourto.
export abstract class Animal {
  constructor(public nome: string) {}
  abstract makeNoise(): void;
}
export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.nome} está fazendo AU AU...`)
  }
}
export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.nome} está fazendo MIAU...`)
  }
}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
***** Polimorfismo na Programação Orientada a Objetos *****
Polimorfo significa ser capaz de assumir diferentes formas.
class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}
const dog = new Dog('Tina');
const cat = new Cat('Suzy');
const animalSounds = AnimalSounds();
animalSounds.playSound(dog);  //Tina está fazendo AU AU
animalSounds.playSound(cat);  //Suzy está fazendo MIAU               */
