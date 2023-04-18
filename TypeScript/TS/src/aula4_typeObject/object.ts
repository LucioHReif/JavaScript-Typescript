/*  Tipos de objetos
Em JavaScript, existem basicamente dois tipos de valores. O primeiro tipo são tipos de dados primitivos .
Esses são os oito tipos de dados básicos, alguns dos quais você trabalhará com frequência.
Esses tipos de dados incluem string, número, booleano, nulo, símbolo e assim por diante.
Além desses tipos de dados primitivos, existe o segundo tipo de valores.

Este segundo tipo de valores são objetos. Em JavaScript, você pode distinguir rapidamente entre um tipo de dados primitivo
e um objeto olhando para o valor. Se o valor em si tiver alguma propriedade, ele é um objeto. Caso contrário, é um dos oito
tipos de dados primitivos. Cada um desses tipos também tem um tipo correspondente no TypeScript. Isso se aplica a objetos também.
No TypeScript, há um novo tipo chamado tipo de objeto. Este tipo se aplica a qualquer valor que tenha algumas propriedades, pelo menos uma.
Este novo tipo visa facilitar o trabalho com objetos, bem como a sua anotação.

Tipos de objetos anônimos
TypeScript permite definir dois tipos de tipos de objetos. O primeiro tipo é anônimo. Isso ocorre quando você define um objeto para
um objeto específico sem usar o tipo ou uma interface. Um exemplo de tipo de objeto anônimo pode ser um parâmetro de função.
Digamos que você tenha uma função que aceita um objeto como parâmetro. Se você deseja definir o tipo de objeto para este parâmetro
de objeto como anônimo, você o definirá na definição da função. Você define quais propriedades o objeto deve ter.
Para cada propriedade, você também define qual é o tipo do valor da propriedade.

// Define a function with anonymous object type:
function myFunc(user: { username: string, email: string }) {
  return `user: ${user.username}, email: ${user.email}`
}
No exemplo acima, você definiu o parâmetro do objeto chamado de user. O tipo de objeto anônimo deste parâmetro diz que o objeto tem
duas propriedades: usernamee email. Ambas as propriedades são do tipo string e ambas são obrigatórias.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Tipos de objetos nomeados
A segunda maneira de definir os tipos de um objeto é usando um alias de tipo ou uma interface. Nesse caso, você usa um dos dois para
definir a forma do objeto. Quando você deseja anotar um objeto com esta forma, você faz referência ao apelido de tipo ou interface.
O TypeScript usará o alias ou interface para inferir tipos para todas as propriedades do objeto.

// No.1: type alias
// Cria um alias de tipo para o objeto de usuário:
type User = {
  username: string;
  email: string;
}

// No.2: interface
// Cria am interface para objeto de usuário:
type User = {
  username: string;
  email: string;
}

// Use o tipo alias ou interface para anotar o parâmetro do usuário:
function myFunc(user: User) {
  return `user: ${user.username}, email: ${user.email}`
}
A estrutura do próprio tipo de objeto é a mesma. Existem ainda duas propriedades, de um tipo string. A diferença é que agora o tipo de
objeto é definido fora da função ou local onde é utilizado, independentemente se você quiser.   */

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;
