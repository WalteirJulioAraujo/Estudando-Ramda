// Devemos, usando ramda, criar um funçao que recebe um parametro e retorna esse parametro mais 10
const { add } = require("ramda");

const add10 = add(10); //isso vai retornar uma segunda funçao que espera uma outra variavel pra realizar a conta.

console.log(add10(8));
