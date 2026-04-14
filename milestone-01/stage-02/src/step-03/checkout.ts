import { Cart } from "./Cart";
import { Inventory } from "./Inventory";
import { CheckoutResult } from "../types";

/**
 * Processa o checkout de um carrinho contra o inventário.
 *
 * Para cada item no carrinho:
 * - Se o inventário tiver estoque suficiente: dá baixa no estoque e adiciona aos itens processados.
 * - Se NÃO tiver estoque suficiente: adiciona aos itens indisponíveis (com a quantidade disponível).
 *
 * Após processar todos os itens, o carrinho deve ser esvaziado.
 * O total deve ser calculado a partir dos itens processados (preço × quantidade).
 *
 * Deve lançar Error se o carrinho estiver vazio.
 *
 * @example
 * const cart = new Cart();
 * const inventory = new Inventory();
 * // ... adicionar produtos e estoque ...
 * const result = processCheckout(cart, inventory);
 * // { processed: [...], unavailable: [...], total: 1234 }
 *
 * @param cart - O carrinho de compras.
 * @param inventory - O inventário com o estoque disponível.
 * @returns O resultado do checkout.
 */
export function processCheckout(
  cart: Cart,
  inventory: Inventory,
): CheckoutResult {
  // TODO: Implemente o processamento do checkout
  throw new Error("Não implementado");
}
