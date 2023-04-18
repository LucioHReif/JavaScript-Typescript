// defineProperty e defineProperties
//Configurar as propriedades dos objetos
function Produto(nome, preco, estoque) {
    this.nome = nome;    //atrela propriedade (publica) ao objeto
    this.preco = preco;  //atrela propriedade (publica) ao objeto

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); //mostra as propriedades chave do objeto Produto

for (let chave in p1) {
    console.log(chave);
}