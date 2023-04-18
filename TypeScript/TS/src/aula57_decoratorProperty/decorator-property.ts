/* Decoradores de Propriedades
Um Decorador de Propriedade é declarado antes de uma declaração de propriedade. Um decorador de propriedade não
pode ser usado em um arquivo de declaração ou em qualquer outro contexto de ambiente (como em uma classe declare).

A expressão para o Decorador de Propriedade será chamada como uma função em tempo de execução, com os dois argumentos a seguir:
- A função construtora da classe para um membro estático ou o protótipo da classe para um membro de instância.
- O nome do membro.

NOTA: Um Descritor de Propriedade não é fornecido como um argumento para um decorador de propriedade devido a como os
decoradores de propriedade são inicializados no TypeScript. Isso ocorre porque não existe atualmente nenhum mecanismo
para descrever uma propriedade de instância ao definir membros de um protótipo e nenhuma maneira de observar ou modificar
o inicializador de uma propriedade. O valor de retorno também é ignorado. Dessa forma, um decorador de propriedade só pode
ser usado para observar que uma propriedade de um nome específico foi declarada para uma classe.

Podemos usar essas informações para registrar metadados sobre a propriedade, como no exemplo a seguir:
class Recepcionista {
  @formato("Olá, %s")
  cumprimento: string;
  constructor(mensagem: string) {
    this.cumprimento = mensagem;
  }
  cumprimentar() {
    let formatoString = obterFormato(this, "cumprimento");
    return formatoString.replace("%s", this.cumprimento);
  }
}

Podemos então definir o decorador @formato e as funções obterFormato usando as seguintes declarações de função:
import "reflect-metadata";
const formatoMetadataKey = Symbol("format");
function formato(formatoString: string) {
  return Reflect.metadata(formatoMetadataKey, formatoString);
}
function obterFormato(alvo: any, chaveDePropriedade: string) {
  return Reflect.getMetadata(formatoMetadataKey, alvo, chaveDePropriedade);
}

O decorador @formato (" Olá,% s ") aqui é uma fábrica de decoradores. Quando @formato (" Olá,% s ") é chamado, ele adiciona
uma entrada de metadados para a propriedade usando a função Reflect.metadata da biblioteca reflet-metadata.
Quando obterFormato é chamado, ele lê o valor dos metadados para o formato.     */

function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  @decorador
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

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
