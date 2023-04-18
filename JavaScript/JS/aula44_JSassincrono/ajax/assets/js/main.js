/*
AJAX significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto XMLHttpRequest para 
se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma 
variedade de formatos, incluindo JSON, XML, HTML, e até mesmo arquivos de texto, sem a necessidade de atualizar a página. 
Isso permite a você atualizar partes de uma página com base em eventos do usuário.

XMLHttprequest - é utilizada para enviar requisições HTTP ou HTTPS diretamente para um servidor web
e carregar os dados de resposta do servidor diretamente de volta ao script.
*/
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => { //checa quando a requisição terminou de ocorrer
      if (xhr.status >= 200 && xhr.status < 300) {  //codigo de estado, maior que 300 considera-se erro
        resolve(xhr.responseText);  //se der certo, mostra o texto
      } else {
        reject(xhr.statusText); //se der erro, mostra o status da pagina
      }
    });
  });
};

document.addEventListener('click', e => { //evento ao clicar no link
  const el = e.target; //instancia elemento com target
  const tag = el.tagName.toLowerCase(); //converte o elemento da tag para letras minusculas

  if (tag === 'a') { //se a tag for a, então carrega o evento carregaPagina do elemento
    e.preventDefault(); //cancela o evento (seguir link) sem parar a propagação do mesmo
    carregaPagina(el); //evento/metodo que vai buscar o elemento el (link tag)
  }
});

async function carregaPagina(el) { // async function como evento de carregar a pagina
  const href = el.getAttribute('href'); //pega a tag href (link) do elemento el (pagina)

  const objConfig = { //cria const
    method: 'GET', //metodo que vai buscar a mensagem do link
    url: href //referencia do link (nesse caso todos os href do html)
  };

  try { //englobar todos os links
    const response = await request(objConfig); //instancia const que vai fazer a ligação do servidor aos links
    carregaResultado(response); //puxa metodo
  } catch (e) {  //se der erro, puxa o elemento onde ocorre
    console.log(e);  //mostra o elemento com erro
  }
}

function carregaResultado(response) {  //função que vai buscar o texto das paginas
  const resultado = document.querySelector('.resultado');  //instancia a const com a classe div do html
  resultado.innerHTML = response;  //mostra o texto das paginas no html
}

/* Outra forma
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error('ERRO 404!');

    const html = await response.text();
    carregaResultado(html);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}


*/