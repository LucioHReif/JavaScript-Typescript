/* eslint-disable prettier/prettier */
/* Decoradores de Acesso
Um Decorador de Acesso é declarado antes de uma declaração de acesso. O Decorador de Acesso é aplicado ao Descritor de
Propriedades do acessador e pode ser usado para observar, modificar ou substituir as definições de um acesso.
Ele não pode ser usado em um arquivo de declaração ou em qualquer outro contexto de ambiente (como em uma classe declare).

NOTA: **O TypeScript não permite decorar os acessadores get e set para um único membro. Em vez disso, todos os decoradores
do membro devem ser aplicados ao primeiro acessador especificado na ordem do documento. Isso ocorre porque os decoradores
se aplicam a um Descritor de Propriedades, que combina os acessadores get e set, não a cada declaração separadamente.**

A expressão para o Decorador de Acesso será chamada como uma função em tempo de execução, com os três seguintes argumentos:
- A função construtora da classe para um membro estático ou o protótipo da classe para um membro de instância.
- O nome do membro.
- O Descritor de Propriedade do membro.

NOTA: **O Descriptor de Propriedade será undefined se o destino do seu script for menor que ES5.**
Se o Decorador de Acesso retornar um valor, ele será usado como o Descritor de Propriedade para o membro.
NOTA: **O valor de retorno é ignorado se o destino do script for menor que ES5.**

A seguir está um exemplo de um Decorador de Acesso (@configuravel) aplicado a um membro da classe Ponto:
class Ponto {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  @configuravel(false)
  get x() {
    return this._x;
  }
  @configuravel(false)
  get y() {
    return this._y;
  }
}

Podemos definir o decorador @configuravel usando a seguinte declaração de função:
function configuravel(valor: boolean) {
  return function (
    alvo: any,
    chaveDePropriedade: string,
    descritor: DescritorDePropriedade
  ) {
    descritor.configurable = valor;
  };
}             */
