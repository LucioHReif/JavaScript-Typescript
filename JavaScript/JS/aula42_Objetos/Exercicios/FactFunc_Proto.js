//OBS: iniciar index.html para ver os prototypes de dentro dos objetos pelo console
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);
// método estático copia todas as propriedades próprias enumeráveis​​de um ou mais objetos de origem
// para um objeto de destino. Ele retorna o objeto de destino modificado.

function criaPessoa(nome, sobrenome) { //função com parametros nome e sobrenome
  return Object.create(pessoaPrototype, { //cria um objeto pessoa com prototype que recebe nome e sobrenome
    nome: { value: nome },  
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p1);
console.log(p2);