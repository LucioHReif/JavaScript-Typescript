/* Decoradores de Métodos
Um Decorador de Método é declarado imediatamente antes de uma declaração de método. O decorador é aplicado ao
Descritor de Propriedade para o método e pode ser usado para observar, modificar ou substituir uma definição de método.
Um decorador de método não pode ser usado em um arquivo de declaração, em uma sobrecarga ou em qualquer outro contexto
de ambiente (como em uma classe declare).

A expressão para o decorador de método será chamada como uma função em tempo de execução, com os três argumentos a seguir:
-> A função construtora da classe para um membro estático ou o protótipo da classe para um membro de instância.
-> O nome do membro
-> O Descritor de Propriedade para o membro.

NOTA: **O Descritor de Propriedade será indefinido se o destino do seu script for menor que ES5.**
Se o decorador do método retornar um valor, ele será usado como o Descritor de Propriedade para o método.
NOTA: **O valor de retorno é ignorado se o destino do script for menor que ES5.**

A seguir está um exemplo de um decorador de método (@enumeravel) aplicado a um método na classe Recepcionista:
class Recepcionista {
  recepcionista: string;
  constructor(mensagem: string) {
    this.recepcionista = mensagem;
  }
  @enumeravel(false)
  cumprimentar() {
    return "Olá, " + this.recepcionista;
  }
}

Podemos definir o decorador @enumeravel usando a seguinte declaração de função:
function enumeravel(valor: boolean) {
  return function (
    alvo: any,
    chaveDePropriedade: string,
    descritor: DescritorDePropriedade
  ) {
    descritor.enumeravel = valor;
  };
}

O decorador @enumeravel(false) aqui é uma fábrica de decoradores. Quando o decorador @enumeravel(false) é chamado,
ele modifica a propriedade enumeravel do descritor de propriedade.          */

function decorador(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  return 'qualquer coisa';
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    @decorador idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
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
