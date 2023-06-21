const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(10,12)).toBe(22);
    //
})

test('substracts a - b', () => {
    expect(calculator.substract(10,6)).toBe(4);
   //
})

test('multiplies a * b', () => {
    expect(calculator.multiply(10,5)).toBe(50);
    //
})

test('divides a / b', () => {
    expect(calculator.divide(5,2)).toBe(2.5);
    // Consider decimals
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,3)).toBe(8);
    //
})

