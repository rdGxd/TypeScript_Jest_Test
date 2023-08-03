import { CartItem } from './interfaces/cart-item';

// Produtos
export class Product implements CartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
