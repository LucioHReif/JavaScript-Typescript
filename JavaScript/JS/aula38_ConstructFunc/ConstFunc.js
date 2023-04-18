// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) { //Nome da função em maiusculo
  // Atributos ou métodos privados
  // const ID = 123456;
  // const metodoInterno = function() {};
  //------------------------------------------------------------
  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome; //não precisa mais do return

  this.metodo = function () {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();