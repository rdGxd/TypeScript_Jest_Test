// Primeiro faça o código do seu jeito depois aplique o S.O.L.I.D

import { Discount } from './discount'; // Pode ser considerada um PROTOCOL tbm
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

// Uma classe pode ser considerada coesa quando ela utiliza seus atributos dentro de seus métodos

// Criando a classe -> Alto nível
export class ShoppingCart implements ShoppingCartProtocol {
  // O carrinho de compras precisa ter items
  private readonly _items: CartItem[] = [];

  // Colocando dependência na classe -> Sempre que eu colocar uma dependência na classe vou usar o private readonly pois não quero altera o método

  // Baixo nível -> discount
  constructor(private readonly discount: Discount) {}

  // Adicionando o item ao carrinho
  addItem(item: CartItem): void {
    this._items.push(item);
  }

  // Remover item do carrinho
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  // Retornando os items que tem no carrinho
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // Fazendo o total
  total(): number {
    // o .toFixed retorna uma string então convertemos para number antes de retorna
    return Number(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  // Retornando o total com desconto
  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  // Checando se o carrinho ta vazio
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Limpando o array ( Carrinho )
  clear(): void {
    console.log('Carrinhos de compras foi limpo');
    this._items.length = 0;
  }
}
