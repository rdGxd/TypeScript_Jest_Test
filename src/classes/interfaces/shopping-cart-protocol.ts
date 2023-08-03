import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  // Retornando os items que tem no carrinho
  items: Readonly<CartItem[]>; // Atributo

  // Adicionando o item ao carrinho
  addItem(item: CartItem): void;

  // Remover item do carrinho
  removeItem(index: number): void;

  // Fazendo o total
  total(): number;

  // Retornando o total com desconto
  totalWithDiscount(): number;

  // Checando se o carrinho ta vazio
  isEmpty(): boolean;

  // Limpando o array ( Carrinho )
  clear(): void;
}
