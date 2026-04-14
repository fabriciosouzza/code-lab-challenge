import { Product } from "../src/step-02/Product";
import { User } from "../src/step-02/User";

// ─────────────────────────────────────────────
// Product
// ─────────────────────────────────────────────
describe("Product", () => {
  describe("construtor e getters", () => {
    it("deve criar um produto com dados válidos", () => {
      const product = new Product("1", "Notebook", 3500, "Eletrônicos");
      expect(product.id).toBe("1");
      expect(product.name).toBe("Notebook");
      expect(product.price).toBe(3500);
      expect(product.category).toBe("Eletrônicos");
    });

    it("deve lançar erro se o id for vazio", () => {
      expect(() => new Product("", "Notebook", 3500, "Eletrônicos")).toThrow();
    });

    it("deve lançar erro se o name for vazio", () => {
      expect(() => new Product("1", "", 3500, "Eletrônicos")).toThrow();
    });

    it("deve lançar erro se o price não for positivo", () => {
      expect(() => new Product("1", "Notebook", 0, "Eletrônicos")).toThrow();
      expect(() => new Product("1", "Notebook", -100, "Eletrônicos")).toThrow();
    });

    it("deve lançar erro se o category for vazio", () => {
      expect(() => new Product("1", "Notebook", 3500, "")).toThrow();
    });
  });

  describe("setPrice", () => {
    it("deve atualizar o preço com valor válido", () => {
      const product = new Product("1", "Notebook", 3500, "Eletrônicos");
      product.setPrice(3200);
      expect(product.price).toBe(3200);
    });

    it("deve lançar erro ao tentar definir preço zero", () => {
      const product = new Product("1", "Notebook", 3500, "Eletrônicos");
      expect(() => product.setPrice(0)).toThrow();
    });

    it("deve lançar erro ao tentar definir preço negativo", () => {
      const product = new Product("1", "Notebook", 3500, "Eletrônicos");
      expect(() => product.setPrice(-100)).toThrow();
    });

    it("deve lançar erro ao tentar definir preço NaN", () => {
      const product = new Product("1", "Notebook", 3500, "Eletrônicos");
      expect(() => product.setPrice(NaN)).toThrow();
    });
  });
});

// ─────────────────────────────────────────────
// User
// ─────────────────────────────────────────────
describe("User", () => {
  describe("construtor e getters", () => {
    it("deve criar um usuário com dados válidos", () => {
      const user = new User("1", "João Silva", "joao@gmail.com", 30);
      expect(user.id).toBe("1");
      expect(user.name).toBe("João Silva");
      expect(user.email).toBe("joao@gmail.com");
      expect(user.age).toBe(30);
    });

    it("deve lançar erro se o id for vazio", () => {
      expect(
        () => new User("", "João Silva", "joao@gmail.com", 30),
      ).toThrow();
    });

    it("deve lançar erro se o name for vazio", () => {
      expect(() => new User("1", "", "joao@gmail.com", 30)).toThrow();
    });

    it("deve lançar erro se o email for inválido", () => {
      expect(() => new User("1", "João", "invalido", 30)).toThrow();
      expect(() => new User("1", "João", "user@", 30)).toThrow();
      expect(() => new User("1", "João", "", 30)).toThrow();
    });

    it("deve lançar erro se a idade for inválida", () => {
      expect(() => new User("1", "João", "a@b.com", -1)).toThrow();
      expect(() => new User("1", "João", "a@b.com", 200)).toThrow();
      expect(() => new User("1", "João", "a@b.com", NaN)).toThrow();
    });

    it("deve aceitar idade 0", () => {
      const user = new User("1", "Bebê", "bebe@gmail.com", 0);
      expect(user.age).toBe(0);
    });
  });

  describe("updateEmail", () => {
    it("deve atualizar o email com valor válido", () => {
      const user = new User("1", "João", "joao@gmail.com", 30);
      user.updateEmail("joao.silva@outlook.com");
      expect(user.email).toBe("joao.silva@outlook.com");
    });

    it("deve lançar erro ao tentar email sem @", () => {
      const user = new User("1", "João", "joao@gmail.com", 30);
      expect(() => user.updateEmail("invalido")).toThrow();
    });

    it("deve lançar erro ao tentar email vazio", () => {
      const user = new User("1", "João", "joao@gmail.com", 30);
      expect(() => user.updateEmail("")).toThrow();
    });

    it("não deve alterar email se a validação falhar", () => {
      const user = new User("1", "João", "joao@gmail.com", 30);
      try {
        user.updateEmail("invalido");
      } catch {
        // esperado
      }
      expect(user.email).toBe("joao@gmail.com");
    });
  });
});
