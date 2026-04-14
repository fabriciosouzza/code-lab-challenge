import {
  aggregateByCategory,
  getTopCategory,
  getAverageRevenuePerTransaction,
} from "../src/step-03/aggregate";
import { Transaction, CategoryRevenue } from "../src/types";

const transactions: Transaction[] = [
  { id: 1, category: "Eletrônicos", amount: 1500, date: "2024-01-15" },
  { id: 2, category: "Eletrônicos", amount: 3200, date: "2024-01-20" },
  { id: 3, category: "Roupas", amount: 250, date: "2024-02-01" },
  { id: 4, category: "Roupas", amount: 180, date: "2024-02-10" },
  { id: 5, category: "Roupas", amount: 320, date: "2024-02-15" },
  { id: 6, category: "Móveis", amount: 2800, date: "2024-03-01" },
  { id: 7, category: "Alimentos", amount: 450, date: "2024-03-05" },
  { id: 8, category: "Alimentos", amount: 120, date: "2024-03-10" },
  { id: 9, category: "Eletrônicos", amount: 890, date: "2024-03-15" },
  { id: 10, category: "Móveis", amount: 1500, date: "2024-04-01" },
];

// ─────────────────────────────────────────────
// aggregateByCategory
// ─────────────────────────────────────────────
describe("aggregateByCategory", () => {
  it("deve agrupar transações por categoria", () => {
    const result = aggregateByCategory(transactions);
    expect(result).toHaveLength(4);
  });

  it("deve totalizar a receita corretamente por categoria", () => {
    const result = aggregateByCategory(transactions);
    const eletronicos = result.find((r) => r.category === "Eletrônicos");
    expect(eletronicos!.totalRevenue).toBe(5590);
  });

  it("deve contar o número de transações por categoria", () => {
    const result = aggregateByCategory(transactions);
    const roupas = result.find((r) => r.category === "Roupas");
    expect(roupas!.transactionCount).toBe(3);
  });

  it("deve ordenar por totalRevenue decrescente", () => {
    const result = aggregateByCategory(transactions);
    expect(result[0].category).toBe("Eletrônicos");
    expect(result[0].totalRevenue).toBe(5590);
    expect(result[result.length - 1].totalRevenue).toBeLessThanOrEqual(
      result[0].totalRevenue,
    );
  });

  it("deve funcionar com uma única transação", () => {
    const single: Transaction[] = [
      { id: 1, category: "Livros", amount: 50, date: "2024-01-01" },
    ];
    const result = aggregateByCategory(single);
    expect(result).toEqual([
      { category: "Livros", totalRevenue: 50, transactionCount: 1 },
    ]);
  });

  it("deve retornar array vazio para input vazio", () => {
    expect(aggregateByCategory([])).toEqual([]);
  });

  it("deve calcular corretamente para categorias com uma transação", () => {
    const result = aggregateByCategory(transactions);
    const moveis = result.find((r) => r.category === "Móveis");
    expect(moveis!.totalRevenue).toBe(4300);
    expect(moveis!.transactionCount).toBe(2);
  });

  it("deve calcular corretamente alimentos", () => {
    const result = aggregateByCategory(transactions);
    const alimentos = result.find((r) => r.category === "Alimentos");
    expect(alimentos!.totalRevenue).toBe(570);
    expect(alimentos!.transactionCount).toBe(2);
  });
});

// ─────────────────────────────────────────────
// getTopCategory
// ─────────────────────────────────────────────
describe("getTopCategory", () => {
  it("deve retornar a categoria com maior faturamento", () => {
    const revenues = aggregateByCategory(transactions);
    expect(getTopCategory(revenues)).toBe("Eletrônicos");
  });

  it("deve retornar null para array vazio", () => {
    expect(getTopCategory([])).toBeNull();
  });

  it("deve funcionar com uma única categoria", () => {
    const revenues: CategoryRevenue[] = [
      { category: "Livros", totalRevenue: 500, transactionCount: 5 },
    ];
    expect(getTopCategory(revenues)).toBe("Livros");
  });
});

// ─────────────────────────────────────────────
// getAverageRevenuePerTransaction
// ─────────────────────────────────────────────
describe("getAverageRevenuePerTransaction", () => {
  it("deve calcular a média correta", () => {
    const revenues = aggregateByCategory(transactions);
    // Total: 5590 + 750 + 4300 + 570 = 11210 / 10 transações = 1121
    const avg = getAverageRevenuePerTransaction(revenues);
    expect(avg).toBeCloseTo(1121);
  });

  it("deve retornar 0 para array vazio", () => {
    expect(getAverageRevenuePerTransaction([])).toBe(0);
  });

  it("deve funcionar com uma única categoria", () => {
    const revenues: CategoryRevenue[] = [
      { category: "Livros", totalRevenue: 1000, transactionCount: 4 },
    ];
    expect(getAverageRevenuePerTransaction(revenues)).toBeCloseTo(250);
  });

  it("deve lidar com receita fracionada", () => {
    const revenues: CategoryRevenue[] = [
      { category: "A", totalRevenue: 100, transactionCount: 3 },
    ];
    expect(getAverageRevenuePerTransaction(revenues)).toBeCloseTo(33.33, 1);
  });
});
