/* Type assertions
A asserção de tipo permite definir o tipo de um valor e informar ao compilador para não inferi-lo. É quando você,
como programador, pode ter uma compreensão melhor do tipo de uma variável do que o TypeScript pode inferir por conta própria.
Tal situação pode ocorrer quando você pode estar transferindo código de JavaScript e pode conhecer um tipo de variável mais
preciso do que o que está atribuído atualmente. É semelhante à conversão de tipos em outras linguagens, como C# e Java.
No entanto, ao contrário do C# e do Java, não há efeito de tempo de execução da asserção de tipo no TypeScript.
É apenas uma maneira de permitir que o compilador TypeScript saiba o tipo de uma variável.

Exemplo: Type assertions
let code: any = 123;
let employeeCode = <number> code;
console.log(typeof(employeeCode)); //Output: number

No exemplo acima, temos uma variável codedo tipo any. Atribuímos o valor desta variável a outra variável chamada employeeCode.
No entanto, sabemos que o código é do tipo número, mesmo que tenha sido declarado como 'qualquer'. Portanto, ao atribuir codea employeeCode,
afirmamos que o código é do tipo número nesse caso e temos certeza disso. Agora, o tipo de employeeCodeé number.

Da mesma forma, podemos ter uma situação em que temos um objeto que foi declarado sem nenhuma propriedade ainda.
let employee = { };
employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'
O exemplo acima dará um erro de compilador, porque o compilador assume que o tipo de funcionário é {} sem propriedades.

Porém, podemos evitar essa situação usando a asserção de tipo, conforme mostrado abaixo.
interface Employee {
    name: string;
    code: number;
}

let employee = <Employee> { };
employee.name = "John"; // OK
employee.code = 123; // OK
No exemplo acima, criamos uma interface Employeecom o nome e o código das propriedades. Em seguida, usamos esse tipo de afirmação no funcionário.
As interfaces são usadas para definir a estrutura das variáveis. Saiba mais sobre isso no capítulo de interface .
*/

/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado
// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
*/
