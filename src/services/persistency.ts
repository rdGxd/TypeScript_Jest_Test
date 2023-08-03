import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  // Salvando a ordem de pedido
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
