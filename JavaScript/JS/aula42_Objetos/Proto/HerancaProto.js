// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
/* Herança/Delegação no JavaScript
"Herança" ou "Delegação" (termo correto) é muito usado para descrever que as características de um objeto 
são passadas para outro objeto. Assim como uma filha ou filho pode herdar características 
da sua mãe ou pai (geneticamente). 
*/
function Produto(nome, preco) { //cria função/objeto Camiseta
    this.nome = nome; //cria parametros
    this.preco = preco; //cria parametros
}
Produto.prototype.aumento = function (quantia) { //cria metodo prototype de aumento 
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) { //cria metodo prototype de desconto 
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) { //cria função/objeto Camiseta
    Produto.call(this, nome, preco); //pega/herda os prototypes de "Produto" para essas propriedades
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
/*
o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. 
Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. 
Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para 
Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos).
*/
Camiseta.prototype.constructor = Camiseta; //cria o construtor(função real) como "Camiseta"

Camiseta.prototype.aumento = function (percentual) { //método de aumento
    this.preco = this.preco + (this.preco * (percentual / 100)); //calculo do aumento
};

function Caneca(nome, preco, material, estoque) { //cria função/objeto "Caneca" que recebe nome, preço...
    Produto.call(this, nome, preco); //pega/herda os prototypes de "Produto" para essas propriedades
    this.material = material;

    Object.defineProperty(this, 'estoque', { //configura propriedades do parametro "estoque"
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype); //cria um objeto e configura/pega o prototype do "Produto"
Caneca.prototype.constructor = Caneca; //cria o construtor(função real) como "Caneca"

const produto = new Produto('Gen', 111); //atribui valores aos parametros
const camiseta = new Camiseta('Regata', 7.5, 'Preta'); //atribui valores aos parametros
const caneca = new Caneca('Caneca', 13, 'Plástico', 5); //atribui valores aos parametros
caneca.estoque = 100; //atribui valores aos parametros

//mostra os objetos/funções
console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);