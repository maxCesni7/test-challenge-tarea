const { default: expect } = require('expect');

const numfactorial = require('../factorial');

test('Calcula el factorial de un numero ', () => {
    expect(numfactorial(4)).toBe(24);
    //
})