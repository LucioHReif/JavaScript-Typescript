/* O tipo never representa o tipo de valores que nunca ocorrem. Por exemplo, never é o tipo de retorno para uma expressão
de função ou uma expressão de função de seta que sempre lança uma exceção ou que nunca retorna. As variáveis também
adquirem o tipo nunca quando limitadas por qualquer proteção de tipo que nunca pode ser verdadeira.
O tipo never é um subtipo de, e atribuível a, cada tipo; no entanto, nenhum tipo é um subtipo de,
ou atribuível a, never (exceto o próprio never). Mesmo qualquer não é atribuível a never.
Nós podemos utilizar o type never em funções sem retorno;

Qual é a diferença entre void e never?
O type void pode receber o valor null ou undefined e o type never não pode receber nenhum valor.
Quando não especificado um type nas funções do TypeScript, ele retorna um valor undefined.
*/

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

// Module mode
export default 1;
