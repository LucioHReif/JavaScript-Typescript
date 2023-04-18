/* DECLARATION MERGING - No TypeScript, quando duas declarações separadas com o mesmo nome estão sendo mescladas
em uma única definição, isso é chamado de mesclagem de declaração (Declaration merging). É uma boa prática estar
ciente, por exemplo, quando você precisa estender declarações de tipo de uma biblioteca de terceiros.

Mesclando Interfaces
O tipo mais comum e fácil de mesclagem de declarações é a mesclagem de interfaces . Dê uma olhada no exemplo abaixo:
interface Footballer {
  id: number;
}
interface Footballer {
  email: string;
}
interface Footballer {
  firstName: string;
  lastName: string;
}
let footballer: Footballer = { id: 69, email: 'johndoe@yahoo.co.uk' firstName: 'John', lastName: 'Doe' };

Neste exemplo, cada interface declarada com o nome Footballer é mesclada em uma definição. Isso significa que o objeto
jogador de futebol pode ter propriedades de todas as três interfaces . E os membros da interface com o mesmo nome?
As não funções devem ser do mesmo tipo - caso contrário, o compilador lançará um erro.

interface Footballer {
  firstName: string;
  lastName: string;
}
interface Footballer {
  firstName: string; // that's ok
  lastName: number; // error
}

Observe como membros de função com o mesmo nome descrevem uma sobrecarga da mesma função. Em termos simples, o compilador
escolhe qual função deve chamar com base no tipo do argumento fornecido . Digno de nota é que as interfaces declaradas
posteriormente têm precedência sobre as declaradas anteriormente. Você pode encontrar essas interfaces abaixo:

interface Footballer {
  shoot(shot: CurveShot): CurveShot;
}
interface Footballer {
  shoot(shot: FinesseShot): FinesseShot;
}
interface Footballer {
  shoot(shot: FlairShot): FlairShot;
  shoot(shot: ChipShot): ChipShot;
}

Eles serão mesclados da seguinte maneira:

interface Footballer {
  shoot(shot: FlairShot): FlairShot;
  shoot(shot: ChipShot): ChipShot;
  shoot(shot: FinesseShot): FinesseShot;
  shoot(shot: CurveShot): CurveShot;
}

No entanto, há uma exceção a essa regra - assinaturas com parâmetros de tipo literal de cadeia de caracteres sempre irão para
o topo da lista de sobrecarga mesclada .                    */

// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

pessoa.idade = 31;
console.log(pessoa);
