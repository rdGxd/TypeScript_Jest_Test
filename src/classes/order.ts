import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { OrderStatus } from './interfaces/order-status';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

// Uma classe pode ser considerada coesa quando ela utiliza seus atributos dentro de seus métodos

// Order é uma classe de alto nível
export class Order {
  private _orderStatus: OrderStatus = 'Open';

  // Injetando dependências na classe
  constructor(
    // Essas são classes de baixo nível
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrderProtocol,
  ) {}

  // Retornando a ordem de status
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // Checando o carrinho
  checkOut(): void {
    // Verificando se o carrinho está vazio
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho está vazio');
      return;
    }

    // Fechando a ordem
    this._orderStatus = 'Closed';

    // Enviando mensagem
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this.cart.totalWithDiscount()} foi recebido.`,
    );

    // Salvando a ordem de pedido
    this.persistency.saveOrder();

    // Limpando o carrinho
    this.cart.clear();
    console.log(
      `O cliente é: ${(this.customer.getName(), this.customer.getIDN())}`,
    );
  }
}
