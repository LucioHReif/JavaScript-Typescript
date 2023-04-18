/* Decoradores
Um Decorador é um tipo especial de declaração que pode ser anexado a uma declaração de classe, métodos, acessor,
propriedades, ou parâmetros. Decoradores usam a forma @expressão, onde expressão deve ser avaliada como uma função
que será chamada em tempo de execução com informações sobre a declaração decorada.

Tipos de decorators
Ao se desenvolver decorators é importante saber que existem vários tipos, esses tipos são determinados pelo alvo em
que está sendo aplicado, sendo que cada tipo tem suas particularidades e assinaturas diferentes. Atualmente os tipos existentes são:
- Class Decorator.
- Property Decorator.
- Method Decorator.
- Accessor Decorator.
- Parameter Decorator.

Por exemplo, dado o decorador @selado, podemos escrever a função selado da seguinte forma:
function selado(alvo) {
  // executa algo com o alvo...
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Exemplo conceitual
Este exemplo ilustra a estrutura do padrão de projeto Decorator. Ele se concentra em responder a estas perguntas:
De quais classes ele consiste?
Quais papéis essas classes desempenham?
De que maneira os elementos do padrão estão relacionados?

-> A interface base do componente define as operações que podem ser alteradas por decoradores.
interface Component {
    operation(): string;
}

-> Os Componentes Concretos fornecem implementações padrão das operações. Pode haver diversas variações dessas classes.
class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

-> A classe Decorator base segue a mesma interface dos outros componentes.
O objetivo principal desta classe é definir a interface de encapsulamento para todos os decoradores de concreto.
A implementação padrão do código de encapsulamento pode incluir um campo para armazenar um componente encapsulado e os meios para inicializá-lo.
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }
    public operation(): string {
        return this.component.operation();
    }
}     O decorador delega todo o trabalho ao componente envolvido.

-> Concrete Decorators chamam o objeto embrulhado e alteram seu resultado de alguma forma.
class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

-> Os decoradores podem executar seu comportamento antes ou depois da chamada para um objeto embrulhado.
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

-> O código cliente funciona com todos os objetos usando a interface Component. Essa forma como pode ficar independente das classes concretas
de componentes que trabalha com.
function clientCode(component: Component) {
    // ...
    console.log(`RESULT: ${component.operation()}`);
    // ...
}

-> Dessa forma, o código do cliente pode suportar componentes simples...
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

...bem como os decorados.
-> Observe como os decoradores podem agrupar não apenas componentes simples, mas também os outros decoradores também.
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);

Output.txt: Resultados da execução
Client: I've got a simple component:
RESULT: ConcreteComponent
Client: Now I've got a decorated component:
RESULT: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))       */

@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
