/* --> Composição de Decoradores
Vários decoradores podem ser aplicados a uma declaração, como nos exemplos a seguir:
Em uma única linha: @f @g x
Em diversas linhas:
@f
@g
x

Quando vários decoradores se aplicam a uma única declaração, sua avaliação é semelhante a composição de funções em matemática.
Neste modelo, ao compor as funções f e g, o composto resultante (f ∘ g)(x) é equivalente a f(g(x)).
Assim, as etapas a seguir são executadas ao avaliar vários decoradores em uma única declaração no TypeScript:
-> As expressões para cada decorador são avaliadas de cima para baixo.
-> Os resultados são chamados como funções de baixo para cima.

Se fôssemos usar fábrica de decoradores, podemos observar esta ordem de avaliação com o seguinte exemplo:
function f() {
  console.log("f(): avaliada");
  return function (
    alvo,
    chaveDePropriedade: string,
    descritor: descritorDePropriedade
  ) {
    console.log("f(): chamada");
  };
}
function g() {
  console.log("g(): avaliada");
  return function (
    alvo,
    chaveDePropriedade: string,
    descritor: descritorDePropriedade
  ) {
    console.log("g(): chamada");
  };
}
class C {
  @f()
  @g()
  method() {}
}

Que imprimiria esta saída no console:
f(): avaliada
g(): avaliada
g(): chamada
f(): chamada
------------------------------------------------------------------------------------------------------------------------------------------------
--> Avaliação de Decoradores
Há uma ordem bem definida para como os decoradores aplicados a várias declarações, dentro de uma classe, são aplicados:
- Decoradores de Parâmetros, seguido por Mêtodo, Decoradores de Acesso ou Decoradores de Propriedades são aplicados para cada membro da instância.
- Decoradores de Parâmetros, seguido por Mêtodo, Decoradores de Acesso ou Decoradores de Propriedades são aplicados para cada membro estático.
- Decoradores de Parâmetros são aplicados para o construtor.
- Decoradores de classe são aplicados para a classe.            */

interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
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
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador ' + param1);
    return target;
  };
}

@outroDecorador('O parâmetro do outro decorador') // 2
@inverteNomeECor('Outra coisa', 'Valor2') // 1
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
