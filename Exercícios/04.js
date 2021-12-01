//Crie uma função que recebe um array de objetos, e retorne a soma de todos os propriedades amount

const { forEach, pipe, map, sum, prop } = require("ramda");

const transactions = [
  { amount: 1000 },
  { amount: 2000 },
  { amount: 3000 },
  { amount: 4000 },
];

//Forma 1 de fazer(usando forEach)
let amountTotal = 0;
const sumAmount = (x) => amountTotal += x.amount;
const sumAmounts = pipe(forEach(sumAmount,transactions),console.log(amountTotal));

//A função forEach executa uma função pra cada elemento do array


//Forma 2 de fazer(usando map)
const sumAmountsMap = pipe(map(prop('amount')),sum());
console.log(sumAmountsMap(transactions));

//A sum() soma todos os elementos de uma lista