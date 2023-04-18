// O router analisa a rota e chama o controlador
// O controller vai decidir qual view e qual model será usado. Cada rota tem um controlador. 

const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController'); //importa o codigo do arquivo
const contatoController = require('./src/controllers/contatoController'); //importa o codigo do arquivo

// Rotas da home
route.get('/', homeController.paginaInicial); //passa a referencia/codigo (função) de tal arquivo
route.post('/', homeController.trataPost); //passa a referencia/codigo (função) de tal arquivo

// Rotas de contato
route.get('/contato', contatoController.paginaInicial); //passa a referencia/codigo (função) de tal arquivo
module.exports = route;


