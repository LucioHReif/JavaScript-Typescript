// Polimorfismo - quando um método é executado de maneira diferentes 
// em classes filhas de uma mesma classe mãe

// Exemplo - Médodos em Conta Corrente e Conta Poupança
function Conta(agencia, conta, saldo) { //cria função conta que recebe agencia, conta e saldo
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) { //método prototype sacar
  if (valor > this.saldo) {  //se valor sacado for maior que saldo mostra "Saldo insufuciente"
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor; //desconta valor sacado do saldo
  this.verSaldo(); //puxa metodo verSaldo que mostra saldo atual da conta
};

Conta.prototype.depositar = function (valor) { //método prototype depositar
  this.saldo += valor; //adiciona valor de deposito ao saldo
  this.verSaldo(); //puxa metodo verSaldo que mostra saldo atual da conta
};

Conta.prototype.verSaldo = function () { // metodo que mostra saldo atual da conta
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` + //mostra agencia/conta e o saldo arredondado 
    `Saldo: R$${this.saldo.toFixed(2)}`       // para duas casas decimais após a vírgula
  );
};

function CC(agencia, conta, saldo, limite) { //cria função conta que recebe agencia, conta, saldo e limite
  Conta.call(this, agencia, conta, saldo); //puxa parametros agencia, conta e saldo da função Conta
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype); //cria objeto CC com prototype de Conta
CC.prototype.constructor = CC; //cria construtor para CC

CC.prototype.sacar = function (valor) { //cria metodo sacar na CC
  if (valor > (this.saldo + this.limite)) { //se valor sacado for maior que saldo e limite
    console.log(`Saldo insuficiente: ${this.saldo}`); //mostra "saldo insuficiente" e o saldo atual
    return;
  }

  this.saldo -= valor; //desconta valor sacado do saldo
  this.verSaldo();  //puxa metodo verSaldo que mostra saldo atual da conta
};

function CP(agencia, conta, saldo) { //cria função CP que recebe agencia, conta e saldo
  Conta.call(this, agencia, conta, saldo); //puxa parametros agencia, conta e saldo da função Conta
}
CP.prototype = Object.create(Conta.prototype);  //cria objeto CP com prototype de Conta
CP.prototype.constructor = CP; //cria construtor para CC

const cc = new CC(11, 22, 0, 100);  //assume valores para agencia, conta, saldo e limite da função CC
cc.depositar(10); //deposita 10 ((saldo atual + 100 (limite)) + 10) --> saldo 10
cc.sacar(110); //tira 110 ((saldo atual + 100(limite)) - 110) --> Saldo: 0
cc.sacar(1); //tira 1 (saldo atual (0) - 1)  -->  "Saldo insuficiente"

console.log();

const cp = new CP(12, 33, 0); //cria const que assume valores para agencia, conta, saldo e limite da função CP
cp.depositar(10);  //deposita 10 (saldo atual + 10) --> saldo 10
cp.sacar(10); //tira 10 (saldo atual - 10) --> Saldo: 0
cp.sacar(1); //tira 1 (saldo atual - 1) -->  "Saldo insuficiente"

