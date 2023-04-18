function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;  //se numero for menor que 10, retorna um 0 antes do numero
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());  //dia
  const mes = zeroAEsquerda(data.getMonth() + 1); //mês
  const ano = zeroAEsquerda(data.getFullYear()); //ano
  const hora = zeroAEsquerda(data.getHours()); //hora
  const min = zeroAEsquerda(data.getMinutes()); //minutos
  const seg = zeroAEsquerda(data.getSeconds()); //segundos

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date(); //const data com construtor
const dataBrasil = formataData(data); //dataBrasil mostra a função que recebe a data
console.log(dataBrasil); //mostra data atual