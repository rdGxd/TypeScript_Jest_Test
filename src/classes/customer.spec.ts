// Primeiro parâmetro é a descrição e depois a função

import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

// Limpando os mocks depois de cada teste
afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createIndividualCustomer('Rodrigo', 'Silva', '000.000');

    // Checando as propriedades
    expect(sut).toHaveProperty('firstName', 'Rodrigo');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '000.000');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Silva', '000.000');

    // Checando os métodos
    expect(sut.getName()).toBe('Rodrigo Silva');
    expect(sut.getIDN()).toBe('000.000');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    // Sempre vamos chamar a classe que está sendo testada de SUT -> System under test
    const sut = createEnterpriseCustomer('Big House', '0000.0000');

    // Checando as propriedades
    expect(sut).toHaveProperty('name', 'Big House');
    expect(sut).toHaveProperty('cnpj', '0000.0000');
  });

  it('should have methods get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Big House', '0000.0000');

    // Checando os métodos
    expect(sut.getName()).toBe('Big House');
    expect(sut.getIDN()).toBe('0000.0000');
  });
});
