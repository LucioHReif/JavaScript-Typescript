class DispoEletronico {  //cria classe
    constructor(nome) {  //método da propria classe que recebe os parametros
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {  //metodo ligar booleano
        if (this.ligado) {  //se ligado for true, então mostra "nome + ja ligado"
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;  //muda de desligado para ligado (false para true)
    }

    desligar() {  //metodo desligar booleano
        if (!this.ligado) {
            console.log(this.nome + ' já desligado'); //se desligado for true
            return;                                   //então mostra "nome + ja desligado"
        }

        this.ligado = false; //muda de ligado para desligado (true para false)
    }
}

class Smartphone extends DispoEletronico { //classe Samrtphone vai herdar da classe mãe (DispoEletronico)
    constructor(nome, cor, modelo) {  //método da propria classe que recebe os parametros
        super(nome);  //parametro herdado da classe mãe deve seguir esse padrão
        this.cor = cor;  //cria novo parametro
        this.modelo = modelo;  //cria novo parametro
    }
}

class Tablet extends DispoEletronico { //classe Tablet vai herdar da classe mãe (DispoEletronico)
    constructor(nome, temWifi) {  //método da propria classe que recebe os parametros
        super(nome); //parametro herdado da classe mãe
        this.temWifi = temWifi;  //cria novo parametro
    }

    ligar() {  //metodo ligar que retorna um console
        console.log('Click');  //mensagem
    }

    falaOi() { //metodo ligar que retorna um console
        console.log('Oi');  //mensagem
    }

    static criador(nome, temWifi) {  //metodo estatico que retorna novo objeto com seguintes parametros
        return new Tablet.prototype.constructor(nome, temWifi);  //cria novo objeto a partir dos 
    }                                                         // parametrosdo construtor dessa classe
}

const d1 = new DispoEletronico('Smartphone')
d1.ligar();
d1.desligar();
console.log(d1);

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = Tablet.criador('iPad', true);
console.log(t1);
