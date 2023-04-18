class Pessoa {  //cria classe Pessoa
    constructor(nome, sobrenome) {  //método da própria classe, que recebe os parâmetros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //método vai automaticamente pro prototype, assim o metodo pode ser usado por mais de um objeto
    //a partir da classe mãe (pessoa)
    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

// Pessoa 3 criada como função construtora para comparação
function Pessoa3(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa3.prototype.falar = function () { //precisa botar o metodo dentro do prototype da função
    console.log(`${this.nome} está falando.`); //já na classe esse processo é automatico
};

/* -----------------------------------------------------------------------------------------------
No Console do browser:
p1.falar() --> "Leonardo está falando"  (Classe)
p2.falar() --> "Elvis está falando"  (Classe)
p3.flar() --> "Van está falando"  (Função construtora)
*/
const p1 = new Pessoa('Leonardo', 'Da Vinci');  //instanciar/criar objeto a partir da classe
const p2 = new Pessoa('Elvis', 'Presley');  //instanciar/criar objeto a partir da classe
const p3 = new Pessoa3('Van', 'Gogh');  //instanciar/criar objeto a partir da função construtora