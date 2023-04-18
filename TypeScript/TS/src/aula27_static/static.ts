/* STATIC NAS CLASSES DO TYPESCRIPT: Os membros estáticos de uma classe são acessados usando o nome da classe e a notação de ponto,
sem criar um objeto, por exemplo, <ClassName>.<StaticMember>. Os membros estáticos podem ser definidos usando a palavra-chave static .
Considere o exemplo a seguir de uma classe com propriedade estática.
class Circle {
    static pi: number = 3.14;
}
A classe acima Circleinclui uma propriedade estática pi. Isso pode ser acessado usando Circle.pi. O TypeScript gerará o seguinte
código JavaScript para a Circleclasse acima.

var Circle = (function () {
  function Circle() {
  }
  Circle.pi = 3.14;
  return Circle;
}());

O exemplo a seguir define uma classe com propriedade e método estático e como acessá-lo.
class Circle {
    static pi: number = 3.14;

    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5

A Circleclasse acima inclui uma propriedade estática e um método estático. Dentro do método estático calculateArea,
a propriedade estática pode ser acessada usando esta palavra-chave ou usando o nome da classe Circle.pi.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Agora, considere o exemplo a seguir com membros estáticos e não estáticos.
class Circle {
    static pi = 3.14;
    pi = 3;
}
Circle.pi; // returns 3.14
let circleObj = new Circle();
circleObj.pi; // returns 3

Como você pode ver, campos estáticos e não estáticos com o mesmo nome podem existir sem nenhum erro. O campo estático será
acessado usando a notação de ponto e o campo não estático pode ser acessado usando um objeto.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Vejamos outro exemplo: barras estáticas e não estáticas
class Circle {
    static pi = 3.14;

    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number):number {
        return 2 * Circle.pi * radius;
    }
}
Circle.calculateArea(5); // returns 78.5
let circleObj = new Circle();
circleObj.calculateCircumference(5) // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this

No exemplo acima, a Circleclasse inclui um método estático calculateAreae um método não estático calculateCircumference.
Como você pode ver, o campo estático pipode ser acessado no método estático usando this.pie no método não estático (instância) usando Circle.pi.      */

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda', 30, '123.456.798-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
