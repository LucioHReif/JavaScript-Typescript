//Exemplo de usos com STRINGS
let umaString = 'Um texto';
console.log(umaString[5]); //ou console.log(umaString.charAt(4)); ---> busca o valor em tal posição da variável
console.log(umaString.indexOf('Um')); //mostra em qual índice a palavra começa
console.log(umaString.lastIndexOf('Um')); //mostra em qual índice a palavra termina
console.log(umaString.concat(' em ', 'um ', 'lindo ', 'dia.',));
/* ou console.log(umaString + ' em um lindo dia.');
ou console.log('${umaString} em um lindo dia.'); */

let outraString = 'O rato roeu a roupa do rei de roma';
console.log(outraString);
console.log(outraString.replace(/r/g, '#')); //troca letra ou palavra entre // por outra, flag g para trocar todos os caracteres selecionados
console.log(outraString.length);  //quantidade de caracteres no texto
console.log(outraString.slice(2, 6)); //pega palavra entre indices
console.log(outraString.slice(-5, -1)); //valores negativos começam pelo final da frases
console.log(outraString.split(' ', 3)); //retira o caractere, quantidade de vezes/palavras
console.log(outraString.toLowerCase());  //transforma todo o texto para letras minusculas
console.log(outraString.toUpperCase);  //transforma todo o texto para letras maiusculas

