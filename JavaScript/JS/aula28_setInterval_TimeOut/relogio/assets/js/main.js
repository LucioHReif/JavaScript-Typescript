function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); //mil milisegundos = 1 segundo
    return data.toLocaleTimeString('pt-BR', {  //tipo de data local
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');  //seleciona a classe relogio
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {  //atribui o setInterval à let timer
      segundos++;  // começa a contar seg de um em um
      relogio.innerHTML = criaHoraDosSegundos(segundos);  //atualiza o html do relogio
    }, 1000); //mil milisegundos = 1 segundo (intervalo de tempo)
  }

  document.addEventListener('click', function (e) {  //atribui eventos aos buttons
    const el = e.target;  //cria uma const elemento que vai receber os eventos dos buttons
    //e.target é para elementos

    if (el.classList.contains('zerar')) { //se conter a classe 'zerar', executa tal ação...
      clearInterval(timer); //"limpa o intervalo do timer"
      relogio.innerHTML = '00:00:00';  //relogio do html volta para 0
      relogio.classList.remove('pausado');  //a classe (de cor vermelha) passa a ser preta
      segundos = 0;  //variavel para a ter o valor inicial (zero)
    }

    if (el.classList.contains('iniciar')) { //se conter a classe 'iniciar', executa tal ação...
      relogio.classList.remove('pausado'); //a classe (de cor vermelha) passa a ser preta
      clearInterval(timer);  //impede que mais de um timer seja executado ao mesmo tempo
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) { //se conter a classe 'pausar', executa tal ação...
      clearInterval(timer); //"limpa o intervalo do timer"
      relogio.classList.add('pausado'); //a classe está editada na cor vermelha no css
    }
  });
}
relogio();
