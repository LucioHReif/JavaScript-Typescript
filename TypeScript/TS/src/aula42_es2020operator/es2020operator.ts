/*  Encadeamento opcional e Operador de coalescência nula/*

--> Operador de coalescência nula
O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu
operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
Ao contrário do operador lógico OR (||), o operando esquerdo é retornado se houver um valor falsy (falso) que
não seja null ou undefined. Em outras palavras, se você usar || para obter algum valor padrão para outra variável
foo, você pode enfrentar comportamentos inesperados se você considerar algum valor falseável como utilizável (eg. '' ou 0).
Veja abaixo alguns exemplos:

exprEsq ?? exprDir
O operador de coalescência nula retorna os resultados da expressão de seu lado direito se a
expressão de seu lado esquerdo for null ou undefined.

--> Endereçando um valor padrão à variável
Inicialmente, quando se deseja endereçar um valor padrão à variável, um padrão comum é utilizar o operador lógico OR (||):
let foo;     //  foo nunca é endereçado a nenhum valor, portanto, ainda está indefinido
let someDummyText = foo || 'Hello!';

Entretanto, devido ao || ser um operador lógico booleano, o operando do lado esquerdo é coagido para um valor booleano
para sua avaliação e qualquer valor falseável (0, '', NaN, null, undefined) não é retornado. Este comportamento pode
causar consequencias inesperadas se você considerar 0, '', ou NaN como valores válidos.

let count = 0;
let text = "";
let qty = count || 42;
let message = text || "Olá!";
console.log(qty);     // 42 e não 0
console.log(message); // "Olá!" e não ""

O operador de coalescência nula evita esta cilada pois retorna o segundo operando apenas quando o primeiro é avaliado entre
os valores null ou undefined (mas nehum outro valor falseável):

let myText = ''; // Uma string vazia (que também é um valor falseável)
let notFalsyText = myText || 'Olá mundo';
console.log(notFalsyText); // Olá mundo
let preservingFalsy = myText ?? 'Olá vizinhança';
console.log(preservingFalsy); // '' (Pois myText não é undefined e nem null)
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Curto-circuito
Assim como os operadores lógicos OR e AND, a expressão do lado direito não é avaliada se o lado esquerdo não for avaliado entre null e nem undefined.

function A() { console.log('A foi chamado'); return undefined;}
function B() { console.log('B foi chamado'); return false;}
function C() { console.log('C foi chamado'); return "foo";}
console.log( A() ?? C() );
// Imprime "A foi chamado" então "C foi chamado" e por fim "foo"
// Como A() retornou undefined então ambas expressões foram avaliadas
console.log( B() ?? C() );
// Imprime "B foi chamado" então "false"
// Como B() retornou false (e não null ou undefined), a expressão
// do lado direito não foi avaliada.
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Sem encadeamento com os operadores AND e OR
Não é possível encadear ambos operadores AND (&&) e OR (||) diretamente com o ??. Um SyntaxError (en-US) será disparado nesse tipo de caso.

null || undefined ?? "foo"; // Dispara um SyntaxError
true || undefined ?? "foo"; // Dispara um SyntaxError

Entretanto, explicitar diretamente a precedência por meio de parênteses resulta no comportamento correto:
(null || undefined) ?? "foo"; // retorna "foo"
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Relacionamento com o operador de encadeamento opcional (?.)
O operador de coalescêcia nula trata undefined e null como valores específicos e então executa o operador de encadeamento opcional (?.)
o qual é útil para acessar uma propriedade de um objeto, o qual pode ser null ou undefined.

let foo = { someFooProp: "oi" };
console.log(foo.someFooProp?.toUpperCase());  // "OI"
console.log(foo.someBarProp?.toUpperCase()); // undefined

Exemplo
Neste exemplo, nós iremos prover valores padrão, mas manter valores que não sejam (advinha???) null ou undefined.

const nullValue = null;
const emptyText = ""; // falseável (falsy)
const someNumber = 42;

const valA = nullValue ?? "padrão para A";
const valB = emptyText ?? "padrão para B";
const valC = someNumber ?? 0;

console.log(valA); // "padrão para A"
console.log(valB); // "" (pois a string vazia não é null ou undefined)
console.log(valC); // 42
--------------------------------------------------------------------------------------------------------------------------------------------------------
--> Encadeamento opcional
O operador de encadeamento opcional ?. permite a leitura do valor de uma propriedade localizada internamente em uma cadeia
de objetos conectados, sem que a validação de cada referência da cadeia seja expressivamente realizada.

O operador ?. funciona de maneira similar ao operador . de encadeamento, exceto que, ao invés de causar um erro se a referência
é nullish (en-US) (null ou undefined), a expressão sofre um "curto-circuito" e retorna com um valor de undefined.
Quando utilizado com uma chamada de função, retorna undefined se a função executada não existir.

Isso resulta em expressões mais curtas e simples ao acessar propriedades encadeadas quando a possibilidade de uma referência ser inexistente.
Isso também pode auxiliar ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.

Experimente

obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)

Descrição
O operador de encadeamento opcional provê uma forma de simplificar o acesso a valores através de objetos conectados, quando é
possível que uma referência ou função possa ser undefined ou null.
Por exemplo, considere um objeto obj que possui uma estrutura aninhada. Sem o encadeamento opcional, verificar proriedades profundamente
aninhadas requer uma validação de referências intermediárias, algo como:

let nestedProp = obj.first && obj.first.second;

O valor de obj.first é confirmadamente não-null (e não-undefined) antes de acessar o valor de obj.first.second. Isso previne o
erro que ocorreria se você simplesmente acessasse obj.first.second diretamente sem testar obj.first.
Com o operador de encadeamento opcional (?.), entretanto, você não precisa explicitamente testar e aplicar curto-circuito baseado
no estado de obj.first antes de tentar acessar obj.first.second:

let nestedProp = obj.first?.second;

Ao utilizar o operador ?. ao invés de apenas ., o JavaScript sabe que deve implicitamente checar e ter certeza que obj.first não
é null ou undefined antes de tentar acessar obj.first.second. Se obj.first é null ou undefined, a expressão automaticamente sofrerá
curto-circuito, retornando undefined.

Isso é equivalente ao seguinte, exceto que a variável temporária, de fato, não é criada:
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Encadeamento opcional com chamadas de funções
Você pode usar o encadeamento opcional ao tentar chamar um método que pode não existir. Isso pode auxiliar, por exemplo,
ao utilizar uma API em que o método está indisponível, seja pela época da implementação ou por causa de uma funcionalidade
que ainda não está disponível no dispositivo do usuário.
Usar encadeamento opcional com chamadas de função faz com que a expressão automaticamente retorne undefined ao invés de lançar
uma exceção se o método não é encontrado:

let result = someInterface.customMethod?.();

Nota: Se existe uma propriedade com tal nome e que não é uma função, usando ?. ainda lançará a exceção TypeError (x.y is not a function).
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Lidando com callbacks opcionais ou manipuladores de eventos
Se você usa callbacks ou consulta métodos de objetos com atribuição via desestruturação, você pode ter valores não-existentes
que você não conseguirá chamar como funções, a menos que você tenha testado sua existência. Usando ?., você pode evitar esse teste extra:

// Escrito como ES2019
function doSomething(onContent, onError) {
  try {
    // ... faz algo com os dados
  }
  catch (err) {
    if (onError) { // teste se onError realmente existe
      onError(err.message);
    }
  }
}
Copy to Clipboard
// Usando encadeamento opcional com chamadas de função
function doSomething(onContent, onError) {
  try {
   // ... faz algo com os dados
  }
  catch (err) {
    onError?.(err.message); // Nenhuma exceção se onError for undefined
  }
}
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Encadeamento opcional com expressões
Você também pode usar o operador de encadeamento opcional ao acessar propriedades com uma expressão usando assessores de propriedade:
let nestedProp = obj?.['prop' + 'Name'];
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Encadeamento opcional não válido no lado esquerdo de uma atribuição
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Acesso a item de Array com encadeamento opcional
let arrayItem = arr?.[42];

Exemplo básico
Esse exemplo busca plo valor da propriedade name para o membro bar em um map quando não existe tal membro. Portanto, o resultado é undefined.
let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});
let nameBar = myMap.get("bar")?.name;
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Avaliação com curto-circuito
Ao usar o encadeamento opcional com expressões, se o operador do lado esquerdo é null ou undefined, a expressão não será avaliada. Por exemplo:

let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];
console.log(x); // 0 já que x não foi incrementado
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Empilhando o operator de encadeamento opcional
Com estruturadas aninhadas, é possível usar encadeamento opcional múltiplas vezes:
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls" // endereço detalhado é desconhecido
  }
};
let customerCity = customer.details?.address?.city;

// … isso também funcional com encadeamento opcional em chamada de função
let duration = vacations.trip?.getTime?.();
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Combinando com o operador de coalescência nula (nullish coalescing)
O operador de coalescência nula pode ser usado após o encadeamento opcional, para construir um valor padrão quando nada é encontrado:
let customer = {
  name: "Carl",
  details: { age: 82 }
};
const customerCity = customer?.city ?? "Cidade desconhecida";
console.log(customerCity); // Cidade desconhecida              */

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1-Ixi, não existe data.');
console.log(undefined ?? '2-Ixi, não existe data.');
console.log(null ?? '3-Ixi, não existe data.');
console.log(false ?? '4-Ixi, não existe data.');
console.log(0 ?? '5-Ixi, não existe data.');
console.log('' ?? '6-Ixi, não existe data.');
