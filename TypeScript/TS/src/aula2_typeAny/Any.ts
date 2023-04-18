/* O tipo any nos permite atribuir literalmente “qualquer” valor específico a essa variável, simulando o que conhecemos como
JavaScript simples - onde os tipos podem ser atribuídos dinamicamente a partir de diferentes tipos, como um valor String se tornando um Number.

Não use any como um tipo, a menos que esteja no processo de migração de um projeto JavaScript para TypeScript.
O compilador efetivamente trata any como “por favor, desligue a verificação de tipo para esta coisa”.
É semelhante a colocar um comentário @ts-ignore em cada uso da variável   */

// Utilize any apenas em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// Module mode
export default 1;
