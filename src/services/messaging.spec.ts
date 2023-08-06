// Primeiro parâmetro é a descrição e depois a função

import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  // Limpando os mocks depois de cada teste
  afterEach(() => jest.clearAllMocks());

  // Esse teste precisa retorna void
  it('should return undefined', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut();

    // Eu espero que meu método não retorne nada
    expect(sut.sendMessage('jest')).toBeUndefined();
  });

  // Esse teste vai verificar se o console.log foi chamado
  it('should call console.log once', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut();

    // Jogando em uma variável uma coisa para o JEST observa
    const consoleSpy = jest.spyOn(console, 'log');

    // Verificando se o console.log foi chamado somente 1 vez
    sut.sendMessage('jest');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  // Verificando qual o valor do console.log
  it('should call console.log with "Mensagem enviada:" and msg', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createSut();

    // Jogando em uma variável uma coisa para o JEST observa
    const consoleSpy = jest.spyOn(console, 'log');

    // Verificando se o console.log foi chamado 1 vez
    sut.sendMessage('jest');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada: jest');
  });
});
