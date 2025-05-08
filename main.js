// Ejercicio 1: Verificar si un número es par

// Descripción:
// - Escribe una función llamada esPar
// - que reciba un número y devuelva true si el número  es par, o false si es impar.

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Ejercicio 2: Calcular el factorial de un número

// Descripción: Escribe una función llamada factorial que reciba un número entero no negativo y devuelva su factorial. Si el número es 0, debe devolver 1.

function factorial(n) {
  if (n === 0) return 1;

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}


