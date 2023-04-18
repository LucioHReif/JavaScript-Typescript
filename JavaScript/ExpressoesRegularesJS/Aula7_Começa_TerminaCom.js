/*  Caracteres especiais de escape
Normalmente, você usa uma barra invertida para escapar (pular por cima) de um caractere especial, por exemplo \. 
No entanto, entre colchetes, você não precisa escapar da maioria dos caracteres especiais, exceto que eles tenham 
um significado para os colchetes. 

Por exemplo, se o acento circunflexo ^ estiver no início de uma string, você precisará escapar dele: [\^#$]
Se o acento circunflexo não estiver no início de uma string, você não precisa escapar: [#^$]                */

const { cpfs, cpfs2 } = require('./base');

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const cpf = ' 254.224.877-45';

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));