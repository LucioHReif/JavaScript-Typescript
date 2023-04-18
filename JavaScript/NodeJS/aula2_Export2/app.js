const Cachorro = require('./Z/mod2'); 
//carrega o mod2, que está exportando a classe "Cachorro" e o metodo do mod1
const c1 = new Cachorro('Dog'); //atribui um valor ao parâmetro nome da classe "Cachorro"
c1.latir(); //executa o metodo carregado do modulo