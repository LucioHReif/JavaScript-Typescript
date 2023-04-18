/*
API Fetch - provê ao navegador uma interface para a execução de requisições HTTP através de Promises.
A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. 
Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

AXIOS - Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. 
É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). 
No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.
No index.html é instalado através de uma CDN do unpkg: <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
*/

fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

/* NA FORMA DO AXIOS
 axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data));
  */

function carregaElementosNaPagina(json) {
  const table = document.createElement('table'); //cria elemento tabela

  // TR define uma linha numa tabela, que terá número de linhas igual ao número de tags TR encontradas.
  // TD significa "Table Data" e define cada uma das células da tabela.
  // Com o appendChild, o elemento TD é inserido dentro do elemento pai (TR)

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
