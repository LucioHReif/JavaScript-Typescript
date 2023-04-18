/* FUNÇÕES DE PREDICADO DE TIPO
Funções de predicado de tipo são funções que retornam um valor booleano e têm uma sintaxe de tipo de retorno específica.
Um predicado de tipo é uma asserção de tipo que verifica se um objeto tem uma propriedade específica ou um conjunto de propriedades.
Isso permite que o TypeScript restrinja (ou refine) o tipo de um objeto com base no resultado da função.

Aqui está um exemplo de uma função de predicado de tipo:
function isString(x: unknown): x is string {
  return typeof x === 'string';
}

Neste exemplo, a função isStringrecebe um argumento xdo tipo unknown. A função então verifica se o é , e retorna ou de
acordo.typeof x'string'truefalse. O tipo de retorno da função é anotado como x is string, que afirma que xé do tipo strings
e a função retornar true. Então você pode usar a função dentro de seus blocos condicionais ou em qualquer outro lugar do código
que você precisa. O resultado do uso será que o TS reconhecerá o argumento usado como o tipo declarado.

function reverseString(x: unknown){
  // Here x is infered as unknown
  if (isString(x)) {
    // Here x is infered a string
    return x.split('').reverse().join('');
  }
	return null
}

Neste exemplo, a função reverseStringrecebe um argumento xdo tipo unknown, que pode ser qualquer valor. A função então chama a função
Type Predicate isStringpara verificar se xé uma string. Se isString(x)retorna true, então xé tratado como a stringe pode ser revertido
usando os métodos split, reversee joinstring.
--------------------------------------------------------------------------------------------------------------------------------------------------------
VANTAGENS AO USAR FUNÇÕES DE PREDICADO DE TIPO
- Elas fornecem uma maneira de expressar relacionamentos de tipo complexos de maneira legível e compreensível.
- Permitem que você defina funções personalizadas que não apenas executam uma tarefa específica, mas também retornam um valor booleano
que informa ao TypeScript se uma variável é de um tipo específico. Isso pode tornar seu código mais expressivo e autodocumentável.
- Podem ser úteis quando você precisa executar verificações dinâmicas de tipo em um objeto.
Por exemplo, imagine que você tem uma função que aceita um objeto como argumento, mas não tem certeza se o objeto possui uma propriedade específica.
Com uma função de predicado de tipo, você pode verificar a presença dessa propriedade e limitar o tipo do objeto para incluir essa propriedade.

DESVANTAGENS AO USAR FUNÇÕES DE PREDICADO DE TIPO
- podem ser mais difíceis de configurar e usar do que os blocos condicionais.
Eles exigem que você defina funções personalizadas e podem exigir mais código para começar a funcionar.
- Fácil de introduzir bugs no processo. Você pode escrever predicados incorretos levando a um estreitamento de tipo inesperado ou indesejado.
Isso pode resultar em erros de tempo de execução ou comportamento inesperado, que podem ser difíceis de diagnosticar e corrigir.


Predicados de tipo assemelham-se ao uso (e armadilhas) de usar aspara asserções de tipo, você pode mentir para o sistema de tipos, equivale a dizer
“eu sei mais sobre esse tipo do que o compilador” e forçar o tipo a ser o desejado, como um exemplo:
function isString(x: unknown): x is string {
  return typeof x === 'number';
}

O exemplo acima verifica se xé um número e, se for, trueo predicado diz que a variável é a. string.
Se mais tarde você usar esse tipo de predicado, o TS assumirá que a variável é an stringe a segurança do tipo será perdida.
--------------------------------------------------------------------------------------------------------------------------------------------------------
MELHORES PRÁTICAS PARA USAR FUNÇÕES DE PREDICADO DE TIPO PARA TYPE RESTRICTIONS

- Defina-os cuidadosamente e assegure-se de que sejam digitados corretamente.
- Use nomes claros e descritivos para funções de predicado de tipo.
- Use-os somente quando forem apropriados e necessários.
- Considere abordagens alternativas para restringir tipos, como blocos condicionais ou uniões discriminadas .
-Use testes automatizados e ferramentas de análise de código para detectar possíveis erros ou inconsistências no programa.
--------------------------------------------------------------------------------------------------------------------------------------------------------
COMO OS PREDICADOS DE TIPO SÃO USADOS EM RELAÇÃO AOS TIPOS DE UNIÃO (TYPE UNIONS)

--> TYPE UNIONS - uma maneira de declarar vários tipos em um único valor.
// value can now be set to a `string`, `boolean`, or `null` value.
let value: string | boolean | null = ...
interface Cat {
  numberOfLives: number;
}
interface Dog {
  isAGoodBoy: boolean;
}
let animal: Cat | Dog = ...

Quando usamos tipos de união, temos que trabalhar para restringir os tipos possíveis ao tipo real do valor atual. Os protetores de tipo são o que nos
permitem fazer esse estreitamento.

--> TYPE GUARDS - expressão que executa uma verificação de tempo de execução que garante o tipo em algum escopo.
Dito de outra forma, os protetores de tipo garantem que uma string seja uma string quando também pode ser um número.
São totalmente diferentes de fazer a detecção de recursos. A grande ideia é tentar detectar propriedades, métodos ou protótipos para descobrir como
lidar com um valor. Existem quatro maneiras principais de usar proteções de tipo:
- in palavra-chave
- typeof palavra-chave
- instanceof palavra-chave
- predicados de tipo com proteção de tipo personalizada
--------------------------------------------------------------------------------------------------------------------------------------------------------
TIPO PREDICADO - um tipo de retorno especial que sinaliza ao compilador Typescript qual é o tipo de um valor específico.
São sempre anexados a uma função que recebe um único argumento e retorna um booleano. Predicados de tipo são expressos como argumentName is Type.

interface Cat {
  numberOfLives: number;
}
interface Dog {
  isAGoodBoy: boolean;
}
function isCat(animal: Cat | Dog): animal is Cat {
  return typeof animal.numberOfLives === 'number';
}

Para a função de amostra, isCat, é executado em tempo de execução, assim como todos os outros protetores de tipo.
Como essa função retorna um booleano e inclui o predicado de tipo animal is Cat, o compilador Typescript converterá corretamente o animal como Cats e
isCat for avaliado como verdadeiro. Ele também lançará animalcomo Dogse fosse isCatavaliado como falso.

let animal: Cat | Dog = ...
if (isCat(animal)) {
  // animal successfully cast as a Cat
} else {
  // animal successfully cast as a Dog
}

Talvez a melhor coisa sobre guardas de tipo personalizados e predicados de tipo não seja apenas que podemos usar in, instanceof e typeof em nossos
guardas de tipo, mas também podemos personalizar verificações de tipo. Contanto que nossa função retorne um booleano, o Typescript fará a coisa certa.    */

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
console.log(soma('a', 'b', 'c'));
