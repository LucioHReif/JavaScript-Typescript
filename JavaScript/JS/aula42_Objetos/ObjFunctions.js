/* Modelo de Objeto em Factory Functions
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Mozart', 'VanGogh');
console.log(p1.nomeCompleto());
---------------------------------------------------------

Modelo de Objeto em Constructor Functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);    //impede a modificação dos valores dos objetos
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);

OBS: a palavra new cria um objeto vazio e junta a palavra 'this' ao objeto
*/
