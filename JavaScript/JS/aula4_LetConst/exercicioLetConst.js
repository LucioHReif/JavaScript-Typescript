// Exemplo let e const

const nome = 'Lúcio';
const sobrenome = 'Reif';
const idade = 19;
const peso = 75;
const alturaEmM = 1.70; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

// ${} é usado ao invés da estrutura: nomevar, ou + "texto texto"; 