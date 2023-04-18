/*  A tupla pode conter dois valores de tipos de dados diferentes.
var employee: [number, string] = [1, "Steve"];
No exemplo acima, definimos uma variável empIdcomo tipo numérico e empNamecomo tipo string com valores.
Aqui, declaramos e atribuímos duas variáveis ao nome e id dofuncionário. A mesma coisa pode ser
alcançada usando uma única variável do tipo tupla. employeeé a variável do tipo tupla com dois valores
de número e tipo string. Assim, eliminando a necessidade de declarar duas variáveis diferentes.

Uma variável de tipo tupla pode incluir vários tipos de dados, conforme mostrado abaixo.
var person: [number, string, boolean] = [1, "Steve", true];
var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

Você também pode declarar um array de tuplas.
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
O TypeScript gera um array em JavaScript para a variável tupla.
Por exemplo, var employee: [number, string] = [1, 'Steve']será compilado como var employee = [1, "Steve"]em JavaScript.

Acessando Elementos de Tupla
var employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"

Você pode adicionar novos elementos a uma tupla usando o método push().
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
Isso é permitido porque estamos adicionando valores numéricos e de string à tupla e eles são válidos para a employeetupla.

Agora, vamos tentar adicionar um valor booleano à tupla.
employee.push(true)
O exemplo acima lançará o seguinte erro: test.ts(4,15): error TS2345: Argument of type 'true' is not assignable to parameter of type 'number | string'.
Recebemos um erro informando que adicionar um valor booleano a uma tupla do tipo 'número | string' não é permitido.
Portanto, uma tupla declarada como 'número | string' pode armazenar apenas valores numéricos e de string.

A tupla é como um array. Assim, podemos usar métodos de array em tupla como pop(), concat() etc.
var employee: [number, string] = [1, "Steve"];
// recuperando valor por índice e realizando uma operação
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']  */

const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
