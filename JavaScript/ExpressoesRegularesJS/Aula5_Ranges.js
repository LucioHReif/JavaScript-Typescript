/*
Intervalos (ranges) - os colchetes podem conter intervalos (ranges) de caracteres. 
Por exemplo, [a-z] é um intervalo de caracteres de "a" até "z". E [0-9] é um dígito de "0" até "9".

--> O código [a-zA-Z0-9_] é o mesmo que \w e o código [0-9] é o mesmo que \d.

Excluindo intervalos
Para excluir um intervalo, você usa o intervalo de exclusão com a seguinte sintaxe:  [^...]
--> [^0-9] corresponde a qualquer caractere, exceto um dígito e é o mesmo que \D.
--> [^aeiou] corresponde a qualquer caractere, exceto 'a', 'e', 'i', 'o' e 'u'.

Mais em: https://blog.taller.net.br/entendendo-expressoes-regulares  */

const { alfabeto } = require('./base');
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));