// Declaração de função (Function hoisting)
// Da pra botar a execução da função antes, desde que ela seja declarada primeiro
falaOi(); //executa função
function falaOi() {
  console.log('Oie');
}
//-------------------------------------------------------------------------------------
// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () { //a função é tratado como um dado de uma var ou const
  console.log('Sou um dado.');
};
souUmDado(); //executa função
//-------------------------------------------------------------------------------------
// Arrow function 
const funcaoArrow = () => {  //função "abreviada"
  console.log('Sou uma arrow function');
};
funcaoArrow(); //executa função

/*const funcaoArrow = function () { 
  console.log('Sou uma arrow function');
}; funcaoArrow();
*/
//-------------------------------------------------------------------------------------
// Dentro de um objeto
/*
const obj = {
  falar: function() {
    console.log('Estou falando...');
  }
};
obj.falar();
*/
const obj = {
  falar() {  //função atrelada a um atributo
    console.log('Estou falando...');
  }
};
obj.falar(); //executa função