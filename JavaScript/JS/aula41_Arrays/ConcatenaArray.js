const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
//também é possível adicionar mais elementos em seguida:
//const a3 = a1.concat(a2, [7, 8, 9], "Maria");

//Também da para concatenar da seguinte maneira:
// ... rest -> ... spread
// const a3 = [...a1, ...a2,]; ou com itens add no meio do array:
// const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]]; 
console.log(a3);