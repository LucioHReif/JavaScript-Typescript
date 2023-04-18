/*As flags são colocadas atrás da palavra, separada por barra. Serve para encontrar coisas especificas. São elas:
g  ->  global (encontra todas as ocorrências)
i  ->  insensitive (quando um nome/palavra pode estar em letra maiuscula ou minuscula)
(()())  -> grupos
 |  ->  ou 

Método test:
Usado para verificar se uma regex da match com uma string. Ela retorna sempre valor boolean. Este método é ideal 
para fazer validações como por exemplo validar se um email, telefone ou data estão corretos.
*/

const { texto } = require('./base'); //puxa a const texto do arquivo base.js
const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;  //flag i, pois há nomes começando com letra maiuscula e minuscula
//encontra o nome que está alocado à frase, pode ser maria ou joão ou luiz. No caso está escrito Maria
const found = regExp1.exec(texto);

if (found) {
    console.log(regExp1.test(texto)); //verifica se há uma das palavras da const regExp1 no texto do arquivo base
    console.log(found[0]); // mostra todo o trecho que estiver no grupo maria (indice 0)
    console.log(found[1]); // mostra o primeiro trecho relacionado a maria (indice 1)
    console.log(found[2]); // mostra o segundo trecho relacionado a maria (indice 2)
}