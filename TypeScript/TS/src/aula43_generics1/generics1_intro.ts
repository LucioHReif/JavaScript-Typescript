/* GENERICS - A documentação do TypeScript explica o Generics como “sendo capaz de criar um componente que pode
funcionar em vários tipos, em vez de em um único”. Generics são para tipos o que valores são para argumentos de
função — eles são uma maneira de dizer aos nossos componentes (funções, classes ou interfaces) o tipo que queremos
usar quando executarmos esse pedaço de código, da mesma forma como dizemos a uma função quais valores usar como
argumentos quando nós a executamos.

EXEMPLO de Função sem o Generics
function identity (value: Number) : Number {
    return value;
}
console.log(identity(1)) // 1

É bom que tenhamos um tipo definido, mas a função não é muito flexível. A função de identidade deve funcionar para
qualquer valor passado, não apenas números. É aqui que os genéricos entram. Os genéricos nos permitem escrever uma
função que pode assumir qualquer tipo e transformar nossa função com base nesse tipo.

EXEMPLO de Função com o Generics
function identity <T>(value: T) : T {
    return value;
}
console.log(identity<Number>(1)) // 1

Existe essa sintaxe <T> desconhecida!. Assim como se estivéssemos passando um argumento, passamos o tipo que queremos
usar para essa chamada específica da função. Os tipos genéricos são preenchidos da mesma forma como preenchemos os
argumentos da função ao chamá-la. quando chamamos identity<Number>(1), o tipo Number é um argumento como o 1.
Ele preenche o valor T onde quer que ele apareça.

Ele também pode receber vários tipos, assim como podemos ter vários argumentos.
function identity <T>(value: T, message: U) : T {
    console.log(message);
    return value;
}
identity<Number, string>(42, "Mensagem")
Uma função pode ter vários tipos genéricos, assim como pode ter vários argumentos.
Não há nada de especial em T ou U, eles são apenas nomes de variáveis que escolhemos. Nós os preenchemos com valores de
tipo quando chamamos a função e ela usa esses tipos.

Outra maneira de pensar em genéricos é que eles transformam uma função com base no tipo de dados que você passa para ela.
function identity <Number>(value: Number) : Number {
    return value;
}
console.log(identity<Number>(42)); //retorna 42
console.log(identity("Hello World!")); //não retorna nada no momento
console.log(identity<Number>([1, 2, 3])); //não retorna nada no momento

Agora usando o Tipo string
function identity <string>(value: string) : string {
    return value;
}
console.log(identity<Number>(42)); //não retorna nada no momento
console.log(identity("Hello World!")); //retorna Hello World
console.log(identity<Number>([1, 2, 3])); //não retorna nada no momento

Como você pode ver, a função assume qualquer tipo que seja passada para ela, permitindo criar componentes reutilizáveis
para diferentes tipos, exatamente como a documentação nos prometeu.                   */

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
