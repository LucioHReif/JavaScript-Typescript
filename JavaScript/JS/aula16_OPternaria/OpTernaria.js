// OPERAÇÃO TERNÁRIA
// '?' para 'Valor para verdadeiro'  ou  ':' para 'Valor para falso';
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

/* DE OUTRA FORMA FICARIA ASSIM:
if (pontuacaoUSuario >= 1000) {
    console.log('Usuário VIP);
} else {
    console.log('Usuário normal);
}
*/
const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);