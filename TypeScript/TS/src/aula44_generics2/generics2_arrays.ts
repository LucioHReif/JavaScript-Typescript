/* GENERICS EM ARRAYS

function getArray(items : any[] ) : any[] {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK
console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

No exemplo acima, a getArray()função aceita um array do tipo any. Ele cria um novo array do tipo any, concatena itens para ele
e retorna o novo array. Como usamos type anypara nossos argumentos, podemos passar qualquer tipo de array para a função.
No entanto, isso pode não ser o comportamento desejado. Podemos querer adicionar os números ao array de números ou as strings
ao array de strings, mas não os números ao array de strings ou vice-versa.

O Generics usa a variável de tipo <T>, um tipo especial de variável que denota tipos. A variável type lembra o tipo que o
usuário fornece e trabalha apenas com esse tipo específico. Isso é chamado de preservação das informações de tipo.
"Convertendo" para o Generics fica assim:
function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}
let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
myNumArr.push("Hi"); // Compiler Error
myStrArr.push(500); // Compiler Error

A variável de tipo Té especificada com a função entre os colchetes angulares getArray<T>. A variável type Ttambém é usada para
especificar o tipo dos argumentos e o valor de retorno. Isso significa que o tipo de dados que será especificado no momento da
chamada de uma função também será o tipo de dados dos argumentos e do valor de retorno. Chamamos a função genérica getArray()e
passamos o array de números e o array de strings. Por exemplo, chamar a função as getArray<number>([100, 200, 300])substituirá
T por the number e so, o tipo dos argumentos e o valor de retorno serão array de números. Da mesma forma, para
getArray<string>(["Hello", "World"]), o tipo de argumento e o valor de retorno serão string array. Agora, o compilador mostrará
um erro se você tentar adicionar uma string myNumArrou um número na myStrArrmatriz. Assim, você obtém a vantagem de verificação de tipo.

--> Não é recomendado, mas também podemos chamar uma função genérica sem especificar o tipo da variável. O compilador usará inferência
de tipo para definir o valor de Tna função com base no tipo de dados dos valores de argumento.
let myNumArr = getArray([100, 200, 300]); // OK
let myStrArr = getArray(["Hello", "World"]); // OK
Os genéricos podem ser aplicados ao argumento da função, ao tipo de retorno de uma função e aos campos ou métodos de uma classe.       */

type MeuTipo = number;
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

export function minhaPromise(): Promise<MeuTipo | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
