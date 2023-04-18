/*
NODEMON - para evitar reiniciar o output toda vez que houver uma modificação
O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor

DIRETAMENTE PELO TERMINAL:
npm install nodemon --save-dev  ->  instala nas dependencias do desenvolvedor
npx nodemon server.js -> inicializa o arquivo e fica observando e salvando as alterações a serem feitas (atualiza automaticamente)

OU NO package.json: dentro do script, adicionar a , após a linha do "test" e criar o "start": "node server.js"
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
Após isso, escrever: "npm start" para iniciar o codigo
*/
const express = require('express'); //como o express está dentro do node modules, não precisa de um caminho especifico
const app = express(); //executa/carrega o express

//          Criar   ler   atualizar apagar
// CRUD ->  CREATE, READ, UPDATE,   DELETE
// METODO -> POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {  //1° parametro(/) - rota /  2° parametro - função, que recebe a requisição e resposta
  res.send(`<form action="/" method="POST">  
  Nome: <input type="text" name="nome">
  <button>Enviar</button> </form>`); //formulario que recebe nome pelo input e envia(post) pro get
});

app.post('/', (req, res) => { //vai criar os dados e enviar para o get da mesma rota ("/")
  res.send('Recebi o formulário'); //mensagem a ser exibida pelo get da rota
});

app.get('/contato', (req, res) => { //vai pegar a mensagem abaixo na rota ("/")
  res.send('Obrigado por entrar em contato com a gente.'); //mensagem a ser exibida pelo get da rota
});

app.listen(3000, () => { //porta onde será feito a requisição
  console.log('Acessar http://localhost:3000'); //função exibe mensagem
  console.log('Servidor executando na porta 3000'); //função exibe mensagem
});