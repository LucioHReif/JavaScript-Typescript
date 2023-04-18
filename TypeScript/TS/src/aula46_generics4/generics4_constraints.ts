/* Introdução às restrições genéricas no TypeScript

Considere o seguinte exemplo:
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

O merge()é uma função genérica que mescla dois objetos. Por exemplo:
let person = merge(
    { name: 'John' },
    { age: 25 }
);
console.log(result);
Saída:    { name: 'John', age: 25 }

Ele funciona perfeitamente bem.
A merge()função espera dois objetos. No entanto, isso não impede que você passe um não-objeto como este:

let person = merge(
    { name: 'John' },
    25
);
console.log(person);
Saída:    { name: 'John' }

TypeScript não emite nenhum erro. Em vez de trabalhar com todos os tipos, você pode querer adicionar uma restrição
à merge()função para que ela funcione apenas com objetos. Para fazer isso, você precisa listar o requisito como uma
restrição sobre o que Ue Vos tipos podem ser.
Para denotar a restrição, você usa a extendspalavra-chave. Por exemplo:

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

Como a merge()função agora está restrita, ela não funcionará mais com todos os tipos. Em vez disso, funciona objectapenas com o tipo.
O seguinte resultará em um erro:

let person = merge(
    { name: 'John' },
    25
);

Erro:   Argument of type '25' is not assignable to parameter of type 'object'.
// O argumento do tipo '25' não pode ser atribuído ao parâmetro do tipo 'objeto'.
------------------------------------------------------------------------------------------------------------------------------------------
--> Usando parâmetros de tipo em restrições genéricas
O TypeScript permite que você declare um parâmetro de tipo restrito por outro parâmetro de tipo.
A prop()função a seguir aceita um objeto e um nome de propriedade. Ele retorna o valor da propriedade.

function prop<T, K>(obj: T, key: K) {
    return obj[key];
}

O compilador emite o seguinte erro:   Type 'K' cannot be used to index type 'T'.
// O tipo 'K' não pode ser usado para indexar o tipo 'T'.

Para corrigir esse erro, adicione uma restrição para Kgarantir que seja uma chave da Tseguinte forma:

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

Se você passar para a propfunção um nome de propriedade que existe no obj, o compilador não reclamará. Por exemplo:

let str = prop({ name: 'John' }, 'name');
console.log(str);
Saída:    John

No entanto, se você passar uma chave que não existe no primeiro argumento, o compilador emitirá um erro:

let str = prop({ name: 'John' }, 'age');
Erro:   Argument of type '"age"' is not assignable to parameter of type '"name"'.
// O argumento do tipo '"idade"' não pode ser atribuído ao parâmetro do tipo '"nome"'.
------------------------------------------------------------------------------------------------------------------------------------------
Resumo
Use extendsa palavra-chave para restringir o parâmetro de tipo a um tipo específico.
Use extends keyofpara restringir um tipo que é propriedade de outro objeto.     */

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];
const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(vacinas, cor, obterChave(animal, 'idade'));

// Module mode
export default 1;
