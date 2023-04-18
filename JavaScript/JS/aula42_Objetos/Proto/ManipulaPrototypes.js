function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) { //método prototype
    this.preco = this.preco - (this.preco * (percentual / 100)); //cálculo de desconto
};

Produto.prototype.aumento = function (percentual) { //método prototype
    this.preco = this.preco + (this.preco * (percentual / 100)); //cálculo de aumento
};

const p1 = new Produto('Camiseta', 50); //Primeiro produto 
//Recebe "Camiseta" como nome e "50" como preco 

// Literal  --> Outro produto
const p2 = {
    nome: 'Caneca', //Recebe "Caneca" como nome
    preco: 15 //"50" como preco
};
Object.setPrototypeOf(p2, Produto.prototype); //vai pegar e usar o método/Prototype do "Produto"
p2.aumento(10); //porcentagem de desconto da caneca

const p3 = Object.create(Produto.prototype, { //cria um objeto e configura/pega o prototype do "Produto"
    preco: {  //cria chave preco e configura
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: { //cria chave tamanho e configura
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10); //puxa o método de aumento
console.log(p3); //mostra o p3
