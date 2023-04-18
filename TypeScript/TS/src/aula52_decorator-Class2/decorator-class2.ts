/* Decoradores de Classes
O Decorador de Classe é declarado antes de uma declaração de classe. O decorador de classe é aplicado ao construtor
da classe e pode ser usado para observar, modificar ou substituir uma definição de classe. Um decorador de classe não
pode ser usado em um arquivo de declaração, ou em qualquer outro contexto de ambiente (como em uma classe declare).

A expressão para o decorador de classe será chamada como uma função em tempo de execução, com o construtor da classe
decorada como seu único argumento. Se o decorador da classe retornar um valor, ele substituirá a declaração da classe
pela função construtora fornecida.

NOTA: **Se você decidir retornar uma nova função de construtor, deve tomar cuidado para manter o protótipo original.
A lógica que aplica decoradores em tempo de execução não fará isso por você. **

A seguir está um exemplo de um decorador de classe (@selada) aplicado a classe Recepcionista
@selada
class Recepcionista {
  recepcionista: string;
  constructor(mensagem: string) {
    this.cumprimento = mensagem;
  }
  cumprimentar() {
    return "Olá, " + this.cumprimento;
  }
}

Podemos definir o decorador @selado usando a seguinte declaração de função:
function selado(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

Quando @selado é executado, ele irá selar o construtor e seu protótipo.
A seguir, temos um exemplo de como substituir o construtor.
function decoradorDeClasse<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    novaPropriedade = "nova propriedade";
    ola = "sobrepor";
  };
}
@decoradorDeClasse
class Recepcionista {
  propriedade = "propriedade";
  ola: string;
  constructor(m: string) {
    this.ola = m;
  }
}
console.log(new Recepcionista("mundo"));
*/
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);

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

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
