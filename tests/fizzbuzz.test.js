const { default: expect } = require('expect');

const fizzBuzz = require('../fizzBuzz');

test('Determinar si un numero es divisible entre 3 o 5 ', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    //
})