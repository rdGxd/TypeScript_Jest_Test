// Primeiro parâmetro é a descrição e depois a função

import { Persistency } from './persistency';

describe('Persistency', () => {
  // Limpando os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  // Esse teste precisa retorna void
  it('should return undefined', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = new Persistency();

    // Eu espero que meu método não retorne nada
    expect(sut.saveOrder()).toBeUndefined();
  });

  // Esse teste vai verificar se o console.log foi chamado
  it('should call console.log once', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = new Persistency();

    // Jogando em uma variável uma coisa para o JEST observa
    const consoleSpy = jest.spyOn(console, 'log');

    // Verificando se o console.log foi chamado 1 vez
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  // Verificando qual o valor do console.log
  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = new Persistency();

    // Jogando em uma variável uma coisa para o JEST observa
    const consoleSpy = jest.spyOn(console, 'log');

    // Verificando se o console.log foi chamado 1 vez
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
