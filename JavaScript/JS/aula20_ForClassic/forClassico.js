// i = index

for (let i = 0; i <= 5; i++) {   // checa e executa em loop (1 em 1)
    console.log(`Linha ${i}`);
}

/*
for (let i = 0; i<=5; i++) {  
    const par = i % 2 === 0 ? 'Par' : 'Ímpar';     // Op ternária - se for divisivel por 2 é par 
    console.log(`Linha ${i}, ${par}`);
}
-----------------------------------------------------------------------------------------------------

for (let i = 0; i<=5; i += 10) {   // pula de 10 em 10
    console.log(`Linha ${i}`);
}
-----------------------------------------------------------------------------------------------------
                  0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva'];  //array com valores string
for (let i = 0; i < frutas.length; i++) {   // indice do zero ao numero de valores da array
console.log(`ìndice${i}, frutas[i]);      // mostra o indice e mais o valor referido a tal indice
}
*/