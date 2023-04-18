//ESCREVENDO E LENDO ARQUIVOS

const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //direciona o arquivo que vai receber os valores
const escreve = require('./modules/escrever'); //puxa o arquivo escrever
const ler = require('./modules/ler'); //puxa o arquivo ler

const pessoas = [ //cria array com propriedades e valores
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];
const json = JSON.stringify(pessoas, '', 2); //converteu o arquivo criado anteriormente para .json com os valores da array pessoas
escreve(caminhoArquivo, json); //puxa a função de escrever valores no arquivo

async function leArquivo(caminho) { //função de ler
  const dados = await ler(caminho);  //vai retornar uma promise
  renderizaDados(dados); //puxa a função de converter
}

function renderizaDados(dados) { //função para converter dados do array para objeto
  dados = JSON.parse(dados); //"converte" os dados para objeto (tira da array)
  dados.forEach(val => console.log(val.nome)); //mostra os nomes a cada iteração do laço
}
leArquivo(caminhoArquivo); //ativa a função

