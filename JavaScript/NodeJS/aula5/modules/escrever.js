const fs = require('fs').promises;

module.exports = (caminho, dados) => { //função que recebe e exporta o caminho e os dados
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }); //metodo que escreve os dados no arquivo
};
// a flag "w" apaga todo o conteudo do arquivo e começa a escrever denovo