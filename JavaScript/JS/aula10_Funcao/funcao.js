// EXEMPLO DE FUNÇÃO

function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}
saudacao('Heizenberg');
// ou desse jeito
function saudacao(nome) {
    return `Bom dia ${nome}`;
}
const variavel = saudacao('Heizenberg');
console.log(variavel);
//---------------------------------------------

// EXEMPLO 2 DE FUNÇÃO
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Ou desse jeito - Função do tipo ARROW
const raiz2 = n => n ** 0.5;
console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));



