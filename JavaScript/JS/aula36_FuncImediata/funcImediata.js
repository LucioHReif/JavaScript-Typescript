// IIFE -> Immediately invoked function expression
// Seria mais ou menos uma função anonima entre parenteses, podendo receber outras funções
// Função que é executada ao ser criada, não necessitando 'redeclarar' no escopo global
// Útil para proteger/separar melhor o escopo da função e do escopo global
(function (idade, peso, altura) {

  const sobrenome = 'Miranda'; //const declarada que assume valor 'Miranda'
  function criaNome(nome) { //recebe parametro nome
    return nome + ' ' + sobrenome; //retorna nome + espaço + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Luiz')); //puxa a função, no qual nome recebe valor 'Luiz' 
    //sobrenome, que ja foi declarado antes, retona valor('Miranda') após o nome
  }
  falaNome(); //executa função falaNome
  console.log(idade, peso, altura); //mostra valores atribuidos no escopo da função

})(30, 80, 1.80); //valores(argumentos) atribuidos para tair parametros