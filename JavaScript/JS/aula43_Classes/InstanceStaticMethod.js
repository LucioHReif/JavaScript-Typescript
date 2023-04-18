class ControleRemoto {  //cria classe
    constructor(tv) {  //metodo da classe que recebe os parametros
        this.tv = tv; //cria parametro
        this.volume = 0; //cria parametro com valor inicial
    }

    // Método de instância --> referente ao objeto instanciado
    aumentarVolume() { //metodo
        this.volume += 2;  //aumenta volume de 2 em 2
    }
    diminuirVolume() {  //metodo
        this.volume -= 2;  //diminui volume de 2 em 2
    }

    // Método estático --> referente à classe em si
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);

ControleRemoto.soma();