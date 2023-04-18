/* Match - retorna um array, com as string que deram match com a regex. Se não houver valor, ele retorna null. 
Replace - usado para substituir strings que deram match por uma nova string

Grupos: Eles nos possibilita a criação de regras isoladas, possibilita a criação de referencias (retrovisores) para o reuso da mesma 
regra em outro local dentro de uma mesmo regex e ainda cria a possibilidade de validações dentro da regex.

OBS: Para o texto de substituição, o script usa o $1 e $2 na substituição para indicar a primeira e a segunda correspondências 
de substring entre parênteses.  */

const { texto } = require('./base');  //puxa a const texto do arquivo base
const regExp1 = /João|Maria/gi; //pega todos as palavras com esses nomes,seja em maiusculo ou minusculo

// (...( () ) )(...)(...)  $1 $2 $3 $4 $5

console.log(texto);  //mostra o texto original
console.log(texto.match(regExp1)); //mostra um array com a qtd de nomes no texto
console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));  //bota os nomes entre <b><b/>
console.log(texto.replace(/(João|Maria)/gi, function (input) {  //troca os nomes para maiusculo e
    return ' ############## ' + input.toUpperCase() + ' ############## '; //retorna todo o texto com # e os nomes em maiusculo entre eles 
}));