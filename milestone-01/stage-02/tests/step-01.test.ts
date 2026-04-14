import {
  validateRequiredString,
  validateEmail,
  validatePositiveNumber,
  validateAge,
  safeExecute,
} from "../src/step-01/validators";

// ─────────────────────────────────────────────
// validateRequiredString
// ─────────────────────────────────────────────
describe("validateRequiredString", () => {
  it("não deve lançar erro para string válida", () => {
    expect(() => validateRequiredString("João", "nome")).not.toThrow();
  });

  it("deve lançar erro para string vazia", () => {
    expect(() => validateRequiredString("", "nome")).toThrow(
      "nome é obrigatório",
    );
  });

  it("deve lançar erro para string com apenas espaços", () => {
    expect(() => validateRequiredString("   ", "nome")).toThrow(
      "nome é obrigatório",
    );
  });

  it("deve incluir o nome do campo na mensagem de erro", () => {
    expect(() => validateRequiredString("", "email")).toThrow(
      "email é obrigatório",
    );
  });
});

// ─────────────────────────────────────────────
// validateEmail
// ─────────────────────────────────────────────
describe("validateEmail", () => {
  it("não deve lançar erro para email válido", () => {
    expect(() => validateEmail("user@gmail.com")).not.toThrow();
  });

  it("não deve lançar erro para email com subdomínio", () => {
    expect(() => validateEmail("user@mail.empresa.com")).not.toThrow();
  });

  it("deve lançar erro para email sem @", () => {
    expect(() => validateEmail("invalido")).toThrow("Email inválido: invalido");
  });

  it("deve lançar erro para email sem domínio", () => {
    expect(() => validateEmail("user@")).toThrow("Email inválido: user@");
  });

  it("deve lançar erro para email sem ponto após @", () => {
    expect(() => validateEmail("user@dominio")).toThrow(
      "Email inválido: user@dominio",
    );
  });

  it("deve lançar erro para string vazia", () => {
    expect(() => validateEmail("")).toThrow("Email inválido: ");
  });
});

// ─────────────────────────────────────────────
// validatePositiveNumber
// ─────────────────────────────────────────────
describe("validatePositiveNumber", () => {
  it("não deve lançar erro para número positivo", () => {
    expect(() => validatePositiveNumber(10, "preço")).not.toThrow();
  });

  it("não deve lançar erro para decimal positivo", () => {
    expect(() => validatePositiveNumber(0.5, "preço")).not.toThrow();
  });

  it("deve lançar erro para zero", () => {
    expect(() => validatePositiveNumber(0, "preço")).toThrow(
      "preço deve ser um número positivo",
    );
  });

  it("deve lançar erro para número negativo", () => {
    expect(() => validatePositiveNumber(-5, "preço")).toThrow(
      "preço deve ser um número positivo",
    );
  });

  it("deve lançar erro para NaN", () => {
    expect(() => validatePositiveNumber(NaN, "preço")).toThrow(
      "preço deve ser um número positivo",
    );
  });

  it("deve lançar erro para Infinity", () => {
    expect(() => validatePositiveNumber(Infinity, "preço")).toThrow(
      "preço deve ser um número positivo",
    );
  });
});

// ─────────────────────────────────────────────
// validateAge
// ─────────────────────────────────────────────
describe("validateAge", () => {
  it("não deve lançar erro para idade válida", () => {
    expect(() => validateAge(25)).not.toThrow();
  });

  it("não deve lançar erro para idade 0", () => {
    expect(() => validateAge(0)).not.toThrow();
  });

  it("não deve lançar erro para idade 150", () => {
    expect(() => validateAge(150)).not.toThrow();
  });

  it("deve lançar erro para idade negativa", () => {
    expect(() => validateAge(-1)).toThrow("Idade inválida: -1");
  });

  it("deve lançar erro para idade acima de 150", () => {
    expect(() => validateAge(151)).toThrow("Idade inválida: 151");
  });

  it("deve lançar erro para idade decimal", () => {
    expect(() => validateAge(25.5)).toThrow("Idade inválida: 25.5");
  });

  it("deve lançar erro para NaN", () => {
    expect(() => validateAge(NaN)).toThrow("Idade inválida: NaN");
  });
});

// ─────────────────────────────────────────────
// safeExecute
// ─────────────────────────────────────────────
describe("safeExecute", () => {
  it("deve retornar success com data quando a função não lança erro", () => {
    const result = safeExecute(() => 42);
    expect(result).toEqual({ success: true, data: 42 });
  });

  it("deve retornar success com string", () => {
    const result = safeExecute(() => "hello");
    expect(result).toEqual({ success: true, data: "hello" });
  });

  it("deve retornar error quando a função lança erro", () => {
    const result = safeExecute(() => {
      throw new Error("algo deu errado");
    });
    expect(result).toEqual({ success: false, error: "algo deu errado" });
  });

  it("deve capturar erro de validação", () => {
    const result = safeExecute(() => validateEmail("invalido"));
    expect(result).toEqual({
      success: false,
      error: "Email inválido: invalido",
    });
  });

  it("deve retornar success quando a validação passa", () => {
    const result = safeExecute(() => validateEmail("user@gmail.com"));
    expect(result).toEqual({ success: true, data: undefined });
  });
});
