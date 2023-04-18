/* Getters e Setters
As propriedades de classe podem ter getters e setters. Um getter permite calcular um valor para retornar como o valor da propriedade,
enquanto um setter permite executar código arbitrário quando a propriedade é definida.
Considere uma classe que representa um vetor bidimensional simples.

class Vector2 {
 constructor(public x: number, public y: number) {}
}
const v = new Vector2(1, 1);

Agora digamos que queremos dar a este vetor uma propriedade de comprimento. Uma opção é adicionar uma propriedade que é mantida
atualizada sempre que os valores x ou y mudam. Podemos monitorar os valores x e y usando um setter.
class Vector2 {
   private _x = 0;
   private _y = 0;

   length!: number;

   get x() { return this._x; }
   get y() { return this._y; }


   set x(value: number) {
       this._x = value;
       this.calculateLength();
   }

   set y(value: number) {
       this._y = value;
       this.calculateLength();
   }

   private calculateLength() {
       this.length = Math.sqrt(this._x ** 2 + this._y ** 2);
   }

   constructor(x: number, y: number) {
       this._x = x;
       this._y = y;
       this.calculateLength();
   }
}
const v = new Vector2(1, 1);
console.log(v.length);

Agora, sempre que x ou y muda, nosso comprimento é recalculado e pronto para ser usado. Embora isso funcione, esta não é
uma solução muito prática. Recalcular o comprimento do vetor sempre que uma propriedade muda pode resultar em muitos cálculos
desperdiçados. Se não estivermos usando a propriedade length em nosso código, não precisamos fazer esse cálculo!

Podemos criar uma solução mais elegante usando um getter. Usando um getter, definiremos uma nova propriedade somente leitura,
length, que é calculada em tempo real, somente quando solicitado.
class Vector2 {
 get length() {
   return Math.sqrt(this.x ** 2 + this.y ** 2);
 }

 constructor(public x: number, public y: number) {}
}
const v = new Vector2(1, 1);
console.log(v.length);

Isso é muito mais legal! Não apenas temos menos código geral aqui, mas nosso cálculo de comprimento só é executado quando precisamos dele.      */

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.798-00');
pessoa.cpf = '123.456.798-99';
console.log(pessoa.cpf);

/* Mais exemplos de getters/setters do TypeScript
Como você pode ver no código, os setters são úteis quando você deseja validar os dados antes de atribuí-los às propriedades.
Além disso, você pode executar lógica complexa. Veja a seguir como criar o getter e o setter de fullname

class Person {
    // ... other code
    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
Como funciona:
O método getter retorna a concatenação do nome e sobrenome.
O método setter aceita uma string como o nome completo com o formato: primeiro sobrenome e atribui a primeira parte à propriedade
do primeiro nome e a segunda parte à propriedade do sobrenome. Agora, você pode acessar o fullname setter e getter como uma propriedade de classe regular:

let person = new Person();
person.fullname = 'John Doe';
console.log(person.fullName);     */
