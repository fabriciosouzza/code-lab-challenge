import { ProductData, CartItemData } from "../types";

/**
 * Classe que representa um Carrinho de Compras.
 *
 * Regras:
 * - Ao adicionar um produto que já existe no carrinho, a quantidade deve ser somada.
 * - A quantidade deve ser sempre maior que zero.
 * - `getTotal()` deve retornar a soma de (preço × quantidade) de todos os itens.
 * - `clear()` deve esvaziar o carrinho.
 *
 * @example
 * const cart = new Cart();
 * cart.addItem({ id: "1", name: "Mouse", price: 120, category: "Eletrônicos" }, 2);
 * cart.getTotal() // 240
 * cart.getItems() // [{ product: {...}, quantity: 2 }]
 */
export class Cart {
  // TODO: Declare o campo privado para armazenar os itens

  /**
   * Adiciona um produto ao carrinho.
   * Se o produto já existir, soma a quantidade.
   * Deve lançar Error se a quantidade for menor ou igual a zero.
   *
   * @param product - O produto a ser adicionado.
   * @param quantity - A quantidade a adicionar.
   */
  addItem(product: ProductData, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Remove completamente um produto do carrinho pelo ID.
   * Deve lançar Error se o produto não estiver no carrinho.
   *
   * @param productId - O ID do produto a remover.
   */
  removeItem(productId: string): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Atualiza a quantidade de um produto no carrinho.
   * Deve lançar Error se o produto não existir no carrinho.
   * Deve lançar Error se a nova quantidade for menor ou igual a zero.
   *
   * @param productId - O ID do produto.
   * @param quantity - A nova quantidade.
   */
  updateQuantity(productId: string, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna todos os itens do carrinho.
   * @returns Array de CartItemData.
   */
  getItems(): CartItemData[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Calcula e retorna o valor total do carrinho.
   * @returns A soma de (preço × quantidade) de cada item.
   */
  getTotal(): number {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Remove todos os itens do carrinho.
   */
  clear(): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }
}
