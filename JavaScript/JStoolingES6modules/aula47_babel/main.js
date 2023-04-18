/*
Babel é um transcompilador JavaScript gratuito e de código aberto que é usado principalmente para converter código ECMAScript 2015+ 
em código JavaScript compatível com versões anteriores que pode ser executado por mecanismos JavaScript mais antigos.

PARA INSTALAR O BABEL
npm install --save-dev @babel/cli @babel/preset-env @babel/core (versão atual)
ou -> npm install --save-dev @babel/cli@7.6.4 @babel/preset-env@7.6.3 @babel/core@7.6.4 (versão especifica )

// Para criar um arquivo base para transcrição (bundle.js) e transcrever o código do main.js para o bundle.js
npx babel main.js -o bundle.js --presets=@babel/env
*/

// CÓDIGO NORMAL (A SER TRANSCRITO)
const nome = "Hawston";
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);
