/*
REQ.PARAMS -> Parâmetros de rota são segmentos de URL nomeados que são usados ​​para capturar os valores especificados
em sua posição na URL. Os valores capturados são preenchidos no req.paramsobjeto, com o nome do parâmetro
 de rota especificado no caminho como suas respectivas chaves.
---------------------------------------------------------------------------------------------------------------------------------
REQ.QUERRY -> é um objeto de solicitação preenchido por strings de consulta de solicitação localizadas em uma URL. 
Essas strings de consulta estão na forma de valor-chave. Eles começam depois do ponto de interrogação ? em qualquer URL. 
E se houver mais de um, eles são separados com o e comercial & . Veja o exemplo abaixo.

https://educative.io/user?name=Theodore&isAuthor=true
No código acima, as strings de consulta são name e isAuthor. Quando essa solicitação é feita, o req.query objeto é preenchido
com as strings de consulta.  -->  req.query = {name: "Theodore", isAuthor: true}
---------------------------------------------------------------------------------------------------------------------------------
REQ.BODY -> O objeto req.body permite acessar dados em uma string ou objeto JSON do lado do cliente. Geralmente, você usa o objeto 
req.body para receber dados por meio de solicitações POST e PUT no servidor Express.
*/

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
});

// o sinal ? define que o parametro pode ou não ser recebido
app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params); //:idUsuarios é o parametro que vai ser recebido na chave
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});