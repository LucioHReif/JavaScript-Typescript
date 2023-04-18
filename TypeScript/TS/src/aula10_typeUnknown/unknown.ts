/*  Unknown qual é a contraparte type-safe de any. Qualquer coisa é atribuível a unknown, mas unknown não é
atribuível a nada além de si mesmo e qualquer sem uma declaração de tipo ou um estreitamento baseado em fluxo de controle.
Da mesma forma, nenhuma operação é permitida em um desconhecido sem primeiro afirmar ou restringir a um tipo mais específico.
O tipo unknown é comumente usado para evitar o tipo any. Em vez de não ter nenhum tipo ou qualquer tipo, nós o atribuímos
a unknown. Tudo atribuído a esse tipo resultará em erro, a menos que você o atribua a outro tipo em algum momento.

Alguns exemplos:
let vAny: any = 10;          Podemos atribuir qualquer coisa a any
let vUnknown: unknown =  10;    Podemos atribuir qualquer coisa a unknown

let s1: string = vAny;     any é atribuível a qualquer coisa
let s2: string = vUnknown;   Inválido; não podemos atribuir vUnknown a nenhum outro tipo (sem uma declaração explícita)

vAny.method();      Ok, valor valido
vUnknown.method();  nós não sabemos nada sobre essa variavel    */

let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
