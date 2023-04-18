function meuEscopo() {
  const form = document.querySelector('.form');  //pega o conjunto de elementos input do html
  const resultado = document.querySelector('.resultado'); //pega a div resultado, onde os elementos ficarão registrados

  const pessoas = []; //cria um array vazio que posteriormente vai receber elementos

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');  //seleciona o que for digitado no input com class "nome"
    const sobrenome = form.querySelector('.sobrenome'); //seleciona o que for digitado no input com class "sobrenome"
    const peso = form.querySelector('.peso'); //seleciona o que for digitado no input com class "peso"
    const altura = form.querySelector('.altura'); //seleciona o que for digitado no input com class "altura"

    pessoas.push({ //metodo push anexa novos elementos no array
      nome: nome.value, //propriedade nome que recebe valor digitado no input "nome"
      sobrenome: sobrenome.value, //propriedade nome que recebe valor digitado no input "sobrenome"
      peso: peso.value, //propriedade nome que recebe valor digitado no input "peso"
      altura: altura.value //propriedade nome que recebe valor digitado no input "altura"
    });

    console.log(pessoas); //mostra os elementos do array pessoas

    resultado.innerHTML += `<p>NOME: ${nome.value} ${sobrenome.value}/  ` + `PESO: ${peso.value}/ ALTURA: ${altura.value}  </p>`;
  } //Mostra os dados adicionados

  form.addEventListener('submit', recebeEventoForm); //metodo da div resultado vai receber resultados de dentro da função "recebeEventoForm"
  // ou seja, faz uma ligação entre função e div
}
meuEscopo();  //inicia a função