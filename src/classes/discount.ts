// Criando a classe abstrata e acrescentando o método de para calcular o desconto
export abstract class Discount {
  // Desconto padrão é zero
  protected discount = 0;

  // Calculando o valor do desconto
  calculate(price: number): number {
    // Retornando o valor ja com o desconto
    return price - price * this.discount;
  }
}

// Criando a classe para calcular -> Elas são estendidas de Discount

export class FiftyPercentDiscount extends Discount {
  // O valor do desconto 0.5 = 50% de desconto
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  // O valor do desconto 0.1 = 10% de desconto
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
