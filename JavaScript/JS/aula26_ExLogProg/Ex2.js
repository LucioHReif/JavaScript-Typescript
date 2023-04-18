// Escreva uma função chamada ePaisagem que que recebe dois argumentos, 
//largura e altura  de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) =>
    largura > altura;

console.log(ePaisagem(1080, 1920));  // atribui valor para largura e altura
// se largura for maior que altura então está no modo paisagem
/*-----------------------------------------------------------------------------
function ePaisagem (largura, altura) {
    if (largura > altura) {
        return true
    } else {
        return false
    }
}
console.log(ePaisagem(1080, 1920));
*/