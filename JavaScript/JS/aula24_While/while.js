// Exemplo While e Do While

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;    // precisa dessa parte, se não ficaria em loop infinito
}

function random(min, max) {   // função com valor number aleatorio
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);  // arredonda numero 'r' pra inteiro
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {       // enquanto numero for diferente de 10, o laço continua a ser executado
  rand = random(min, max);
  console.log(rand);
}

/*
do {
  rand = random(min, max);
  console.log(rand);  
} while(rand !== 10);

//------------------------------------------------------------------------------------------------------
const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  console.log(rand);
}
console.log('######');
--------------------------------------------------------------------------------------------------------
do {                      primeiro executa e depois checa
  console.log(rand);      nesse caso, vai vir o valor 10 direto, pois não foi feito a checagem antes
} while(rand !== 10);
*/
