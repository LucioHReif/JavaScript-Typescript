// Função Recursiva - se auto executa em uma quantidade de vezes definida
function recursiva(max) {
  console.log(max);
  if (max >= 10) return; // se for igual ou maior que 10, a função para
  max++; //conta +1 a cada vez que se executa
  recursiva(max); //chama o atributo/parâmetro
}

recursiva(0); //define valor inicial