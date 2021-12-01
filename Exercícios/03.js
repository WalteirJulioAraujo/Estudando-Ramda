//Crie uma funçao que recebe um objeto e retorna o amount dele
const { prop } = require("ramda");

const transaction = { id: 5, amount: 5000 };
const getAmount = prop("amount");

console.log(getAmount(transaction));



//A função prop recebe 2 argumentos : a propriedade que vc quer e o objeto pra ele buscar
