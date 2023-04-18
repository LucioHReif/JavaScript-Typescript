
function retornaHora(data) {
  if (data && !(data instanceof Date)) {   //se 'data' não for instancia(formato) de 'Date', há erro
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {  //retorna data local
    hour: '2-digit',   //datas com 2 digitos
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  // Tratar erro
  console.log('Esperando instância de Date.');
} finally {  //executado sempre
  console.log('Tenha um bom dia.');
}