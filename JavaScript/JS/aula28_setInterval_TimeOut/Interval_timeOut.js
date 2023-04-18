function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
//função anônima
const timer = setInterval(function () {
    console.log(mostraHora());  //pega a hora
}, 1000);   //mil milimetros de segundo (intervalo de tempo de execução)
//ou seja executa a cada segundo; Não para de executar

setTimeout(function () {  //executa apenas uma vez de acordo com o intervalo
    clearInterval(timer);   //para de acordo com o intervalo (5seg nesse caso)
}, 5000);

setTimeout(function () {
    console.log('Olá mundo!');
}, 10000);