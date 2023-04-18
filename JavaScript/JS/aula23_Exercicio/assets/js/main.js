const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');  // seleciona todos os parágrafos <p>

const estilosBody = getComputedStyle(document.body); //pega o estilo computado do navegador do body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {  // itera cada paragrafo 
    p.style.backgroundColor = backgroundColorBody;  // muda a cor de fundo do paragrafo
    p.style.color = '#FFFFFF';  // muda a cor do texto
}