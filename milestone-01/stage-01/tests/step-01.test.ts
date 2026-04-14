import {
  sanitizeName,
  sanitizeEmail,
  isValidEmailDomain,
  isValidUser,
  sanitizeUsers,
  VALID_EMAIL_DOMAINS,
} from "../src/step-01/sanitize";
import { RawUser } from "../src/types";

// ─────────────────────────────────────────────
// sanitizeName
// ─────────────────────────────────────────────
describe("sanitizeName", () => {
  it("deve remover espaços nas extremidades", () => {
    expect(sanitizeName("  João Silva  ")).toBe("João Silva");
  });

  it("deve normalizar espaços duplos internos", () => {
    expect(sanitizeName("João   Silva")).toBe("João Silva");
  });

  it("deve funcionar com nome sem espaços extras", () => {
    expect(sanitizeName("Maria")).toBe("Maria");
  });

  it("deve lidar com tabs e múltiplos espaços", () => {
    expect(sanitizeName("  Ana   Clara    Santos  ")).toBe("Ana Clara Santos");
  });

  it("deve retornar string vazia se receber apenas espaços", () => {
    expect(sanitizeName("     ")).toBe("");
  });
});

// ─────────────────────────────────────────────
// sanitizeEmail
// ─────────────────────────────────────────────
describe("sanitizeEmail", () => {
  it("deve converter para lowercase e remover espaços", () => {
    expect(sanitizeEmail("  User@Gmail.COM  ")).toBe("user@gmail.com");
  });

  it("deve funcionar com email já correto", () => {
    expect(sanitizeEmail("test@outlook.com")).toBe("test@outlook.com");
  });

  it("deve remover espaços no meio do email", () => {
    expect(sanitizeEmail(" user @ hotmail . com ")).toBe("user@hotmail.com");
  });

  it("deve retornar string vazia para input vazio", () => {
    expect(sanitizeEmail("   ")).toBe("");
  });
});

// ─────────────────────────────────────────────
// isValidEmailDomain
// ─────────────────────────────────────────────
describe("isValidEmailDomain", () => {
  it("deve retornar true para gmail.com", () => {
    expect(isValidEmailDomain("user@gmail.com")).toBe(true);
  });

  it("deve retornar true para outlook.com", () => {
    expect(isValidEmailDomain("user@outlook.com")).toBe(true);
  });

  it("deve retornar true para hotmail.com", () => {
    expect(isValidEmailDomain("user@hotmail.com")).toBe(true);
  });

  it("deve retornar true para yahoo.com", () => {
    expect(isValidEmailDomain("user@yahoo.com")).toBe(true);
  });

  it("deve retornar true para icloud.com", () => {
    expect(isValidEmailDomain("user@icloud.com")).toBe(true);
  });

  it("deve retornar true para protonmail.com", () => {
    expect(isValidEmailDomain("user@protonmail.com")).toBe(true);
  });

  it("deve retornar false para domínio desconhecido", () => {
    expect(isValidEmailDomain("user@empresa.com.br")).toBe(false);
  });

  it("deve retornar false para email sem @", () => {
    expect(isValidEmailDomain("invalido")).toBe(false);
  });

  it("deve retornar false para string vazia", () => {
    expect(isValidEmailDomain("")).toBe(false);
  });

  it("deve retornar false para email com domínio parcialmente válido", () => {
    expect(isValidEmailDomain("user@gmail.com.br")).toBe(false);
  });

  it("deve exportar a lista de domínios válidos", () => {
    expect(VALID_EMAIL_DOMAINS).toHaveLength(6);
    expect(VALID_EMAIL_DOMAINS).toContain("gmail.com");
    expect(VALID_EMAIL_DOMAINS).toContain("outlook.com");
  });
});

// ─────────────────────────────────────────────
// isValidUser
// ─────────────────────────────────────────────
describe("isValidUser", () => {
  it("deve retornar true para um usuário válido", () => {
    const user: RawUser = {
      id: 1,
      name: "João",
      email: "joao@gmail.com",
      age: 25,
    };
    expect(isValidUser(user)).toBe(true);
  });

  it("deve retornar false se o nome estiver vazio", () => {
    const user: RawUser = {
      id: 1,
      name: "   ",
      email: "a@gmail.com",
      age: 25,
    };
    expect(isValidUser(user)).toBe(false);
  });

  it("deve retornar false se o email estiver vazio", () => {
    const user: RawUser = { id: 1, name: "João", email: "  ", age: 25 };
    expect(isValidUser(user)).toBe(false);
  });

  it("deve retornar false se o domínio do email for inválido", () => {
    const user: RawUser = {
      id: 1,
      name: "João",
      email: "joao@empresa.com.br",
      age: 25,
    };
    expect(isValidUser(user)).toBe(false);
  });

  it("deve retornar false se a idade for negativa", () => {
    const user: RawUser = {
      id: 1,
      name: "João",
      email: "a@gmail.com",
      age: -1,
    };
    expect(isValidUser(user)).toBe(false);
  });

  it("deve retornar false se a idade for NaN", () => {
    const user: RawUser = {
      id: 1,
      name: "João",
      email: "a@gmail.com",
      age: NaN,
    };
    expect(isValidUser(user)).toBe(false);
  });

  it("deve retornar false se a idade for Infinity", () => {
    const user: RawUser = {
      id: 1,
      name: "João",
      email: "a@gmail.com",
      age: Infinity,
    };
    expect(isValidUser(user)).toBe(false);
  });

  it("deve retornar true para idade 0", () => {
    const user: RawUser = {
      id: 1,
      name: "Bebê",
      email: "a@yahoo.com",
      age: 0,
    };
    expect(isValidUser(user)).toBe(true);
  });
});

// ─────────────────────────────────────────────
// sanitizeUsers (pipeline completo)
// ─────────────────────────────────────────────
describe("sanitizeUsers", () => {
  const rawUsers: RawUser[] = [
    { id: 1, name: "  João   Silva  ", email: "  JOAO@GMAIL.COM  ", age: 30 },
    { id: 2, name: "   ", email: "invalid@hotmail.com", age: 25 },
    { id: 3, name: " Maria Santos ", email: " Maria@Outlook.COM ", age: 22 },
    { id: 4, name: "Carlos", email: "  ", age: 40 },
    { id: 5, name: "Ana", email: "ana@gmail.com", age: -5 },
    {
      id: 6,
      name: "  Pedro   Lima  ",
      email: "  PEDRO@yahoo.com  ",
      age: 0,
    },
    { id: 7, name: "Lucas", email: "lucas@empresa.com.br", age: 28 },
  ];

  it("deve filtrar usuários inválidos", () => {
    const result = sanitizeUsers(rawUsers);
    // IDs inválidos: 2 (nome vazio), 4 (email vazio), 5 (idade negativa), 7 (domínio inválido)
    expect(result).toHaveLength(3);
  });

  it("deve sanitizar nomes dos usuários válidos", () => {
    const result = sanitizeUsers(rawUsers);
    const names = result.map((u) => u.name);
    expect(names).toContain("João Silva");
    expect(names).toContain("Maria Santos");
    expect(names).toContain("Pedro Lima");
  });

  it("deve sanitizar emails dos usuários válidos", () => {
    const result = sanitizeUsers(rawUsers);
    const emails = result.map((u) => u.email);
    expect(emails).toContain("joao@gmail.com");
    expect(emails).toContain("maria@outlook.com");
    expect(emails).toContain("pedro@yahoo.com");
  });

  it("deve preservar id e age dos usuários válidos", () => {
    const result = sanitizeUsers(rawUsers);
    const joao = result.find((u) => u.id === 1);
    expect(joao).toBeDefined();
    expect(joao!.age).toBe(30);
  });

  it("deve rejeitar usuário com domínio de email inválido", () => {
    const result = sanitizeUsers(rawUsers);
    const ids = result.map((u) => u.id);
    expect(ids).not.toContain(7);
  });

  it("deve retornar array vazio se todos forem inválidos", () => {
    const invalidUsers: RawUser[] = [
      { id: 1, name: "  ", email: "a@gmail.com", age: 25 },
      { id: 2, name: "Ana", email: "", age: 30 },
      { id: 3, name: "Bob", email: "bob@empresa.xyz", age: 20 },
    ];
    expect(sanitizeUsers(invalidUsers)).toEqual([]);
  });

  it("deve retornar array vazio para input vazio", () => {
    expect(sanitizeUsers([])).toEqual([]);
  });
});
