import { Transaction, CategoryRevenue } from "../types";

/**
 * Recebe um array de transações e agrupa o faturamento por categoria.
 * Para cada categoria, deve totalizar a receita e contar o número de transações.
 *
 * Utilize `reduce` para resolver este desafio.
 *
 * @example
 * const transactions = [
 *   { id: 1, category: "Eletrônicos", amount: 1500, date: "2024-01-15" },
 *   { id: 2, category: "Eletrônicos", amount: 3200, date: "2024-01-20" },
 *   { id: 3, category: "Roupas", amount: 250, date: "2024-02-01" },
 * ];
 * aggregateByCategory(transactions);
 * // [
 * //   { category: "Eletrônicos", totalRevenue: 4700, transactionCount: 2 },
 * //   { category: "Roupas", totalRevenue: 250, transactionCount: 1 },
 * // ]
 *
 * @param transactions - Array de transações.
 * @returns Array de receita agrupada por categoria, ordenado por totalRevenue decrescente.
 */
export function aggregateByCategory(
  transactions: Transaction[],
): CategoryRevenue[] {
  // TODO: Implemente a agregação com reduce
  throw new Error("Não implementado");
}

/**
 * Retorna a categoria com maior faturamento total.
 * Se o array estiver vazio, deve retornar `null`.
 *
 * @param revenues - Array de receitas por categoria.
 * @returns O nome da categoria com maior faturamento, ou `null` se vazio.
 */
export function getTopCategory(revenues: CategoryRevenue[]): string | null {
  // TODO: Implemente a busca pela categoria top
  throw new Error("Não implementado");
}

/**
 * Calcula a receita média por transação considerando todas as categorias.
 * Se não houver transações, deve retornar 0.
 *
 * @param revenues - Array de receitas por categoria.
 * @returns A receita média por transação.
 */
export function getAverageRevenuePerTransaction(
  revenues: CategoryRevenue[],
): number {
  // TODO: Implemente o cálculo da média
  throw new Error("Não implementado");
}
