const verdadeira = true;
// Mais diferenças entre Var e Let
/*  Let tem escopo de bloco { ... bloco }
    Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
let nome = 'Otávio'; // criando
var nome2 = 'Rogério'; // redeclarando

if (verdadeira) {
var nome2 = 'Ronaldo'; // redeclarando
let nome = 'Outra coisa';
}
}
console.log(nome, nome2);  --> como o console.log ta no escopo global, o valor para nome será 'Luiz',
enquanto o valor para nome2 será 'Ronaldo', pois é var e por isso busca o ultimo valor redeclarado dentro da função
Assim teremos --> 'Luiz Ronaldo'
-----------------------------------------------------------------------------------------------------------------------------------

function falaOi () {
var sobrenome = 'Miranda';    --> se a var for declarada dentro da função e o console.log estiver no escopo global
}                                 vai acusar erro, e não exibirá a mensagem
console.log(sobrenome);
-----------------------------------------------------------------------------------------------------------------------------------
function falaOi () {
if (verdadeira) {
let nome = 'Luiz';
var sobrenome = 'Miranda';   --> como o console.log e a var (dentro do if) estão dentro da função, não acusará erro
}
console.log(sobrenome); 
}
falaOi();
-----------------------------------------------------------------------------------------------------------------------------------
function falaOi () {
if (verdadeira) {
let nome = 'Luiz';
var sobrenome = 'Miranda';   --> como o console.log está fora do if e a let nome está dentro do if, acusará erro
}
console.log(nome, sobrenome);
}
falaOi();
*/
