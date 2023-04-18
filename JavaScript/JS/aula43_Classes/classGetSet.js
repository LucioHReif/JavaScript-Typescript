class Pessoa { //cria classe pessoa
  constructor(nome, sobrenome) { //metodo da propria classe que recebe os parâmetros
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() { //vai puxar os valores de nome e sobrenome
    return this.nome + ' ' + this.sobrenome;  //retorna nome e sobrenome
  }

  set nomeCompleto(valor) { //configura os valores dos parâmetros
    valor = valor.split(' ');  //divide as strings e as retorna como array
    this.nome = valor.shift(); //configura a primeira palavra como nome
    this.sobrenome = valor.join(' ');  //configura as outras palavras como sobrenome
  }
}

const p1 = new Pessoa('Van', 'Helssing');
p1.nomeCompleto = 'Van Helssing IV';
console.log(p1.nome);
console.log(p1.sobrenome);