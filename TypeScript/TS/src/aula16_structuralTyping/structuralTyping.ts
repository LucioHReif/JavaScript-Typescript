/*  Um sistema de tipo estrutural significa que, ao comparar tipos, apenas TypeScript leva em consideração os membros do tipo.
Isso está em contraste com sistemas de tipo nominal, onde você poderia criar dois tipos, mas não poderia atribuí-los a cada um
outro. Veja example:nominal-typing

Por exemplo, essas duas interfaces são completamente transferível em um sistema de tipo estrutural:
interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}
let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };
sphere = ball;
ball = sphere;

Se adicionarmos um tipo que contém estruturalmente todos os os membros de Bola e Esfera, então também pode ser definido para ser uma bola ou esfera.
interface Tube {
  diameter: number;
  length: number;
}
let tube: Tube = { diameter: 12, length: 3 };
tube = ball;
ball = tube;

Como uma bola não tem comprimento, ela não pode ser atribuído à variável do tubo. No entanto, todos os membros de
Bola estão dentro do tubo, e assim podem ser atribuídos. O TypeScript está comparando cada membro no tipo contra um ao outro para verificar sua igualdade.
Uma função é um objeto em JavaScript e é comparada de maneira semelhante. Com um truque extra útil por aí os parametros:
let createBall = (diameter: number) => ({ diameter });
let createSphere = (diameter: number, useInches: boolean) => {
  return { diameter: useInches ? diameter * 0.39 : diameter };
};
createSphere = createBall;
createBall = createSphere;

TypeScript permitirá que (number) seja igual a (number, boolean) nos parâmetros, mas não (número, booleano) -> (número)
O TypeScript descartará o booleano na primeira atribuição porque é muito comum que o código JavaScript pule a passagem
parâmetros quando não são necessários. Por exemplo, o retorno de chamada de forEach do array tem três parâmetros,
valor, índice e o array completo - se o TypeScript não suporta o descarte de parâmetros, então você teria que
inclui todas as opções para fazer com que as funções coincidam:

[createBall(1), createBall(2)].forEach((ball, _index, _balls) => {
  console.log(ball);
});

Ninguém precisa disso. Tipos de retorno são tratados como objetos, e quaisquer diferenças são comparados com as mesmas regras de igualdade de objeto acima.
let createRedBall = (diameter: number) => ({ diameter, color: "red" });
createBall = createRedBall;
createRedBall = createBall;

Onde funciona a primeira atribuição (ambos têm diâmetro), mas o segundo não (a bola não tem cor).   */

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
