/* Decoradores de Parâmetros
Um Decorador de Parâmetro é declarado antes de uma declaração de parâmetro. O decorador de parâmetro é aplicado à
função para um construtor de classe ou declaração de método. Um decorador de parâmetro não pode ser usado em um
arquivo de declaração, uma sobrecarga ou em qualquer outro contexto de ambiente (como em uma classe declare).

A expressão para o decorador de parâmetro será chamada como uma função em tempo de execução, com os três argumentos a seguir:
-> A função construtora da classe para um membro estático ou o protótipo da classe para um membro de instância.
-> O nome do membro.
-> O índice ordinal do parâmetro na lista de parâmetros da função.

NOTA: **Um decorador de parâmetro só pode ser usado para observar que um parâmetro que foi declarado em um método.**
O valor de retorno do decorador de parâmetro é ignorado.

A seguir está um exemplo de um decorador de parâmetro (@obrigatorio) aplicado ao parâmetro de um membro da classe Recepcionista:
class Recepcionista {
  cumprimento: string;
  constructor(mensagem: string) {
    this.cumprimento = mensagem;
  }
  @validar
  cumprimentar(@obrigatorio nome: string) {
    return "Olá " + nome + ", " + this.cumprimento;
  }
}

Podemos então definir os decoradores @obrigatorio e @validar usando as seguintes declarações de função:
import "reflect-metadata";
const chaveDeMetodosNecessaria = Symbol("obrigatorio");
function obrigatorio(
  alvo: Object,
  chaveDePropriedade: string | symbol,
  indiceDeParametro: number
) {
  let parametrosNecessariosExistentes: number[] =
    Reflect.getOwnMetadata(chaveDeMetodosNecessaria, alvo, chaveDePropriedade) || [];
  parametrosNecessariosExistentes.push(indiceDeParametro);
  Reflect.defineMetadata(
    chaveDeMetodosNecessaria,
    parametrosNecessariosExistentes,
    alvo,
    chaveDePropriedade
  );
}
function validar(
  alvo: any,
  nomeDaPropriedade: string,
  descritor: DescritorDePropriedadeTipada<Function>
) {
  let método = descritor.value;
  descritor.value = function () {
    let parametrosObrigatorios: number[] = Reflect.getOwnMetadata(
      chaveDeMetodosNecessaria,
      alvo,
      nomeDaPropriedade
    );
    if (parametrosObrigatorios) {
      for (let indiceDeParametro of parametrosObrigatorios) {
        if (
          indiceDeParametro >= arguments.length ||
          arguments[indiceDeParametro] === undefined
        ) {
          throw new Error("Argumento obrigatório ausente.");
        }
      }
    }

    return method.apply(this, arguments);
  };
}

O decorador @obrigatorio adiciona uma entrada de metadados que marca o parâmetro como necessário. O decorador @validar então
envolve o método cumprimentar existente em uma função que valida os argumentos antes de invocar o método original.
NOTA: Este exemplo requer a biblioteca reflect-metadata.
---------------------------------------------------------------------------------------------------------------------------------------------------------
--> Metadados (biblioteca reflect-metadata)
Alguns exemplos usam a biblioteca reflet-metadata que adiciona um polyfill para uma API de metadados experimental.
Esta biblioteca ainda não faz parte do padrão ECMAScript (JavaScript). No entanto, assim que decoradores forem oficialmente adotados
como parte do padrão ECMAScript, essas extensões serão propostas para adoção.

Você pode instalar esta biblioteca via npm:
npm i reflect-metadata --save

O TypeScript inclui suporte experimental para a emissão de certos tipos de metadados para declarações que possuem decoradores.
Para habilitar, você deve definir a opção do compilador emitDecoratorMetadata na linha de comando ou em seu tsconfig.json:

-> Linha de Comando:
tsc --target ES5 --experimentalDecorators --emitDecoratorMetadata

-> tsconfig.json:
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}

Quando habilitado, contanto que a biblioteca reflet-metadata tenha sido importada, informações adicionais de tipo de
tempo de design serão expostas no tempo de execução.
Podemos ver isso em ação no seguinte exemplo:
import "reflect-metadata";
class Ponto {
  x: number;
  y: number;
}
class Linha {
  private _p0: Ponto;
  private _p1: Ponto;
  @validar
  set p0(valor: Ponto) {
    this._p0 = valor;
  }
  get p0() {
    return this._p0;
  }
  @validar
  set p1(valor: Ponto) {
    this._p1 = valor;
  }
  get p1() {
    return this._p1;
  }
}
function validar<T>(
  alvo: any,
  chaveDePropriedade: string,
  descritor: DescritorDePropriedadeTipada<T>
) {
  let set = descritor.set;
  descritor.set = function (valor: T) {
    let type = Reflect.getMetadata("design:type", alvo, chaveDePropriedade);
    if (!(valor instanceof type)) {
      throw new TypeError("Tipo inválido.");
    }
    set.call(alvo, valor);
  };
}

O compilador TypeScript injetará informações de tipo em tempo de design usando o decorador @Reflect.metadata.
Você pode considerá-lo o equivalente ao seguinte TypeScript:
class Linha {
  private _p0: Ponto;
  private _p1: Ponto;
  @validar
  @Reflect.metadata("design:type", Ponto)
  set p0(valor: Ponto) {
    this._p0 = valor;
  }
  get p0() {
    return this._p0;
  }
  @validar
  @Reflect.metadata("design:type", Ponto)
  set p1(valor: Ponto) {
    this._p1 = valor;
  }
  get p1() {
    return this._p1;
  }
}                           */

function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
