import { ShopController } from "../src/controller/ShopController";

describe("ShopController", () => {
  let shop: ShopController;

  beforeEach(() => {
    shop = new ShopController();
  });

  // ─────────────────────────────────────────────
  // Cadastro de Usuários
  // ─────────────────────────────────────────────
  describe("Cadastro de Usuários", () => {
    it("deve cadastrar um usuário com dados válidos", () => {
      const user = shop.registerUser("João Silva", "joao@gmail.com", 30);
      expect(user.name).toBe("João Silva");
      expect(user.email).toBe("joao@gmail.com");
      expect(user.age).toBe(30);
      expect(user.id).toBeDefined();
    });

    it("deve gerar IDs únicos para cada usuário", () => {
      const u1 = shop.registerUser("João", "joao@gmail.com", 30);
      const u2 = shop.registerUser("Maria", "maria@gmail.com", 25);
      expect(u1.id).not.toBe(u2.id);
    });

    it("deve lançar erro ao cadastrar com nome vazio", () => {
      expect(() => shop.registerUser("", "a@b.com", 25)).toThrow();
    });

    it("deve lançar erro ao cadastrar com email inválido", () => {
      expect(() => shop.registerUser("João", "invalido", 25)).toThrow();
    });

    it("deve lançar erro ao cadastrar com idade inválida", () => {
      expect(() => shop.registerUser("João", "a@b.com", -1)).toThrow();
      expect(() => shop.registerUser("João", "a@b.com", 200)).toThrow();
    });

    it("deve lançar erro ao cadastrar email duplicado", () => {
      shop.registerUser("João", "joao@gmail.com", 30);
      expect(() =>
        shop.registerUser("Outro João", "joao@gmail.com", 25),
      ).toThrow();
    });

    it("deve buscar um usuário pelo ID", () => {
      const created = shop.registerUser("Maria", "maria@gmail.com", 25);
      const found = shop.getUser(created.id);
      expect(found.name).toBe("Maria");
    });

    it("deve lançar erro ao buscar usuário inexistente", () => {
      expect(() => shop.getUser("id-inexistente")).toThrow();
    });
  });

  // ─────────────────────────────────────────────
  // Catálogo de Produtos
  // ─────────────────────────────────────────────
  describe("Catálogo de Produtos", () => {
    it("deve cadastrar um produto com dados válidos", () => {
      const product = shop.createProduct("Notebook", 3500, "Eletrônicos");
      expect(product.name).toBe("Notebook");
      expect(product.price).toBe(3500);
      expect(product.category).toBe("Eletrônicos");
      expect(product.id).toBeDefined();
    });

    it("deve lançar erro ao cadastrar com nome vazio", () => {
      expect(() => shop.createProduct("", 3500, "Eletrônicos")).toThrow();
    });

    it("deve lançar erro ao cadastrar com preço inválido", () => {
      expect(() => shop.createProduct("Notebook", 0, "Eletrônicos")).toThrow();
      expect(() =>
        shop.createProduct("Notebook", -100, "Eletrônicos"),
      ).toThrow();
    });

    it("deve lançar erro ao cadastrar com categoria vazia", () => {
      expect(() => shop.createProduct("Notebook", 3500, "")).toThrow();
    });

    it("deve buscar produto pelo ID", () => {
      const created = shop.createProduct("Mouse", 120, "Eletrônicos");
      const found = shop.getProduct(created.id);
      expect(found.name).toBe("Mouse");
    });

    it("deve filtrar produtos por categoria", () => {
      shop.createProduct("Notebook", 3500, "Eletrônicos");
      shop.createProduct("Mouse", 120, "Eletrônicos");
      shop.createProduct("Cadeira", 1800, "Móveis");
      const eletronicos = shop.getProductsByCategory("Eletrônicos");
      expect(eletronicos).toHaveLength(2);
    });

    it("deve retornar array vazio para categoria sem produtos", () => {
      expect(shop.getProductsByCategory("Inexistente")).toEqual([]);
    });
  });

  // ─────────────────────────────────────────────
  // Gestão de Estoque
  // ─────────────────────────────────────────────
  describe("Gestão de Estoque", () => {
    it("deve adicionar estoque a um produto", () => {
      const product = shop.createProduct("Notebook", 3500, "Eletrônicos");
      shop.addStock(product.id, 10);
      expect(shop.getStock(product.id)).toBe(10);
    });

    it("deve acumular estoque ao adicionar múltiplas vezes", () => {
      const product = shop.createProduct("Mouse", 120, "Eletrônicos");
      shop.addStock(product.id, 10);
      shop.addStock(product.id, 5);
      expect(shop.getStock(product.id)).toBe(15);
    });

    it("deve lançar erro ao adicionar estoque a produto inexistente", () => {
      expect(() => shop.addStock("id-inexistente", 10)).toThrow();
    });

    it("deve lançar erro ao adicionar quantidade <= 0", () => {
      const product = shop.createProduct("Teclado", 250, "Eletrônicos");
      expect(() => shop.addStock(product.id, 0)).toThrow();
      expect(() => shop.addStock(product.id, -5)).toThrow();
    });

    it("deve retornar 0 para produto sem estoque", () => {
      const product = shop.createProduct("Monitor", 2000, "Eletrônicos");
      expect(shop.getStock(product.id)).toBe(0);
    });
  });

  // ─────────────────────────────────────────────
  // Carrinho de Compras
  // ─────────────────────────────────────────────
  describe("Carrinho de Compras", () => {
    let userId: string;
    let notebookId: string;
    let mouseId: string;

    beforeEach(() => {
      const user = shop.registerUser("João", "joao@gmail.com", 30);
      userId = user.id;
      const notebook = shop.createProduct("Notebook", 3500, "Eletrônicos");
      notebookId = notebook.id;
      const mouse = shop.createProduct("Mouse", 120, "Eletrônicos");
      mouseId = mouse.id;
      shop.addStock(notebookId, 10);
      shop.addStock(mouseId, 20);
    });

    it("deve adicionar produto ao carrinho", () => {
      shop.addToCart(userId, notebookId, 2);
      const cart = shop.getCart(userId);
      expect(cart).toHaveLength(1);
      expect(cart[0].product.name).toBe("Notebook");
      expect(cart[0].quantity).toBe(2);
    });

    it("deve somar quantidade ao adicionar mesmo produto", () => {
      shop.addToCart(userId, mouseId, 3);
      shop.addToCart(userId, mouseId, 2);
      const cart = shop.getCart(userId);
      expect(cart).toHaveLength(1);
      expect(cart[0].quantity).toBe(5);
    });

    it("deve calcular total do carrinho", () => {
      shop.addToCart(userId, notebookId, 1);
      shop.addToCart(userId, mouseId, 3);
      expect(shop.getCartTotal(userId)).toBe(3500 + 120 * 3);
    });

    it("deve lançar erro ao adicionar com usuário inexistente", () => {
      expect(() => shop.addToCart("fake", notebookId, 1)).toThrow();
    });

    it("deve lançar erro ao adicionar produto inexistente", () => {
      expect(() => shop.addToCart(userId, "fake", 1)).toThrow();
    });

    it("deve lançar erro ao adicionar quantidade <= 0", () => {
      expect(() => shop.addToCart(userId, notebookId, 0)).toThrow();
    });

    it("deve retornar carrinho vazio para usuário sem itens", () => {
      expect(shop.getCart(userId)).toEqual([]);
      expect(shop.getCartTotal(userId)).toBe(0);
    });
  });

  // ─────────────────────────────────────────────
  // Checkout
  // ─────────────────────────────────────────────
  describe("Checkout", () => {
    let userId: string;
    let notebookId: string;
    let mouseId: string;
    let cadeiraId: string;

    beforeEach(() => {
      const user = shop.registerUser("Maria", "maria@gmail.com", 28);
      userId = user.id;
      const notebook = shop.createProduct("Notebook", 3500, "Eletrônicos");
      notebookId = notebook.id;
      const mouse = shop.createProduct("Mouse", 120, "Eletrônicos");
      mouseId = mouse.id;
      const cadeira = shop.createProduct("Cadeira Gamer", 1800, "Móveis");
      cadeiraId = cadeira.id;
      shop.addStock(notebookId, 5);
      shop.addStock(mouseId, 20);
      shop.addStock(cadeiraId, 2);
    });

    it("deve processar checkout com todos os itens disponíveis", () => {
      shop.addToCart(userId, notebookId, 2);
      shop.addToCart(userId, mouseId, 3);
      const result = shop.checkout(userId);
      expect(result.items).toHaveLength(2);
      expect(result.unavailable).toHaveLength(0);
      expect(result.total).toBe(3500 * 2 + 120 * 3);
      expect(result.orderId).toBeDefined();
    });

    it("deve dar baixa no estoque após checkout", () => {
      shop.addToCart(userId, notebookId, 2);
      shop.checkout(userId);
      expect(shop.getStock(notebookId)).toBe(3);
    });

    it("deve marcar itens sem estoque como indisponíveis", () => {
      shop.addToCart(userId, cadeiraId, 10); // só tem 2
      const result = shop.checkout(userId);
      expect(result.items).toHaveLength(0);
      expect(result.unavailable).toHaveLength(1);
      expect(result.unavailable[0].productName).toBe("Cadeira Gamer");
      expect(result.unavailable[0].requested).toBe(10);
      expect(result.unavailable[0].available).toBe(2);
      expect(result.total).toBe(0);
    });

    it("deve processar parcialmente (alguns disponíveis, alguns não)", () => {
      shop.addToCart(userId, mouseId, 5);
      shop.addToCart(userId, cadeiraId, 10); // só tem 2
      const result = shop.checkout(userId);
      expect(result.items).toHaveLength(1);
      expect(result.items[0].product.name).toBe("Mouse");
      expect(result.unavailable).toHaveLength(1);
      expect(result.total).toBe(120 * 5);
    });

    it("deve limpar o carrinho após checkout", () => {
      shop.addToCart(userId, mouseId, 1);
      shop.checkout(userId);
      expect(shop.getCart(userId)).toEqual([]);
    });

    it("deve lançar erro com carrinho vazio", () => {
      expect(() => shop.checkout(userId)).toThrow();
    });

    it("deve lançar erro com usuário inexistente", () => {
      expect(() => shop.checkout("fake")).toThrow();
    });

    it("deve gerar orderIds únicos", () => {
      shop.addToCart(userId, mouseId, 1);
      const r1 = shop.checkout(userId);
      shop.addToCart(userId, mouseId, 1);
      const r2 = shop.checkout(userId);
      expect(r1.orderId).not.toBe(r2.orderId);
    });
  });

  // ─────────────────────────────────────────────
  // Relatórios
  // ─────────────────────────────────────────────
  describe("Relatórios", () => {
    it("deve gerar relatório de vendas por categoria", () => {
      const user = shop.registerUser("Ana", "ana@gmail.com", 22);
      const notebook = shop.createProduct("Notebook", 3500, "Eletrônicos");
      const mouse = shop.createProduct("Mouse", 120, "Eletrônicos");
      const cadeira = shop.createProduct("Cadeira", 1800, "Móveis");
      shop.addStock(notebook.id, 10);
      shop.addStock(mouse.id, 20);
      shop.addStock(cadeira.id, 5);

      shop.addToCart(user.id, notebook.id, 2);
      shop.addToCart(user.id, mouse.id, 3);
      shop.addToCart(user.id, cadeira.id, 1);
      shop.checkout(user.id);

      const report = shop.getCategoryReport();
      expect(report).toHaveLength(2);

      const eletronicos = report.find((r) => r.category === "Eletrônicos");
      expect(eletronicos).toBeDefined();
      expect(eletronicos!.totalRevenue).toBe(3500 * 2 + 120 * 3);
      expect(eletronicos!.totalSold).toBe(5);

      const moveis = report.find((r) => r.category === "Móveis");
      expect(moveis).toBeDefined();
      expect(moveis!.totalRevenue).toBe(1800);
      expect(moveis!.totalSold).toBe(1);
    });

    it("deve ordenar relatório por receita decrescente", () => {
      const user = shop.registerUser("Bob", "bob@gmail.com", 35);
      const notebook = shop.createProduct("Notebook", 3500, "Eletrônicos");
      const cadeira = shop.createProduct("Cadeira", 1800, "Móveis");
      shop.addStock(notebook.id, 10);
      shop.addStock(cadeira.id, 10);

      shop.addToCart(user.id, notebook.id, 1);
      shop.addToCart(user.id, cadeira.id, 1);
      shop.checkout(user.id);

      const report = shop.getCategoryReport();
      expect(report[0].category).toBe("Eletrônicos");
      expect(report[1].category).toBe("Móveis");
    });

    it("deve retornar array vazio se não houver vendas", () => {
      expect(shop.getCategoryReport()).toEqual([]);
    });

    it("deve acumular vendas de múltiplos checkouts", () => {
      const u1 = shop.registerUser("User1", "u1@gmail.com", 20);
      const u2 = shop.registerUser("User2", "u2@gmail.com", 25);
      const mouse = shop.createProduct("Mouse", 120, "Eletrônicos");
      shop.addStock(mouse.id, 100);

      shop.addToCart(u1.id, mouse.id, 5);
      shop.checkout(u1.id);

      shop.addToCart(u2.id, mouse.id, 3);
      shop.checkout(u2.id);

      const report = shop.getCategoryReport();
      expect(report).toHaveLength(1);
      expect(report[0].totalRevenue).toBe(120 * 8);
      expect(report[0].totalSold).toBe(8);
    });
  });
});
