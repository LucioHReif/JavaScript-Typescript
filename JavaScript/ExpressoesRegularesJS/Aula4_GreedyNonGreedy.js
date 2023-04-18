/*
Os quantificadores especificam quantas instâncias de um caractere, grupo ou classe de 
caracteres devem estar presentes na entrada para encontrar uma correspondência.

Quantificador Greedy	    Quantificador lento	        Descrição
       *	                       *?	                Corresponde a zero ou mais vezes.
       +	                       +?	                Corresponde a uma ou mais vezes.
       ?	                       ??	                Corresponde a zero ou uma vez.
      {n}	                      {n}?	                Corresponde exatamente a n vezes.
      {n,}	                      {n,}?	                Corresponde a, pelo menos, n vezes.
      {n,m}	                      {n,m}?	            Corresponde de n a m vezes.
*/

const { html } = require('./base');

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g));  // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g));  // non-greedy