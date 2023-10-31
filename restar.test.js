const restar = require('./restar');

test(' restar 8 y 5 debe ser igual a 3', () => {
    expect(restar(8, 5)).toBe(3);
});

test('restar 0 y 0 debe ser igual a 0', () => {
    expect(restar(0, 0)).toBe(0);
});

test('restar -2 y 10 debe ser igual a -12', () => {
    expect(restar(-2, 10)).toBe(-12);
});

test('restar 8.5 y 2.3 debe ser igual a  6.2', () => {
    expect(restar(8.5, 2.3)).toBe( 6.2);
});

test('restar -5 y 5 debe ser igual a -10', () => {
    expect(restar(-5, 5)).toBe(-10);
});