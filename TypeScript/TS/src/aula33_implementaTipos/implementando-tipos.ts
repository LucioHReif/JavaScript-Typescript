/* Types - type alias podem ser usados para representar não apenas primitivos, mas também tipos de objetos, tipos de união, tuplas e interseções.
Os types permitem que você defina uma forma ou crie um alias para types primitivos. O uso de types permite que você obtenha avisos de tempo de
compilação em vez de exceções de tempo de execução e descubra erros em sua implementação mais rapidamente. Usando o símbolo & você pode estender
um tipo existente e esta sintaxe é mais sucinta do que a palavra-chave extends que as interfaces usam.

type Animal = {
  name: string;
};

type Herbivore = Animal & {
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

Neste exemplo, pegamos um tipo básico, Animal, e o estendemos com Herbívoro e adicionamos outro atributo. A partir daí, podemos
ver que a criação de uma classe que implementa esse tipo pode fornecer valores a eles e, em seguida, uma instância da classe pode utilizar esses atributos.

Union types só podem ser alcançados com a palavra-chave type:
type Fruit = 'apple' | 'pear' | 'orange';
type Vegetable = 'broccoli' | 'carrot' | 'letuce';
type HealthyFoods = Fruit | Vegetable

Neste exemplo, estamos pegando dois types diferentes e criando uma combinação de ambos. Isso é chamado de Union types e pode ser usado para
ter mais verificações em relação aos valores e formas válidos que você utiliza.
Existem dois casos explícitos que possuem restrições em que você fica restrito ao usar o operador union com um tipo:
1 - Você não pode usar extends em uma interface com um tipo se você usar o operador union |dentro de sua definição de tipo.
2 - Você não pode usar implementos em uma classe com um tipo se usar um operador de união |dentro de sua definição de tipo.     */

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
