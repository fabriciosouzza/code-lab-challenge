/**
 * Classe que representa um Produto no sistema.
 *
 * Regras:
 * - `id` e `name` são obrigatórios (não podem ser vazios).
 * - `price` deve ser um número positivo.
 * - `category` é obrigatória (não pode ser vazia).
 * - Todas as propriedades devem ser acessíveis via getters.
 * - O preço pode ser atualizado via `setPrice`, com validação.
 *
 * O construtor deve lançar Error se qualquer validação falhar.
 *
 * @example
 * const product = new Product("1", "Notebook", 3500, "Eletrônicos");
 * product.name   // "Notebook"
 * product.price  // 3500
 * product.setPrice(3200); // OK
 * product.setPrice(-1);   // throws Error
 */
export class Product {
  // TODO: Declare os campos privados

  constructor(id: string, name: string, price: number, category: string) {
    // TODO: Valide os parâmetros e atribua aos campos privados
    throw new Error("Não implementado");
  }

  get id(): string {
    // TODO: Retorne o id
    throw new Error("Não implementado");
  }

  get name(): string {
    // TODO: Retorne o nome
    throw new Error("Não implementado");
  }

  get price(): number {
    // TODO: Retorne o preço
    throw new Error("Não implementado");
  }

  get category(): string {
    // TODO: Retorne a categoria
    throw new Error("Não implementado");
  }

  /**
   * Atualiza o preço do produto.
   * Deve lançar Error se o novo preço não for positivo.
   *
   * @param newPrice - O novo preço.
   */
  setPrice(newPrice: number): void {
    // TODO: Valide e atualize o preço
    throw new Error("Não implementado");
  }
}
