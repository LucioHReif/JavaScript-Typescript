const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById('numero-titulo'); //pega elemento por id
const texto = document.getElementById('texto');  //pega elemento por id

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>Raíz Quadrada: ${numero ** 0.5}.</p>`;  //calcula raiz quadrada
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}.</p>`;  //verifica se é um numero ou NaN
texto.innerHTML += `<p>A raíz quadrada de ${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;  //verifica se é inteiro
texto.innerHTML += `<p>Arredondando a raíz quadrada de ${numero} para baixo: ${Math.floor(numero ** 0.5)}.</p>`;  //arredonda para baixo
texto.innerHTML += `<p>Arredondando raíz quadrada de ${numero} para cima: ${Math.ceil(numero ** 0.5)}.</p>`;  //arredonda para cima
texto.innerHTML += `<p>Com duas casas decimais, raíz quadrada de ${numero} fica: ${numero.toFixed(2)}.</p>`;  //duas casas após a virgula
