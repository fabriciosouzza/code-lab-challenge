import { ProductData } from "../types";

/**
 * Classe que gerencia o estoque de produtos.
 *
 * Regras:
 * - Cada produto é identificado pelo seu `id`.
 * - `addStock` adiciona quantidade ao estoque de um produto.
 * - `removeStock` remove quantidade do estoque. Deve lançar Error se não houver estoque suficiente.
 * - `getStock` retorna a quantidade em estoque (0 se o produto não existir).
 * - `hasEnough` verifica se existe estoque suficiente para a quantidade solicitada.
 *
 * @example
 * const inventory = new Inventory();
 * const product = { id: "1", name: "Mouse", price: 120, category: "Eletrônicos" };
 * inventory.addStock(product, 10);
 * inventory.getStock("1")       // 10
 * inventory.hasEnough("1", 5)   // true
 * inventory.removeStock("1", 3) // OK, estoque fica 7
 */
export class Inventory {
  // TODO: Declare os campos privados para estoque e catálogo de produtos

  /**
   * Adiciona quantidade ao estoque de um produto.
   * Se o produto ainda não existe no inventário, registra-o.
   * Deve lançar Error se a quantidade for menor ou igual a zero.
   *
   * @param product - Os dados do produto.
   * @param quantity - A quantidade a adicionar.
   */
  addStock(product: ProductData, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Remove quantidade do estoque de um produto.
   * Deve lançar Error se o produto não existir no inventário.
   * Deve lançar Error se a quantidade solicitada for maior que o estoque disponível.
   *
   * @param productId - O ID do produto.
   * @param quantity - A quantidade a remover.
   */
  removeStock(productId: string, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna a quantidade em estoque de um produto.
   * Retorna 0 se o produto não existir no inventário.
   *
   * @param productId - O ID do produto.
   * @returns A quantidade em estoque.
   */
  getStock(productId: string): number {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Verifica se existe estoque suficiente para a quantidade solicitada.
   *
   * @param productId - O ID do produto.
   * @param quantity - A quantidade desejada.
   * @returns `true` se houver estoque suficiente.
   */
  hasEnough(productId: string, quantity: number): boolean {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna um array com todos os produtos cadastrados no inventário.
   * @returns Array de ProductData.
   */
  getProducts(): ProductData[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }
}
