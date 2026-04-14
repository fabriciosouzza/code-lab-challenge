import {
  mergeUsersWithPurchases,
  filterUsersWithPurchases,
  findOrphanUserIds,
} from "../src/step-02/merge";
import { SanitizedUser, Purchase } from "../src/types";

const users: SanitizedUser[] = [
  { id: 1, name: "João Silva", email: "joao@email.com", age: 30 },
  { id: 2, name: "Maria Santos", email: "maria@email.com", age: 25 },
  { id: 3, name: "Carlos Lima", email: "carlos@email.com", age: 40 },
  { id: 4, name: "Ana Costa", email: "ana@email.com", age: 22 },
];

const purchases: Purchase[] = [
  { userId: 1, product: "Notebook", category: "Eletrônicos", price: 3500, date: "2024-01-15" },
  { userId: 1, product: "Mouse", category: "Eletrônicos", price: 120, date: "2024-01-20" },
  { userId: 2, product: "Cadeira", category: "Móveis", price: 800, date: "2024-02-10" },
  { userId: 2, product: "Mesa", category: "Móveis", price: 1200, date: "2024-02-15" },
  { userId: 2, product: "Teclado", category: "Eletrônicos", price: 250, date: "2024-03-01" },
  { userId: 4, product: "Camiseta", category: "Roupas", price: 80, date: "2024-03-05" },
  { userId: 99, product: "Fantasma", category: "Outros", price: 50, date: "2024-04-01" },
];

// ─────────────────────────────────────────────
// mergeUsersWithPurchases
// ─────────────────────────────────────────────
describe("mergeUsersWithPurchases", () => {
  it("deve associar compras ao usuário correto", () => {
    const result = mergeUsersWithPurchases(users, purchases);
    const joao = result.find((u) => u.id === 1);
    expect(joao).toBeDefined();
    expect(joao!.purchases).toHaveLength(2);
    expect(joao!.purchases[0].product).toBe("Notebook");
  });

  it("deve associar múltiplas compras ao mesmo usuário", () => {
    const result = mergeUsersWithPurchases(users, purchases);
    const maria = result.find((u) => u.id === 2);
    expect(maria!.purchases).toHaveLength(3);
  });

  it("deve retornar array vazio de compras para usuários sem compras", () => {
    const result = mergeUsersWithPurchases(users, purchases);
    const carlos = result.find((u) => u.id === 3);
    expect(carlos).toBeDefined();
    expect(carlos!.purchases).toEqual([]);
  });

  it("deve ignorar compras de userId que não existe na lista de usuários", () => {
    const result = mergeUsersWithPurchases(users, purchases);
    const allPurchaseUserIds = result.flatMap((u) =>
      u.purchases.map((p) => p.userId),
    );
    expect(allPurchaseUserIds).not.toContain(99);
  });

  it("deve retornar todos os usuários mesmo se não houver compras", () => {
    const result = mergeUsersWithPurchases(users, []);
    expect(result).toHaveLength(4);
    result.forEach((u) => {
      expect(u.purchases).toEqual([]);
    });
  });

  it("deve preservar os dados do usuário no resultado", () => {
    const result = mergeUsersWithPurchases(users, purchases);
    const ana = result.find((u) => u.id === 4);
    expect(ana!.name).toBe("Ana Costa");
    expect(ana!.email).toBe("ana@email.com");
    expect(ana!.age).toBe(22);
  });

  it("deve retornar array vazio se não houver usuários", () => {
    const result = mergeUsersWithPurchases([], purchases);
    expect(result).toEqual([]);
  });
});

// ─────────────────────────────────────────────
// filterUsersWithPurchases
// ─────────────────────────────────────────────
describe("filterUsersWithPurchases", () => {
  it("deve retornar apenas usuários que possuem compras", () => {
    const merged = mergeUsersWithPurchases(users, purchases);
    const result = filterUsersWithPurchases(merged);
    expect(result).toHaveLength(3);
    const ids = result.map((u) => u.id);
    expect(ids).toContain(1);
    expect(ids).toContain(2);
    expect(ids).toContain(4);
  });

  it("deve excluir usuários sem compras", () => {
    const merged = mergeUsersWithPurchases(users, purchases);
    const result = filterUsersWithPurchases(merged);
    const ids = result.map((u) => u.id);
    expect(ids).not.toContain(3);
  });

  it("deve retornar array vazio se ninguém comprou", () => {
    const merged = mergeUsersWithPurchases(users, []);
    const result = filterUsersWithPurchases(merged);
    expect(result).toEqual([]);
  });
});

// ─────────────────────────────────────────────
// findOrphanUserIds
// ─────────────────────────────────────────────
describe("findOrphanUserIds", () => {
  it("deve retornar IDs de usuários sem compras", () => {
    const merged = mergeUsersWithPurchases(users, purchases);
    const orphans = findOrphanUserIds(merged);
    expect(orphans).toEqual([3]);
  });

  it("deve retornar array vazio se todos os usuários têm compras", () => {
    const allBuyers: SanitizedUser[] = [users[0], users[1]];
    const merged = mergeUsersWithPurchases(allBuyers, purchases);
    const orphans = findOrphanUserIds(merged);
    expect(orphans).toEqual([]);
  });

  it("deve retornar todos os IDs se ninguém comprou", () => {
    const merged = mergeUsersWithPurchases(users, []);
    const orphans = findOrphanUserIds(merged);
    expect(orphans).toEqual([1, 2, 3, 4]);
  });

  it("deve retornar array vazio para input vazio", () => {
    expect(findOrphanUserIds([])).toEqual([]);
  });
});
