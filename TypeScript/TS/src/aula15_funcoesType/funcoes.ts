/* Declaração de função: O nome, os parâmetros e o tipo de retorno de uma função são todos especificados em uma declaração de função.
function functionName(arg1, arg2, ... , argN);

Definição da função: Inclui as instruções reais que serão executadas. Ele descreve o que deve ser feito e como deve ser feito.
function functionName(arg1, arg2, ... , argN){
  // codigo
}

Chamada de função: uma função pode ser chamada de qualquer lugar no aplicativo. Tanto na chamada quanto na definição da função,
o parâmetro/argumento deve ser o mesmo. Devemos passar o mesmo número de parâmetros que a definição da função especifica.
functionName(arg1, arg2, ... , argM);
--------------------------------------------------------------------------------------------------------------------------------------------
Existem dois tipos de funções no TypeScript:
- Named Function -> Função nomeada / Sintaxe --> functionName( [args] ) { }
É definida como aquela que é declarada e chamada por seu nome. Eles podem incluir parâmetros e ter tipos de retorno.
// Named Function Definition
function myFunction(x: number, y: number): number {
  return x + y;
}
// Function Call
myFunction(7, 5);  //output: 12
--------------------------------------------------------------------------------------------------------------------------------------------
- Anonymous Function --> Função anônima / Sintaxe --> let result = function( [args] ) { }
É uma função sem nome. Em tempo de execução, esses tipos de funções são definidos dinamicamente como uma expressão. Podemos salvá-lo em uma
variável e eliminar a necessidade de nomes de funções. Eles aceitam entradas e retornam saídas da mesma forma que as funções normais.
Podemos usar o nome da variável para chamá-la quando precisarmos. As próprias funções estão contidas dentro da variável.
// Anonymous Function
let myFunction = function (a: number, b: number) : number {
    return a + b;
};

// Anonymous Function Call
console.log(myFuction(7, 5)); //output: 12
--------------------------------------------------------------------------------------------------------------------------------------------
Vantagem da função: Os benefícios das funções podem incluir, mas não estão limitados ao seguinte:
- Reutilização de código: podemos chamar uma função várias vezes sem precisar reescrever o mesmo bloco de código. A reutilização do código economiza tempo e diminui o tamanho do programa.
- Menos codificação: Nosso software é mais conciso por causa das funções. Como resultado, não precisamos escrever um grande número de linhas de código cada vez que executamos uma atividade de rotina.
- Fácil de depurar: torna simples para o programador descobrir e isolar dados incorretos.  */

type MapStringsCallback = (item: string) => string;
export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
