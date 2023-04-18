/* COMPOSIÇÃO - quando o objeto "filho" não faz sentido fora do objeto "pai".
Em um sistema de banco, um Titular só existe se ele tiver uma conta aberta. Se não houver conta aberta, não há titular. Isso é uma composição.
Outro exemplo: É necessário que exista pelo menos um item em uma nota fiscal para que a nota fiscal exista. Logo: NotaFiscal é composta de ItemNotaFiscal.   */
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parado...');
  }

  desligar(): void {
    console.log('Motor está desligado...');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
