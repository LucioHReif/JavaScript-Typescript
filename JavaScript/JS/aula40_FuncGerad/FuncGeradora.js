// Função Geradora - gera valores
// Exemplo 1
function* geradora1() {
  yield 'Valor 1'; //gera um valor
  yield 'Valor 2';
  yield 'Valor 3';
}
const g1 = geradora1();
console.log(g1.next().value); //retorna um objeto com valor (value)
console.log(g1.next().value); //retorna um objeto com valor (value)
console.log(g1.next().value); //retorna um objeto com valor (value)
console.log('-----------')

// Exemplo 2
function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}
const g2 = geradora2();
console.log(g2.next().value); //retorna um objeto com valor (value)
console.log(g2.next().value); //retorna um objeto com valor (value)
console.log(g2.next().value); //retorna um objeto com valor (value)
console.log(g2.next().value); //retorna um objeto com valor (value)
console.log(g2.next().value); //retorna um objeto com valor (value)
console.log('-----------')

// Exemplo 3
function* geradora3() {
  yield 0; //gera um valor
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3(); //delega/puxa a função g3 (0, 1, 2) e da continuidade (3, 4, 5)
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}
console.log('-----------')

// Exemplo 4
function* geradora5() {
  yield function () {
    console.log('Vim do y1');
  };

  yield function () {
    console.log('Vim do return');
  };
  /* Se usasse o return ao invés de 'yield function', a proxima yield da função não seria executada:
  return function() {
    console.log('Vim do y3');
  };
  */

  yield function () {
    console.log('Vim do y3');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();