// Primeiro parâmetro é a descrição e depois a função

import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  // Limpando os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut('Camiseta', 49.9);

    // Checando as propriedades
    // expect(sut.name).toBe('Camiseta');
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
