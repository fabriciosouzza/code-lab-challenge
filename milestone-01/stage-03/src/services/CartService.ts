import { CartItem, Product } from "../types";

/**
 * Service responsável pelo gerenciamento de carrinhos de compra.
 *
 * Cada usuário possui seu próprio carrinho (identificado pelo userId).
 *
 * Responsabilidades:
 * - Criar/obter carrinho de um usuário.
 * - Adicionar produtos ao carrinho (somando quantidade se já existir).
 * - Remover produtos do carrinho.
 * - Calcular total do carrinho.
 * - Limpar carrinho após checkout.
 *
 * Validações:
 * - Quantidade deve ser maior que zero.
 */
export class CartService {
  // TODO: Declare o armazenamento interno de carrinhos (Map<userId, CartItem[]>)

  /**
   * Retorna os itens do carrinho de um usuário.
   * Se o carrinho não existir, retorna array vazio.
   */
  getCart(userId: string): CartItem[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Adiciona um produto ao carrinho do usuário.
   * Se o produto já existir no carrinho, soma a quantidade.
   * @throws Error se a quantidade for <= 0.
   */
  addToCart(userId: string, product: Product, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Remove um produto do carrinho do usuário.
   * @throws Error se o produto não estiver no carrinho.
   */
  removeFromCart(userId: string, productId: string): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Calcula o valor total do carrinho de um usuário.
   */
  getCartTotal(userId: string): number {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Limpa o carrinho de um usuário.
   */
  clearCart(userId: string): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }
}
