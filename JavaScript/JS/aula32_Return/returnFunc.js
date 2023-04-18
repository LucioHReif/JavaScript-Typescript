//Return - retorna valor, encerra função
function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3)); //2 * 3(n) = 6
console.log(triplica(4)); //3 * 2(n) = 6
console.log(quadriplica(10)); //4 * 10(n) = 40