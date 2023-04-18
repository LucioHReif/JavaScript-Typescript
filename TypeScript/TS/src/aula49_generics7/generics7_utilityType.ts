/* eslint-disable @typescript-eslint/no-unused-vars */
/* Utility Types
Utilitários para facilitar as transformações de tipos comuns. Esses utilitários estão disponíveis globalmente.

--> Awaited<Type>
Esse tipo destina-se a modelar operações como await em funções assíncronas ou o método .then() em Promises - especificamente,
a maneira como eles desempacotam Promises recursivamente.

type A = Awaited<Promise<string>>;
type A = string

type B = Awaited<Promise<Promise<number>>>;
type B = number

type C = Awaited<boolean | Promise<number>>;
type C = number | boolean
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Partial<Type>
Constrói um tipo com todas as propriedades de Type definidas como opcionais. Este utilitário retornará um tipo que representa
todos os subconjuntos de um determinado tipo.

interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Required<Type>
Constrói um tipo que consiste em todas as propriedades de Type definidas como necessárias. O oposto de Parcial.

interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 };
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Readonly<Type>
Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
todo.title = "Hello";
Cannot assign to 'title' because it is a read-only property.

Este utilitário é útil para representar expressões de atribuição que falharão em tempo de execução
(ou seja, ao tentar reatribuir propriedades de um objeto congelado).

Object.freeze
function freeze<Type>(obj: Type): Readonly<Type>;
-----------------------------------------------------------------------------------------------------------------------------------------------------
--> Record<Keys, Type>
Constrói um tipo de objeto cujas chaves de propriedade são Keys e cujos valores de propriedade são Type. Este utilitário pode ser usado para mapear
as propriedades de um tipo para outro tipo.

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
const cats: Record<CatName, CatInfo>
-----------------------------------------------------------------------------------------------------------------------------------------------------
Pick<Type, Keys>
Constrói um tipo escolhendo o conjunto de propriedades Keys (literal de string ou união de literais de string) de Type.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
const todo: TodoPreview
-----------------------------------------------------------------------------------------------------------------------------------------------------
Omit<Type, Keys>
Constrói um tipo selecionando todas as propriedades de Type e, em seguida, removendo Keys (literal de string ou união de literais de string).

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;
const todo: TodoPreview
type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;
const todoInfo: TodoInfo
-----------------------------------------------------------------------------------------------------------------------------------------------------
Exclude<UnionType, ExcludedMembers>
Constrói um tipo excluindo de UnionType todos os membros de união atribuíveis a ExcludedMembers.

type T0 = Exclude<"a" | "b" | "c", "a">;
type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
type T2 = string | number
-----------------------------------------------------------------------------------------------------------------------------------------------------
Extract<Type, Union>
Constrói um tipo extraindo de Type todos os membros da união que são atribuíveis a Union.

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
type T1 = () => void
-----------------------------------------------------------------------------------------------------------------------------------------------------
NonNullable<Type>
Constrói um tipo excluindo nulo e indefinido de Type.

type T0 = NonNullable<string | number | undefined>;
type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
type T1 = string[]
-----------------------------------------------------------------------------------------------------------------------------------------------------
Parameters<Type>
Constrói um tipo de tupla a partir dos tipos usados nos parâmetros de um tipo de função Type.

declare function f1(arg: { a: number; b: string }): void;
type T0 = Parameters<() => string>;
type T0 = []
type T1 = Parameters<(s: string) => void>;
type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;

type T3 = [arg: {
    a: number;
    b: string;
}]

type T4 = Parameters<any>;
type T4 = unknown[]
type T5 = Parameters<never>;
type T5 = never
type T6 = Parameters<string>;
Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T6 = never
type T7 = Parameters<Function>;
Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  Type 'Function' provides no match for the signature '(...args: any): any'.

type T7 = never
-----------------------------------------------------------------------------------------------------------------------------------------------------
ConstructorParameters<Type>
Constrói um tipo de tupla ou matriz a partir dos tipos de um tipo de função de construtor. Ele produz um tipo de tupla com todos os tipos de
parâmetro (ou o tipo nunca se Type não for uma função).

type T0 = ConstructorParameters<ErrorConstructor>;
type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;
type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;
type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;
type T3 = unknown[]

type T4 = ConstructorParameters<Function>;
Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  Type 'Function' provides no match for the signature 'new (...args: any): any'.

type T4 = never
-----------------------------------------------------------------------------------------------------------------------------------------------------
ReturnType<Type>
Constrói um tipo que consiste no tipo de retorno da função Type.

declare function f1(): { a: number; b: string };
type T0 = ReturnType<() => string>;
type T0 = string
type T1 = ReturnType<(s: string) => void>;
type T1 = void
type T2 = ReturnType<<T>() => T>;
type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
type T3 = number[]
type T4 = ReturnType<typeof f1>;

type T4 = {
    a: number;
    b: string;
}

type T5 = ReturnType<any>;
type T5 = any
type T6 = ReturnType<never>;
type T6 = never
type T7 = ReturnType<string>;
Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T7 = any
type T8 = ReturnType<Function>;
Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  Type 'Function' provides no match for the signature '(...args: any): any'.

type T8 = any
-----------------------------------------------------------------------------------------------------------------------------------------------------
InstanceType<Type>
Constrói um tipo que consiste no tipo de instância de uma função construtora em Type.

class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
type T0 = C
type T1 = InstanceType<any>;
type T1 = any
type T2 = InstanceType<never>;
type T2 = never
type T3 = InstanceType<string>;
Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
type T3 = any
type T4 = InstanceType<Function>;
Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  Type 'Function' provides no match for the signature 'new (...args: any): any'.

type T4 = any
-----------------------------------------------------------------------------------------------------------------------------------------------------
ThisParameterType<Type>
Extrai o tipo deste parâmetro para um tipo de função ou desconhecido se o tipo de função não tiver este parâmetro.

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
-----------------------------------------------------------------------------------------------------------------------------------------------------
OmitThisParameter<Type>
Remove este parâmetro de Type. Se Type não declarou explicitamente esse parâmetro, o resultado é simplesmente Type.
Caso contrário, um novo tipo de função sem esse parâmetro é criado a partir de Type. Os genéricos são apagados e apenas a última assinatura de
sobrecarga é propagada para o novo tipo de função.

function toHex(this: Number) {
  return this.toString(16);
}
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
console.log(fiveToHex());
-----------------------------------------------------------------------------------------------------------------------------------------------------
ThisType<Type>
Este utilitário não retorna um tipo transformado. Em vez disso, serve como um marcador para um tipo contextual.
Observe que o sinalizador noImplicitThis deve ser ativado para usar este utilitário.

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

No exemplo acima, o objeto de métodos no argumento para makeObject tem um tipo contextual que inclui ThisType<D & M> e, portanto, o tipo de this em
métodos dentro do objeto de métodos é { x: número, y: número } & { moveBy (dx: número, dy: número): número }. Observe como o tipo da propriedade de
métodos simultaneamente é um destino de inferência e uma fonte para este tipo em métodos.
A interface do marcador ThisType<T> é simplesmente uma interface vazia declarada em lib.d.ts. Além de ser reconhecida no tipo contextual de um objeto
literal, a interface age como qualquer interface vazia.

Tipos de manipulação de string intrínseca
Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>            */

// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
