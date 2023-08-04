// Testando asserções

// DESCRIBE é usado para agrupar os testes
describe('Primitive values', () => {
  // O ideal é um teste para cada coisa
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeLessThan(11); // Checando se é menor que 11
    expect(number).toBeLessThanOrEqual(10); // Checando se é menor ou igual a 10

    expect(number).toBeCloseTo(10.001); // Checando se está perto de 10
    expect(number).toBeCloseTo(9.996); // Checando se está perto de 10

    expect(number).not.toBeNull(); // Checando se o objeto não é nulo

    expect(number).toHaveProperty('toString'); // Checando se uma propriedade existe dentro de number
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBe(10); // Checando a igualdade -> para valores primitivos
    expect(number).toEqual(10); // Checando a igualdade -> Melhor para checar objetos

    expect(number).not.toBeNull(); // Checando se não é nulo
    expect(number).not.toBeFalsy(); // Checando se não é falsy
    expect(number).toBeTruthy(); // Checando se é verdadeiro

    expect(number).toBeGreaterThan(9); // Checando se é maior que 9
    expect(number).toBeGreaterThanOrEqual(10); // Checando se é maior ou igual a 10
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Rodrigo', age: 25 };
    const anotherPerson = { ...person };

    expect(person).toBe(anotherPerson); // Vai falhar
    expect(person).toEqual(anotherPerson); // Vai passar
    expect(person).toHaveProperty('age'); // Checando se a propriedade existe dentro do objeto
    expect(person).not.toHaveProperty('lastName'); // Checando se a propriedade não existe dentro do objeto
    expect(person).toHaveProperty('age', 25); // Checando se a propriedade existe dentro do objeto e tem um valor de 25

    expect(person.name).toBe('Rodrigo'); // Checando coisas dentro do objeto
  });
});
