const sumar = require('./sumar');

test('Sumar 5 y 3 debe ser igual a 8', () => {
       expect(sumar(5, 3)).toBe(8);
 });

 test('Sumar 10 y 0 debe ser igual a 10', () => {
    expect(sumar(10, 0)).toBe(10);
});

test('Sumar -7 y 5 debe ser igual a -2', () => {
    expect(sumar(-7, 5)).toBe(-2);
});

test('Sumar 9 y -3 debe ser igual a 6', () => {
    expect(sumar(9,-3)).toBe(6);
});

test('Sumar 6.5 y 3.5 debe ser igual a 10', () => {
    expect(sumar(6.5, 3.5)).toBe(10);
});