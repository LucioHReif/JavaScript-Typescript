// Closure - capacidade da função de acessar o seu escopo léxico
// Escopo Global - fora da função
function retornaFuncao(nome) {  // escopo da função mãe
  return function (sobrenome) { //escopo da função
    return nome;
  };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());