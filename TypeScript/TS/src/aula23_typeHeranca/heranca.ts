/* HERANÇA COM CLASSES NO TYPESCRIPT

Herança única no TypeScript: Na herança única, as propriedades e o comportamento da classe base podem ser herdados em
no máximo uma classe derivada. É usado para adicionar nova funcionalidade à classe já implementada.

Exemplo: Cria-se uma pessoa como uma classe base e usando herança única implementando Professor como uma classe derivada.
// Base class
class Person {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
}
// Deriva da classe Teacher
class Teacher extends Person {
  Payment: number;
  constructor(name: string, payment: number) {
    super(name);
    this.Payment = payment;
  }
  display(): void {
    console.log("Teacher's Name: " + this.Name);
    console.log("Teacher's Payment " + this.Payment);
  }
}
// Cria objeto
let obj = new Teacher("GeeksforGeeks", 8500000);
obj.display();

Saída:
Teacher's Name: GeeksforGeeks
Teacher's Payment 8500000
---------------------------------------------------------------------------------------------------------------------------------------------------------
2. Herança de vários níveis:
Na herança de vários níveis, a classe derivada atua como a classe base para outra classe derivada. A classe derivada recém-criada
adquire as propriedades e o comportamento de outras classes básicas.

Exemplo: Cria-se um Vehicle como uma classe base e um Car como uma subclasse que deriva a nova classe chamada
carModel e a classe carModel adquire todos os recursos da classe Vehicle e Car.
// Base class
class Vehicle {
  Type(): void {
    console.log("Car");
  }
}
// Herda de Vehicle
class Car extends Vehicle {
  Brand(): void {
    console.log("ABC");
  }
}
// Herda todas as propriedades da classe de Vehicle e Car
class carModel extends Car {
  Model(): void {
    console.log("ABC2021");
  }
}

// Object creation
let obj = new carModel();
obj.Type();
obj.Brand();
obj.Model();

Saída:
Car
ABC
ABC2021      */

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
  getNomeCompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

/* Outro exmplo pratico de herança de classes no Typescript:
Um Estudante é um Individuo
Um Funcionario é um Individuo
Então a base classe é Individuo e as classes derivadas são Estudante e Funcionario. O primeiro é também chamado de superclasse e os segundos são subclasses.

class Individuo {
  nome: string;
  constructor(oNome: string) {
    this.nome = oNome;
  }
}

Agora, para herdarmos da base classe, usamos a palavra-chave extends logo após o nome dela. Depois segue com o nome da classe derivada e
adicionamos propriedades e métodos específicos para cada subclasse. Por exemplo, um Estudante tem uma disciplina de estudo e um funcionário tem um salario.
Ambas as sub-classes irão herdar a propriedade nome e o constructor da superclass Individuo.

class Estudante extends Individuo {
  disciplina: string;

  constructor(oNome: string, aDisciplina: string) {
    super(oNome);
    this.disciplina = aDisciplina;
  }
}

class Funcionario extends Individuo {
  salario: number;

  constructor(oNome: string, oSalario: number) {
    super(oNome);
    this.salario = oSalario;
  }
}
No exemplo acima, precisamos adicionar um novo constructor à cada classe derivada para poder iniciar as propriedades específicas de cada classe.
Note que podemos reutilizar o código do constructor da base classe Individuo com a chamada de super. É importante ressaltar que super deve ser
chamado para iniciar os valores compartilhados através da base classe e que não se deve referenciar this. no corpo do constructor antes da chamada de super().

Vamos testar nossas classes:
let fJoao: Funcionario = new Funcionario("Joao", 123);
let eAna: Estudante = new Estudante("Ana", "Arquitetura");
Note que também podemos criar uma variável do tipo da base classe e ainda armazenar tanto um Estudante como um Funcionario:
let individuo: Individuo = fJoao;
individuo = eAna;

O código acima funciona porque um Funcionario é um Individuo e um Estudante também é um Individuo.
*/
