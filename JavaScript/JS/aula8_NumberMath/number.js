let num1 = 10.578;
let num2 = 2.578;
let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4);
num3 = ((num3 * 100) + (num4 * 100)) / 100; // outra forma de arredondar valor de conta
console.log(num3);
console.log(Number.isInteger(num3));  //verifica se o numero é inteiro
console.log(num1.toString(), num2); //altera valor para string
console.log(num1.toFixed(2)); //arredonda numero de acordo com a casa decimal definida(nesse caso foram duas casas)
console.log(Number.isInteger(num1)); //boolean - diz se o valor é numero inteiro ou não
let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); //retorna true sempre que a "conta" não ser aceita (NaN)

