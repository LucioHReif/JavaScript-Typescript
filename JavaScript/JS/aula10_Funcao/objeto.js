function criaPessoa(nome, sobrenome, idade) { //nome, sobrenome e idade são parâmetros
    return { nome, sobrenome, idade };
}
const pessoa1 = criaPessoa('Carlos', 'Carrapato', 25); //valores atribuidos aos parametros são chamados de argumentos
const pessoa2 = criaPessoa('Manuel', 'Saruel', 47);
const pessoa3 = criaPessoa('Jean', 'Pan', 84);
console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);


