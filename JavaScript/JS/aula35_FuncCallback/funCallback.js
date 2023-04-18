// CallBack - serve para chamar uma ação(função) após o término de uma outra ação
function rand(min = 1000, max = 3000) { // numero aleatorio entre 1seg a 3seg
  const num = Math.random() * (max - min) + min; //gera numero aleatorio
  return Math.floor(num);  //retorna numero aleatorio arredondado
}

function f1(callback) { //callback para ordenar execução
  setTimeout(function () { //função com intervalo de tempo de execução
    console.log('f1'); //mostra 'f1'
    if (callback) callback();
  }, rand()); //puxa seg aleatorio e executa a função
}

function f2(callback) { //callback para ordenar execução
  setTimeout(function () { //função com intervalo de tempo de execução
    console.log('f2'); //mostra 'f2'
    if (callback) callback();
  }, rand()); //puxa seg aleatorio e executa a função
}

function f3(callback) { //callback para ordenar execução
  setTimeout(function () { //função com intervalo de tempo de execução
    console.log('f3'); //mostra 'f3'
    if (callback) callback();
  }, rand()); //puxa seg aleatorio e executa a função
}

f1(f1Callback); //chama a função da f1

function f1Callback() { //executa primeiro f1
  f2(f2Callback); //executa depois f2
}

function f2Callback() { //executa primeiro f2
  f3(f3Callback); //executa depois f3
}

function f3Callback() { //executa primeiro f3
  console.log('Olá mundo!'); //executa depois 'olá mundo'
}
  //assim é feito a ordem de execução das funções, porém o tempo de execução de cada uma é aleatório