// Primeiro parâmetro é a descrição e depois a função

import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  // Limpando os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut(FiftyPercentDiscount);

    expect(sut.calculate(150.5)).toBe(75.25);
  });

  it('should apply 10% discount on price', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut(TenPercentDiscount);

    expect(sut.calculate(100)).toBe(90);
  });
});
