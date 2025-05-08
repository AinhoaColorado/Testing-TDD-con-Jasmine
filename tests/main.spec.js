// Ejercicio 1: Verificar si un número es par

describe("esPar testing", () => {
  it("should be a function called esPar", () => {
    expect(typeof esPar).toEqual("function");
  });
  it("should receive a number and return true if the number is even, or false if it is odd.", () => {
    expect(typeof esPar()).toEqual("boolean");
  });
});

// Ejercicio 2: Calcular el factorial de un número
describe("factorial test", () => {
  it("should exist something named factorial", () => {
    expect(factorial).not.toBe(undefined);
  });

  it("should be a function", () => {
    expect(typeof factorial).toBe("function");
  });

  it("should return 1 for 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return correct factorial values", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });
});
