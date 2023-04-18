/* Union types - são usados quando um valor pode ser mais do que um único tipo.
Por exemplo, quando uma propriedade seria stringou number.
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

Erros em Union types
Você precisa saber qual é o seu tipo quando os tipos de união estão sendo usados para evitar erros de tipo:
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'
}
Em nosso exemplo, estamos tendo um problema ao invocar toUpperCase()como um string método e number não temos acesso a ele.
*/

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));

// Module mode
export default 1;
