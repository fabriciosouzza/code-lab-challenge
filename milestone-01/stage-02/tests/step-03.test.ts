import { Cart } from "../src/step-03/Cart";
import { Inventory } from "../src/step-03/Inventory";
import { processCheckout } from "../src/step-03/checkout";
import { ProductData } from "../src/types";

const notebook: ProductData = {
  id: "1",
  name: "Notebook",
  price: 3500,
  category: "Eletrônicos",
};
const mouse: ProductData = {
  id: "2",
  name: "Mouse",
  price: 120,
  category: "Eletrônicos",
};
const cadeira: ProductData = {
  id: "3",
  name: "Cadeira Gamer",
  price: 1800,
  category: "Móveis",
};

// ─────────────────────────────────────────────
// Cart
// ─────────────────────────────────────────────
describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("deve iniciar vazio", () => {
    expect(cart.getItems()).toEqual([]);
    expect(cart.getTotal()).toBe(0);
  });

  it("deve adicionar um item ao carrinho", () => {
    cart.addItem(notebook, 1);
    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0].product.name).toBe("Notebook");
    expect(cart.getItems()[0].quantity).toBe(1);
  });

  it("deve somar quantidade ao adicionar produto existente", () => {
    cart.addItem(mouse, 2);
    cart.addItem(mouse, 3);
    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0].quantity).toBe(5);
  });

  it("deve lançar erro ao adicionar quantidade <= 0", () => {
    expect(() => cart.addItem(notebook, 0)).toThrow();
    expect(() => cart.addItem(notebook, -1)).toThrow();
  });

  it("deve calcular o total corretamente", () => {
    cart.addItem(notebook, 1);
    cart.addItem(mouse, 2);
    expect(cart.getTotal()).toBe(3500 + 240);
  });

  it("deve remover um item pelo ID", () => {
    cart.addItem(notebook, 1);
    cart.addItem(mouse, 2);
    cart.removeItem("1");
    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0].product.id).toBe("2");
  });

  it("deve lançar erro ao remover produto inexistente", () => {
    expect(() => cart.removeItem("999")).toThrow();
  });

  it("deve atualizar a quantidade de um item", () => {
    cart.addItem(notebook, 1);
    cart.updateQuantity("1", 5);
    expect(cart.getItems()[0].quantity).toBe(5);
  });

  it("deve lançar erro ao atualizar quantidade de produto inexistente", () => {
    expect(() => cart.updateQuantity("999", 1)).toThrow();
  });

  it("deve lançar erro ao atualizar para quantidade <= 0", () => {
    cart.addItem(notebook, 1);
    expect(() => cart.updateQuantity("1", 0)).toThrow();
    expect(() => cart.updateQuantity("1", -3)).toThrow();
  });

  it("deve esvaziar o carrinho com clear", () => {
    cart.addItem(notebook, 1);
    cart.addItem(mouse, 3);
    cart.clear();
    expect(cart.getItems()).toEqual([]);
    expect(cart.getTotal()).toBe(0);
  });
});

// ─────────────────────────────────────────────
// Inventory
// ─────────────────────────────────────────────
describe("Inventory", () => {
  let inventory: Inventory;

  beforeEach(() => {
    inventory = new Inventory();
  });

  it("deve retornar 0 para produto não cadastrado", () => {
    expect(inventory.getStock("999")).toBe(0);
  });

  it("deve adicionar estoque de um produto", () => {
    inventory.addStock(notebook, 10);
    expect(inventory.getStock("1")).toBe(10);
  });

  it("deve somar ao estoque existente", () => {
    inventory.addStock(notebook, 10);
    inventory.addStock(notebook, 5);
    expect(inventory.getStock("1")).toBe(15);
  });

  it("deve lançar erro ao adicionar quantidade <= 0", () => {
    expect(() => inventory.addStock(notebook, 0)).toThrow();
    expect(() => inventory.addStock(notebook, -5)).toThrow();
  });

  it("deve remover do estoque", () => {
    inventory.addStock(notebook, 10);
    inventory.removeStock("1", 3);
    expect(inventory.getStock("1")).toBe(7);
  });

  it("deve lançar erro ao remover mais do que o disponível", () => {
    inventory.addStock(notebook, 5);
    expect(() => inventory.removeStock("1", 10)).toThrow();
  });

  it("deve lançar erro ao remover de produto inexistente", () => {
    expect(() => inventory.removeStock("999", 1)).toThrow();
  });

  it("deve verificar disponibilidade com hasEnough", () => {
    inventory.addStock(notebook, 10);
    expect(inventory.hasEnough("1", 10)).toBe(true);
    expect(inventory.hasEnough("1", 11)).toBe(false);
    expect(inventory.hasEnough("999", 1)).toBe(false);
  });

  it("deve listar todos os produtos cadastrados", () => {
    inventory.addStock(notebook, 10);
    inventory.addStock(mouse, 20);
    const products = inventory.getProducts();
    expect(products).toHaveLength(2);
    expect(products.map((p) => p.id)).toContain("1");
    expect(products.map((p) => p.id)).toContain("2");
  });
});

// ─────────────────────────────────────────────
// processCheckout
// ─────────────────────────────────────────────
describe("processCheckout", () => {
  let cart: Cart;
  let inventory: Inventory;

  beforeEach(() => {
    cart = new Cart();
    inventory = new Inventory();
    inventory.addStock(notebook, 5);
    inventory.addStock(mouse, 20);
    inventory.addStock(cadeira, 2);
  });

  it("deve processar checkout com todos os itens disponíveis", () => {
    cart.addItem(notebook, 2);
    cart.addItem(mouse, 3);
    const result = processCheckout(cart, inventory);
    expect(result.processed).toHaveLength(2);
    expect(result.unavailable).toHaveLength(0);
    expect(result.total).toBe(3500 * 2 + 120 * 3);
  });

  it("deve dar baixa no estoque após checkout", () => {
    cart.addItem(notebook, 2);
    processCheckout(cart, inventory);
    expect(inventory.getStock("1")).toBe(3);
  });

  it("deve marcar itens sem estoque suficiente como indisponíveis", () => {
    cart.addItem(notebook, 10); // só tem 5
    const result = processCheckout(cart, inventory);
    expect(result.processed).toHaveLength(0);
    expect(result.unavailable).toHaveLength(1);
    expect(result.unavailable[0].productName).toBe("Notebook");
    expect(result.unavailable[0].requested).toBe(10);
    expect(result.unavailable[0].available).toBe(5);
  });

  it("deve processar parcialmente quando alguns itens faltam", () => {
    cart.addItem(mouse, 5);
    cart.addItem(cadeira, 10); // só tem 2
    const result = processCheckout(cart, inventory);
    expect(result.processed).toHaveLength(1);
    expect(result.processed[0].product.name).toBe("Mouse");
    expect(result.unavailable).toHaveLength(1);
    expect(result.unavailable[0].productName).toBe("Cadeira Gamer");
    expect(result.total).toBe(120 * 5);
  });

  it("deve esvaziar o carrinho após checkout", () => {
    cart.addItem(mouse, 1);
    processCheckout(cart, inventory);
    expect(cart.getItems()).toEqual([]);
  });

  it("deve lançar erro se o carrinho estiver vazio", () => {
    expect(() => processCheckout(cart, inventory)).toThrow();
  });

  it("deve calcular total apenas dos itens processados", () => {
    cart.addItem(notebook, 3);
    cart.addItem(cadeira, 5); // só tem 2 → indisponível
    const result = processCheckout(cart, inventory);
    expect(result.total).toBe(3500 * 3);
    expect(result.unavailable[0].available).toBe(2);
  });
});
