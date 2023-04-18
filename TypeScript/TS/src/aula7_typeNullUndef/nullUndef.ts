/* No typescript eles pretendem significar coisas diferentes:
Algo não foi inicializado: indefinido.
Algo está indisponível no momento: null.  */

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

//o ? significa que é um parametro que pode ou não ser recebido, ou seja, pode ser um valor ou indefinido
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100);
}
