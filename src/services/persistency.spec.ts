// Primeiro parâmetro é a descrição e depois a função

describe('Testando alguma coisa', () => {
  it(`should return one`, () => {
    const number = 1;
    // negando
    expect(number).not.toBe(2);
  });
});

describe('Testando outra coisa', () => {
  test(`should return Rodrigo`, () => {
    const nome = 'Rodrigo';
    expect(nome).toBe('Rodrigo');
  });
});
