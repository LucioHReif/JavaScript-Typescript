/* INTERFACES
Um dos princípios básicos do TypeScript é que a verificação de tipo se concentra na forma que os valores têm.
Isso às vezes é chamado de “duck typing” ou “structural subtyping”. No TypeScript, as interfaces preenchem o papel
de nomear esses tipos e são uma maneira poderosa de definir contratos dentro do seu código, bem como contratos com código fora do seu projeto.

Conforme explicado acima, as interfaces também permitem que você defina a forma de um objeto com uma sintaxe diferente
e também permite que você faça algo chamado mesclagem de declaração. A sintaxe das interfaces é um pouco mais longa,
mas elas podem fazer tudo o que um tipo é capaz de fazer.

interface Animal = {
  name: string;
};

interface Herbivore = Animal & {
  consumePlant (plant: string): string;
};

class Cow implements Herbivore {
  name: 'Cow';
  consumePlant (plant: string) => {
    return `${plant} waste`
  }
}
const cow = new Cow();
cow.name;
cow.consumePlant('grass');

Neste exemplo, começamos com uma interface Animal e construímos sobre ela para criar uma nova interface para um Herbívoro.
Herbivore tem uma função consumePlant e tudo isso é implementado pela classe Cow. A fusão de declaração só pode ser feita
usando uma interface. Aqui está um exemplo exatamente disso.

interface Animal = {
  name: string;
};

interface Herbivore = Animal & {
  consumePlant (plant: string): string;
};

class Cow implements Herbivore {
  name: 'Cow';
  scientificName: 'Bos taurus';
  consumePlant (plant: string) => {
    return `${plant} waste`
  }
}
const cow = new Cow();
cow.name;
cow.scientificName;
cow.consumePlant('grass');

Para mesclar declaração, você tem várias interfaces com o mesmo nome e todas elas são mescladas em uma única interface.
À primeira vista, isso parece terrível e algo propício a erros em sua equipe. No entanto, se você precisar estender uma
biblioteca que está usando, esta é apenas a alavanca que você pode usar para fazer isso. Considere usar mais interfaces
se estiver construindo uma biblioteca para a qual outras pessoas possam querer estender os Props ou entradas para realizar seus casos de uso.   */

interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Luiz',
  sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
