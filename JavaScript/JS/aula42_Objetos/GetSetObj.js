//Getter e Setters - basicamente simular um método como se fossse uma propriedade
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function () {  //pega o valor e exibe
            return estoquePrivado;
        },
        set: function (valor) { //configura/valida o valor
            if (typeof valor !== 'number') {  //se valor for diferente de numero dará uma mensagem de erro
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor; //atribui valor ao estoque
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {  //pega o valor e exibe
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', ''); //troca 'coisa' por nada(apaga) antes de apresentar a msg do console
            nome = valor; //atribui valor ao nome
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 10; //altera valor do estoque
//p1.estoque = "farinha"   -->  nesse caso vai dar erro pois só aceita valor numerico
console.log(p1.estoque);
const p2 = criaProduto('Camiseta'); //agrega 'Camiseta' ao valor da propriedade nome
p2.nome = 'Qualquer coisa.'; //altera o valor de 'Camiseta' para 'Qualquer coisa'
console.log(p2.nome);