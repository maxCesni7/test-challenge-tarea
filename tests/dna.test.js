const { default: expect } = require('expect');

const dna = require('../dna');

test('returns a new string with any non-canonical DNA base values removed', () => {
    expect(dna("GTAT")).toBe("CATA");
    //
})