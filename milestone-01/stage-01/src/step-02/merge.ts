import { SanitizedUser, Purchase, UserWithPurchases } from "../types";

/**
 * Recebe uma lista de usuários sanitizados e uma lista de compras,
 * e retorna os usuários com suas compras associadas.
 *
 * Para cada usuário, buscar todas as compras cujo `userId` corresponda ao `id` do usuário.
 * Usuários sem compras devem ter um array `purchases` vazio.
 *
 * @example
 * const users = [{ id: 1, name: "Ana", email: "ana@email.com", age: 25 }];
 * const purchases = [
 *   { userId: 1, product: "Notebook", category: "Eletrônicos", price: 3500, date: "2024-01-15" },
 *   { userId: 2, product: "Cadeira", category: "Móveis", price: 800, date: "2024-02-10" },
 * ];
 * mergeUsersWithPurchases(users, purchases);
 * // [{ id: 1, name: "Ana", email: "ana@email.com", age: 25, purchases: [{ userId: 1, ... }] }]
 *
 * @param users - Array de usuários sanitizados.
 * @param purchases - Array de histórico de compras.
 * @returns Array de usuários com suas compras associadas.
 */
export function mergeUsersWithPurchases(
  users: SanitizedUser[],
  purchases: Purchase[],
): UserWithPurchases[] {
  // TODO: Implemente o cruzamento de dados
  throw new Error("Não implementado");
}

/**
 * Retorna apenas os usuários que possuem pelo menos uma compra.
 *
 * @param usersWithPurchases - Array de usuários já cruzados com compras.
 * @returns Array filtrado apenas com usuários que compraram algo.
 */
export function filterUsersWithPurchases(
  usersWithPurchases: UserWithPurchases[],
): UserWithPurchases[] {
  // TODO: Implemente o filtro
  throw new Error("Não implementado");
}

/**
 * Dado um array de usuários com compras, retorna um array com os IDs
 * de usuários que NÃO possuem nenhuma compra (usuários órfãos).
 *
 * @param usersWithPurchases - Array de usuários já cruzados com compras.
 * @returns Array de IDs dos usuários sem compras.
 */
export function findOrphanUserIds(
  usersWithPurchases: UserWithPurchases[],
): number[] {
  // TODO: Implemente a busca por usuários órfãos
  throw new Error("Não implementado");
}
