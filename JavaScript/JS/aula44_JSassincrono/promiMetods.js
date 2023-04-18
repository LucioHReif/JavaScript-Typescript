function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

/* Se tiver pelo menos um erro em uma das promises dentro do Promise.all, o codigo 
apontará direto no erro e vai parar de ser executado

PROMISE.ALL
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 5000),
    esperaAi('Promise 3', 1000),
    esperaAi(14, 3000),
    'Outro valor'
] 
Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    })
-----------------------------------------------------------------------------------------------
PROMISE.RACE
const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 5000),
    esperaAi('Promise 3', 1000),
    esperaAi(14, 3000),
] 
Promise.race(promises)  Nesse caso mostrará apenas a promise de menor tempo de execução
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    })
------------------------------------------------------------------------------------------------*/
// PROMISE.RESOLVE - executa direto no then - mostra o codigo validado direto
function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));
/* -----------------------------------------------------------------------------------------------
PROMISE.REJECT - executa direto no catch - mostra o erro direto
function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));
*/