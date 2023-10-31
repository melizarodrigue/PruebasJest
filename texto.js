//Funcion de suma de dos numeros

function sumar(a,b){
    return a+b;
}

// Pruebas de la funcion suma

console.log("Prueba 1: ", sumar(5, 3) === 8);
console.log("Prueba 2: ", sumar(10, 0) === 10);
console.log("Prueba 3: ", sumar(-7, 5) === -2);
console.log("Prueba 4: ", sumar(9, -3) === 6);
console.log("Prueba 5: ", sumar(6.5, 3.5 ) === 10);

//test('Sumar 2 y 3 debe ser igual a 5', () => {
//    expect(sumar(2, 3)).toBe(5);
//  });

//Funcion de resta de dos numeros

function restar(a, b) {
    return a - b;
  }
  
  //Prueba para la funciÃ³n restar
  console.log("Prueba 1: ", restar(8, 5) === 3);
  console.log("Prueba 2: ", restar(0, 0) === 0);
  console.log("Prueba 3: ", restar(10, -2) === -12);
  console.log("Prueba 4: ", restar(8.5, 2.3) === 6.2);
  console.log("Prueba 5: ", restar(-5, 5) === -10);

// Funcion Multiplicacion de dos numeros

function multi(a,b) {
    return a*b;
}

// Prueba de la funcion multi

console.log("Prueba 1: ", multi(5, 2) === 10);
console.log("Prueba 2: ", multi(6, 2) === 12);
console.log("Prueba 3: ", multi(-7, 8) === -56);
console.log("Prueba 4: ", multi(12, -2) === -24);
console.log("Prueba 5: ", multi(9.5, 4) === 38);

//Funcion division de dos numeros

function division(a,b) {
    return a / b;
}

// Prueba de la funcion division

console.log("Prueba 1: ", division(8, 2) === 4);
console.log("Prueba 2: ", division(10, 5) === 2);
console.log("Prueba 3: ", division(-4, 2) === -2);
console.log("Prueba 4: ", division(15, 3) === 5);
console.log("Prueba 5: ", division(7.5, 2.5) === 3);

// Funcion de hallar area de un triangulo

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}

//Pruebas de la funcion areaTriangulo

console.log("Prueba 1: ", areaTriangulo(9, 2) === 9);
console.log("Prueba 2: ", areaTriangulo(15, 8) === 60);
console.log("Prueba 3: ", areaTriangulo(9, 6) === 27);
console.log("Prueba 4: ", areaTriangulo(3, 2) === 3);
console.log("Prueba 5: ", areaTriangulo(13, 5) === 32.5);