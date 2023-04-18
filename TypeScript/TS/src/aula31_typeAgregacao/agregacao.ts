/* AGREGAÇÃO - quando o objeto filho existe sem o objeto pai, mas agrega informações a ele.
Um endereço existe independentemente de um funcionário morar lá ou não. Então é uma agregação.
Outro exemplo: Se eu tiver um sistema de cadastro de times, preciso cadastras várias pessoas para agregar os times, assim, cada pessoa pode agregar
um time, nenhum time, ou vários times. A pessoa é independente do time, mas agrega valor a ele. Logo: Time é agregado por Pessoa.            */

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
