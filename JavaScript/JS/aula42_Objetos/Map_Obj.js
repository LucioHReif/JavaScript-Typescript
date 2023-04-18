const pessoas = [
    { id: 3, nome: 'Mozart' },
    { id: 2, nome: 'Makiavel' },
    { id: 1, nome: 'Rosswel' },
];

/*
const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map(); //mantém a ordem de inclusão das pessoas dentro da consts
for (const pessoa of pessoas) { //condição
    const { id } = pessoa; //pessoa passa a ser atribuida por id
    novasPessoas.set(id, { ...pessoa }); //configura o id e as caracteristicas de cada pessoa
}
console.log(novasPessoas); //mostra todas as pessoas, em ordem
console.log(novasPessoas.get(2)); //seleciona e mostra a pessoa com chave 2