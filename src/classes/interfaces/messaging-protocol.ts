export interface MessagingProtocol {
  // Enviando uma mensagem para o cliente
  sendMessage(msg: string): void;
}
