import { Product, StockEntry } from "../types";

/**
 * Service responsável pelo gerenciamento de estoque.
 *
 * Responsabilidades:
 * - Adicionar estoque para um produto.
 * - Remover estoque (dar baixa).
 * - Consultar estoque disponível.
 * - Verificar disponibilidade.
 * - Registrar vendas para gerar relatórios.
 *
 * Validações:
 * - Quantidade deve ser maior que zero.
 * - Não pode remover mais do que o disponível.
 * - Produto deve existir para operações de remoção/consulta.
 */
export class InventoryService {
  // TODO: Declare o armazenamento interno de estoque e vendas

  /**
   * Adiciona quantidade ao estoque de um produto.
   * @throws Error se a quantidade for <= 0.
   */
  addStock(product: Product, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Remove quantidade do estoque.
   * @throws Error se não houver estoque suficiente.
   */
  removeStock(productId: string, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna a quantidade em estoque de um produto.
   * Retorna 0 se o produto não existir no inventário.
   */
  getStock(productId: string): number {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Verifica se há estoque suficiente.
   */
  hasEnough(productId: string, quantity: number): boolean {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Registra uma venda (usado internamente após checkout).
   * Armazena o produto, quantidade vendida e valor para relatórios.
   */
  recordSale(product: Product, quantity: number): void {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna todas as entradas de estoque.
   */
  getAllStock(): StockEntry[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }
}
