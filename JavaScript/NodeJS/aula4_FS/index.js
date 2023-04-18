/* LISTANDO ARQUIVOS COM FS E RECURSÂO MÚTUA
const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) { 
    rootDir = rootDir || path.resolve(__dirname); 
    const files = await fs.readdir(rootDir);
    walk(files); 
}

function walk(files, rootDir) { //cria função que recebe os arquivos e o caminho raiz
    for (let file of files) { 
        console.log(file);
    }
}
readdir('C:/Users/User/OneDrive/Documentos/NodeJS/');  */

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) { //função ler que vai receber caminho raiz
    rootDir = rootDir || path.resolve(__dirname); //se a rootDir for enviada vai usar ela, se não vai buscar o caminho absoluto
    const files = await fs.readdir(rootDir);
// O await faz a execução de uma função async pausar, para esperar pelo retorno da Promise, e resume a execução da função async quando o valor da Promise é resolvido.
// Ele então retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida.
    walk(files, rootDir); // puxa a função que recebe files e rootDir
}

async function walk(files, rootDir) { //cria função que recebe os arquivos e o caminho raiz
    for (let file of files) { // percorre o objeto iterativo (Array) chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
        const fileFullPath = path.resolve(rootDir, file); // vai compor o nome do arquivo de acordo com o nome da pasta recebida
        const stats = await fs.stat(fileFullPath); //busca algumas info dos arquivos (se é diretorio ou não)
// A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise, e resume a execução da função async quando o valor da Promise é resolvido.
// Ele então retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida.

        if (/\.git/g.test(fileFullPath)) continue; //se houver arquivos.git ignora e continua para a proxima iteração (sem mostrar na tela)
        if (/node_modules/g.test(fileFullPath)) continue; //se houver arquivos do nodemodules ignora e continua para a proxima iteração

        if (stats.isDirectory()) { //se for diretorio 
            readdir(fileFullPath); //puxa a função e checa se há arquivos. Se houver mostrara os arquivos na tela
            continue;  //continua para a proxima iteração do laço
        }
        console.log(fileFullPath);

        /* Para mostrar arquivos especificos, se faz assim
        if (
            !/\.html$/g.test(fileFullPath) mostrará apenas os arquivos .html
        ) continue;
        console.log(fileFullPath);  */
    }
}
readdir('C:/Users/User/OneDrive/Documentos/NodeJS/'); // executa a função pelo caminho pelo qual será feita a listagem