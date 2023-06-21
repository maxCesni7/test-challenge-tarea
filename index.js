const calculator = require('./calculator');
const users = require('./users');
const factnum = require('./factorial');
const fizzBuzz = require('./fizzBuzz');
const dna = require('./dna');



console.log(calculator.power(2,4));
console.log(users.getUser(1));
console.log(users.getUsers());
console.log(factnum(4));
console.log(fizzBuzz(3));
console.log(dna("GTAT"));

const myArray = [1, 2, 3, 4, 5];

const x = myArray.splice(2, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

// Write your code here if you need