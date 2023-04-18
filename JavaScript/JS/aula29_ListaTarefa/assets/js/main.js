/* Exemplo de Adicionar tarefas
Funções de:
-adicionar nova tarefa
-criar lista
-adicionar botão apagar ao lado da tarefa
-remover tarefa da lista
-limpar input 
-deixar lista salva mesmo após reiniciar a página
-
*/
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li'); //cria elemento lista
  return li; // retorna valor relacionado à lista
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {  //codigo da tecla
    if (!inputTarefa.value) return;  // se n tiver nada escrito não retorna nada
    criaTarefa(inputTarefa.value);  //retorna função de add tarefa ao pressionar 'Enter'
  }
});

function limpaInput() {
  inputTarefa.value = ''; // limpa o valor (palavra) no input
  inputTarefa.focus(); // volta o foco pro input, permitindo escrever
  // sem ter que clicar no input primeiro
}

function criaBotaoApagar(li) {  //função de criar botão ao lado do item criado
  li.innerText += ' ';  //adiciona um espaço ao lado do texto criado
  const botaoApagar = document.createElement('button'); //cria const como elemento botão
  botaoApagar.innerText = 'Apagar'; //texto que vai dentro do botão
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');  //cria uma classe com valor através do Attribute
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //cria uma classe com valor através do Attribute
  li.appendChild(botaoApagar);  //adiciona o botão ao lado da tarefa
}

function criaTarefa(textoInput) {  //função de criar lista de tarefas
  const li = criaLi();  //puxa a função de criar lista
  li.innerText = textoInput;  //atribui a lista ao objeto textoInput
  tarefas.appendChild(li); //adiciona a tarefa na 'ul' 
  limpaInput();  //puxa a função de limpar o input
  criaBotaoApagar(li); //puxa a função de criar botão de apagar na lista
  salvarTarefas(); //puxa a função de deixar tarefa salva ao reiniciar a página
}

btnTarefa.addEventListener('click', function () { //adiciona evento de click
  if (!inputTarefa.value) return; // se n tiver nada escrito não retorna nada
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) { //adiciona evento de click
  const el = e.target; //atribui elemento ao click

  if (el.classList.contains('apagar')) { //se elemento conter classe 'apagar'
    el.parentElement.remove();       //então remove o elemento 'pai' da lista
    salvarTarefas();  //puxa a função de deixar tarefa salva ao reiniciar a página
  }
});

function salvarTarefas() { //cria a função de salvar itens da lista em uma mini BD (localStorage)
  const liTarefas = tarefas.querySelectorAll('li'); //seleciona os textos adicionados
  const listaDeTarefas = [];  //cria const de array vazio

  for (let tarefa of liTarefas) {  //itera tarefa à lista de tarefa
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //troca a palavra apagar, que aparece no  por nada
    listaDeTarefas.push(tarefaTexto);                       //aparece no console ao clicar no botão por nada
    //joga texto criado pra dentro da array
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); //cria uma string do array convertido para JSON 
  //(permite recuperar valores e converte em um arrray)
  localStorage.setItem('tarefas', tarefasJSON); //deixa armazendo os itens 'string' da lista
}

function adicionaTarefasSalvas() { //recupera tarefas adicionadas
  const tarefas = localStorage.getItem('tarefas'); //busca itens da classe tarefas
  const listaDeTarefas = JSON.parse(tarefas); //converte string para o array

  for (let tarefa of listaDeTarefas) { //itera tarefa à lista de tarefa
    criaTarefa(tarefa); //puxa os itens adicionados da função de adicionar tarefa
  }
}
adicionaTarefasSalvas(); //chama a função
