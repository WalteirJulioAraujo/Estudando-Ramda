// Crie uma função que adiciona um numero a 5, multiplica por 2 e o retorne.
const {add,multiply,compose,pipe} = require("ramda");

const add5DoubleCompose = compose(multiply(2),add(5)) 

console.log(add5DoubleCompose(2))

const add5DoublePipe = pipe(add(5),multiply(2))

console.log(add5DoublePipe(2))

//Compose => Executa da direita pra esquerda, o ultimo elemento pode ter qualquer aridade, os outros devem ser unarios.
//Pipe => Executa da esquerda pra direita, o primeiro elemento pode ter qualquer aridade, os outros devem ser unarios.

//*Aridade: Na matemática a aridade de uma função ou operação é o número de argumentos ou operandos tomados.