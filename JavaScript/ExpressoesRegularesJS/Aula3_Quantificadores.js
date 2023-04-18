/* Os quantificadores especificam quantas instâncias de um caractere, grupo ou classe de caracteres 
devem estar presentes na entrada para encontrar uma correspondência. As quantidades n e m são constantes inteiras. 
Normalmente, os quantificadores são greedy. Eles fazem com que o mecanismo de expressões regulares corresponda 
a quantas ocorrências de padrões determinados forem possíveis. Acrescentar o caractere ? a um quantificador torna-o lento. 
Isso faz com que o mecanismo de expressão regular corresponda ao menor número possível de ocorrências
*/
const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

console.log(texto);
const regExp1 = /Jo+ão+/gi  //encontra nomes com repetição de letras (+ depois da letra que se repete)
// No texto há a palavra: Joooooooooãoooooooooooooooooooooooooooo
console.log(texto.match(regExp1)); //mostra um array com a qtd de nomes no texto

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g  //encontra arquivos com extensões em letras maiusculas ou minusculas

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2); // const que recebe as extenções dentro de chaves

    // if(!valido) continue;

    console.log(arquivo, valido); //mostra o nome dos arquivos e as extenções dentro de chaves
}