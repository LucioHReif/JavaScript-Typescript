// Factory function (Função fábrica)
// Útil para criar e retornar objetos
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter - permite usar o método da função e obter valores como se fosse um atributo
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`; //this serve para acessar a chave dentro do objeto
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');  //divide uma string em um array de substrings e retorna o array
      this.nome = valor.shift(); //remove o primeiro elemento de um array e retorna esse elemento.
      this.sobrenome = valor.join(' '); //cria e retorna uma nova string concatenando todos os elementos em um array
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    /*
    Método
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
    */
    // Getter - permite usar o método da função e obter valores como se fosse um atributo
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc, p1.nomeCompleto);
console.log(p2.imc, p2.nomeCompleto);
console.log(p3.imc, p3.nomeCompleto);
