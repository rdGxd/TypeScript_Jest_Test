import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

// Talvez poderia ser uma função
export class Messaging implements MessagingProtocol {
  // Enviando uma mensagem para o cliente
  sendMessage(msg: string): void {
    console.log(`Mensagem enviada ${msg}`);
  }
}
