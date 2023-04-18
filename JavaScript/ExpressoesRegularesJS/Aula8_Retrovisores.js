/* RETROVISORES: O retrovisor só funciona se usado com o grupo;  Temos no máximo 9 retrovisores por ER;
O retrovisor serve para procurar palavras repetidas;  Numeram-se retrovisores contando os grupos da esquerda para a direita;

*/

const { html2 } = require('./base');

// $1 $2 $3 <- Retrovisores \1

//  p Olá mundo
// <p>Olá mundo</p>

console.log(html2);
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));