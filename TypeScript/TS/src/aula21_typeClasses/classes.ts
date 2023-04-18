/* Classes em Typescript

Propriedades do Parâmetro
O TypeScript fornece uma maneira conveniente de definir membros de classe no construtor, adicionando um modificador de visibilidade ao parâmetro.
class Person {
  // nome é uma variável de membro privada
  public constructor(private name: string) {}
  public getName(): string {
    return this.name;
  }
}
const person = new Person("Jane");
console.log(person.getName());
--------------------------------------------------------------------------------------------------------------------------------------------------
Somente leitura
Semelhante aos arrays, a readonlypalavra-chave pode impedir que os membros da classe sejam alterados.
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // o nome não pode ser alterado após esta definição inicial, que deve estar em sua declaração ou no construtor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
const person = new Person("Jane");
console.log(person.getName());
--------------------------------------------------------------------------------------------------------------------------------------------------
Herança: Implementos
As interfaces (abordadas aqui ) podem ser usadas para definir o tipo que uma classe deve seguir por meio da implementspalavra-chave.
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
Uma classe pode implementar várias interfaces listando cada uma delas após implements, separadas por uma vírgula da seguinte forma:
class Rectangle implements Shape, Colored {
--------------------------------------------------------------------------------------------------------------------------------------------------
Herança: Estende
As classes podem se estender por meio da extendspalavra-chave. Uma classe só pode estender uma outra classe.
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
// getArea é herdado de Rectangle
}
--------------------------------------------------------------------------------------------------------------------------------------------------
Sobrepor
Quando uma classe estende outra classe, ela pode substituir os membros da classe pai com o mesmo nome.
Versões mais recentes do TypeScript permitem marcar isso explicitamente com a overridepalavra-chave.
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
// usar protected para esses membros permite o acesso de classes que se estendem dessa classe, como Square
  public constructor(protected readonly width: number, protected readonly height: number) {}
  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // este toString substitui o toString do Retângulo
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}
Por padrão, a overridepalavra-chave é opcional ao substituir um método e apenas ajuda a evitar a substituição acidental de um método que não
existe. Use a configuração noImplicitOverridepara forçá-lo a ser usado ao substituir.
--------------------------------------------------------------------------------------------------------------------------------------------------
Classes abstratas
As classes podem ser escritas de forma a permitir que sejam usadas como uma classe base para outras classes sem ter que implementar todos os membros.
Isso é feito usando a abstractpalavra-chave. Os membros que não foram implementados também usam a abstractpalavra-chave.
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
Classes abstratas não podem ser instanciadas diretamente, pois não possuem todos os seus membros implementados.
--------------------------------------------------------------------------------------------------------------------------------------------------
Existem três modificadores de visibilidade principais no TypeScript:
public- (padrão) permite acesso ao membro da classe de qualquer lugar
private- só permite acesso ao membro da classe de dentro da classe
protected- permite acesso ao membro da classe de si mesmo e de quaisquer classes que o herdem, o que é abordado na seção de herança abaixo
*/

export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    // o método construtor irá criar o nosso objeto com as propriedades necessárias
    // Assim, quando for necessário instanciar (dar valor às propriedades) um objeto Empresa, vamos passar os dados das propriedades
    this.nome = nome; // o ‘this’ é usado para referenciar que são as propriedades da classe.
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
