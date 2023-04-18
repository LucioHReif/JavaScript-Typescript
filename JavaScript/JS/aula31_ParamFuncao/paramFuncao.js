//arguments sustenta todos os argumentos criados
//só da pra usar nesse tipo de função
function funcao() {
    let total = 0;
    for (let argumento of arguments) { //cada valor dentro da funcao se torna um argumento
        total += argumento; //soma todos os valores (argumentos)
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5); //adiciona argumentos (valores) às variaveis da função
//
const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
/*--------------------------------------------------------------------------------------------
                 1  2  3  4  5
function funcao (a, b, c, d, e) {  para cada var será atribuida um valor
    console.log (a, b, c, d, e)
} 
funcao (1, 2, 3, 4, 5);
*/