/**
 * Dados de um produto.
 */
export interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
}

/**
 * Dados de um usuário.
 */
export interface UserData {
  id: string;
  name: string;
  email: string;
  age: number;
}

/**
 * Um item dentro do carrinho de compras.
 */
export interface CartItemData {
  product: ProductData;
  quantity: number;
}

/**
 * Resultado do processamento de um checkout.
 */
export interface CheckoutResult {
  /** Itens que foram processados com sucesso (tinham estoque). */
  processed: CartItemData[];
  /** Itens que não puderam ser processados por falta de estoque. */
  unavailable: Array<{
    productName: string;
    requested: number;
    available: number;
  }>;
  /** Valor total dos itens processados. */
  total: number;
}

/**
 * Resultado encapsulado de uma operação segura (try/catch).
 */
export type SafeResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };
