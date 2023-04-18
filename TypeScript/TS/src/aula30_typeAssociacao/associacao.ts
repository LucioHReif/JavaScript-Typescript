/* Associação - Ela descreve um vínculo que ocorre entre classes (associação binária).
Mas é possível até mesmo que uma classe esteja vinculada a si própria (associação unária),
ou que uma associação seja compartilhada por mais de uma classe (associação ternária ou N-ária).
Representamos as associações por meio de retas que ligam as classes envolvidas, essas setas podem ou não possuir setas nas extremidades
indicando a navegabilidade da associação, ou seja, o sentido em que as informações são passadas entre as classes  (não obrigatório).
Ou seja, se não há setas, significa que essas informações podem ser transmitidas entre todas as classes de uma associação.
Toda agregação e composição são associações.

COMPOSIÇÃO - quando o objeto "filho" não faz sentido fora do objeto "pai".
Em um sistema de banco, um Titular só existe se ele tiver uma conta aberta. Se não houver conta aberta, não há titular. Isso é uma composição.
Outro exemplo: É necessário que exista pelo menos um item em uma nota fiscal para que a nota fiscal exista. Logo: NotaFiscal é composta de ItemNotaFiscal.

AGREGAÇÃO - quando o objeto filho existe sem o objeto pai, mas agrega informações a ele.
Um endereço existe independentemente de um funcionário morar lá ou não. Então é uma agregação.
Outro exemplo: Se eu tiver um sistema de cadastro de times, preciso cadastras várias pessoas para agregar os times, assim, cada pessoa pode agregar
um time, nenhum time, ou vários times. A pessoa é independente do time, mas agrega valor a ele. Logo: Time é agregado por Pessoa.

A diferença entre composição e agregação tem relação com a existência dos objetos. Essa diferença não é tratada pelas linguagens de
programação que seguem o paradigma orientado a objetos (pelo menos não as convencionais: java, c#, c++).
Toda vez que temos composição, significa que a parte não existe sem o todo.
Toda vez que temos agregação, significa que a parte pode ser compartilhada entre vários objetos.                */

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.ferramenta = null;
escritor.escrever();
