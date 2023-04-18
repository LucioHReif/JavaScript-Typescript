/* CommonJS -> ES6 Modules
O "require" serve para que os scripts necessários sejam carregados de forma assincrona, sob demanda, 
ou seja, você só vai carregar um arquivo quando realmente precisar dele!
O require existe só em CommonJS (a maneira que o Node.js criou para importar e exportar modulos dentro de uma aplicação)
O import é ES6, ou seja uma nova ferramenta que ambos JavaScript do browser e JavaScript do servidor (Node.js) podem usar.
*/
const path = require('path'); //serve para trabalhar com diretorios(estrutura para organizar arquivos) e arquivos path
const axios = require('axios'); // axios é um biblioteca que permite uma integração do seu projeto React para qualquer serviço de API disponível
const { Pessoa } = require('./mod1'); // {} serve para remover a chave Pessoa do objeto do mod1
const mod1 = require('./mod1');

const p1 = new Pessoa('Jão');
console.log(mod1);
console.log(p1);