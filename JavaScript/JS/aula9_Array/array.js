const alunos = ['Walter', 'Jessie', 'Gus']
console.log(alunos);
console.log(alunos[2]); //mostra apenas valor do indice selecionado
alunos[0] = 'Haizenberg'; //altera valor do indice
alunos[3] = 'Saul'; //adiciona novo indice
alunos[alunos.length] = 'Tuco'; //adiciona novo indice
alunos.push('Lalo'); //adiciona novo indice
alunos.unshift('Mexico'); //adiciona no começo (primeiro indice)
console.log(alunos);
const removido = alunos.pop(); // remove o ultimo indice
// removido = alunos.shift();  ---> remove o primeiro indice
delete alunos[0]; //remove o valor do indice selecionado (valor fica undefined)
console.log(removido); //mostra os que foram removidos
console.log(alunos); //mostra todos os alunos
console.log(alunos.slice(1, 3)); //seleciona valores entre tais indices
console.log(typeof alunos); //mostra tipo de valor (nesse caso os indices saõ objetos)
console.log(alunos instanceof Array); //verifica se faz parte de uma array