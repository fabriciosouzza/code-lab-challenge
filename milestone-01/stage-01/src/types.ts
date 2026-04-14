/**
 * Representa um usuário bruto vindo de uma fonte de dados externa.
 * Os campos podem conter espaços extras, casing inconsistente ou valores inválidos.
 */
export interface RawUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

/**
 * Representa um usuário já sanitizado e pronto para uso no sistema.
 */
export interface SanitizedUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

/**
 * Representa um item do histórico de compras de um usuário.
 */
export interface Purchase {
  userId: number;
  product: string;
  category: string;
  price: number;
  date: string;
}

/**
 * Representa um usuário com seu histórico de compras associado.
 */
export interface UserWithPurchases {
  id: number;
  name: string;
  email: string;
  age: number;
  purchases: Purchase[];
}

/**
 * Representa uma transação para agregação.
 */
export interface Transaction {
  id: number;
  category: string;
  amount: number;
  date: string;
}

/**
 * Representa o faturamento totalizado de uma categoria.
 */
export interface CategoryRevenue {
  category: string;
  totalRevenue: number;
  transactionCount: number;
}
