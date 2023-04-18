const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8'); //metodo que le o conteudo do arquivo
