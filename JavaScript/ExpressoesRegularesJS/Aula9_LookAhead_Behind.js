/* Lookaheads - significa “olhar para frente”. Eles são meios de se adicionar regras não capturáveis numa expressão e sem consumir caracteres. 
É como dizer: numa lista de nomes completos, eu quero extrair apenas os primeiros nomes de todos que tiverem sobrenome Silva.
Há duas formas de se usar esse recurso:

Positive lookaheads
Com positive lookaheads você define regras que DEVEM aparecer para ocorrer um match. Exemplificando a situação acima, teríamos: 
/^[A-Z][a-z]+\s(?=Silva)/gm. Com (?=) determinamos o seu uso e tudo que tiver dentro desses parêntesis e depois do = será considerado 
para matches mas só o que estiver fora será capturado. Logo, se tivéssemos João Silva e Pedro Henrique, apenas capturaríamos João .

Negative lookaheads
O oposto também é possível. Com negative lookaheads podemos fazer o mesmo, exceto que ele só terá um match caso NÃO apareça a regra 
definida nele. Para isso trocamos a sintaxe para (?!) e teremos /^[A-Z][a-z]+\s(?!Silva)/gm. Dessa vez, capturando Pedro.

-------------------------------------------------------------------------------------------------------------------------------------------------
Lookbehind - O .NET inclui dois elementos de linguagem, (?<=subexpression) e (?<!subexpression), que correspondem ao caractere ou aos 
caracteres anteriores na cadeia de caracteres de entrada. Ambos os elementos de linguagem são asserções de largura zero, ou seja, 
eles determinam se o caractere ou os caracteres que precedem imediatamente o caractere atual podem ser correspondidos pela subexpressão, 
sem avanço ou retrocesso.

(?<=subexpression) é uma asserção lookbehind positiva, ou seja, o caractere ou os caracteres antes da posição atual devem corresponder à 
subexpression. (?<!subexpression) é uma asserção lookbehind negativa, ou seja, o caractere ou os caracteres antes da posição atual não 
devem corresponder à subexpression. As asserções lookbehind positivas e negativas são mais úteis quando subexpressão for um subconjunto 
da subexpressão anterior.          */

const { lookahead } = require('./base');

console.log(lookahead);
// console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookahead (frases que tem inactive)
console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// Negative lookahead (frases que NÃO tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Negative lookahead (frases que NÃO tem active)
console.log(lookahead.match(/^(?!.+inactive).+$/gim))

//--------------------------------------------------------------
// Positive lookbehind (Frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (Frases que NÃO começam com ONLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));
