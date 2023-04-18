const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio';
  falaNome();  //quando puxa a funçaõ ja declarada, ela pega a const vizinha
  //ou seja, o valor da const proxima a ela
}
usaFalaNome(); 