import { fizzBuzz } from "../src/step-02/fizzBuzz";
import { isPalindrome } from "../src/step-02/isPalindrome";
import { findMax } from "../src/step-02/findMax";
import { removeDuplicates } from "../src/step-02/removeDuplicates";
import { isPerfectSquare } from "../src/step-02/isPerfectSquare";
import { romanToInteger } from "../src/step-02/romanToInteger";

// ─────────────────────────────────────────────
// 1. fizzBuzz
// ─────────────────────────────────────────────
describe("fizzBuzz", () => {
  it("deve retornar o array correto para n = 5", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("deve retornar FizzBuzz para múltiplos de 3 e 5", () => {
    const result = fizzBuzz(15);
    expect(result[14]).toBe("FizzBuzz");
  });

  it("deve retornar Fizz para múltiplos de 3", () => {
    const result = fizzBuzz(3);
    expect(result[2]).toBe("Fizz");
  });

  it("deve retornar Buzz para múltiplos de 5", () => {
    const result = fizzBuzz(10);
    expect(result[9]).toBe("Buzz");
  });

  it("deve retornar um array com 15 elementos para n = 15", () => {
    expect(fizzBuzz(15)).toHaveLength(15);
  });

  it("deve retornar array vazio para n = 0", () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  it("deve retornar os valores corretos para n = 50", () => {
    const result = fizzBuzz(50);
    expect(result).toHaveLength(50);
    // Números normais
    expect(result[0]).toBe("1");
    expect(result[1]).toBe("2");
    expect(result[3]).toBe("4");
    expect(result[6]).toBe("7");
    expect(result[10]).toBe("11");
    expect(result[12]).toBe("13");
    expect(result[15]).toBe("16");
    // Fizz (múltiplos de 3)
    expect(result[2]).toBe("Fizz");
    expect(result[5]).toBe("Fizz");
    expect(result[8]).toBe("Fizz");
    expect(result[17]).toBe("Fizz");
    expect(result[23]).toBe("Fizz");
    expect(result[32]).toBe("Fizz");
    // Buzz (múltiplos de 5)
    expect(result[4]).toBe("Buzz");
    expect(result[9]).toBe("Buzz");
    expect(result[19]).toBe("Buzz");
    expect(result[24]).toBe("Buzz");
    expect(result[49]).toBe("Buzz");
    // FizzBuzz (múltiplos de 3 e 5)
    expect(result[14]).toBe("FizzBuzz");
    expect(result[29]).toBe("FizzBuzz");
    expect(result[44]).toBe("FizzBuzz");
  });
});

// ─────────────────────────────────────────────
// 2. isPalindrome
// ─────────────────────────────────────────────
describe("isPalindrome", () => {
  it("deve retornar true para um palíndromo simples", () => {
    expect(isPalindrome("arara")).toBe(true);
  });

  it("deve retornar false para uma string que não é palíndromo", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("deve ignorar diferenças de maiúsculas e minúsculas", () => {
    expect(isPalindrome("Ovo")).toBe(true);
  });

  it("deve ignorar espaços na verificação", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  it("deve retornar true para uma string de um caractere", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("deve retornar true para uma string vazia", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("deve ignorar pontuação e acentos — Socorram-me", () => {
    expect(isPalindrome("Socorram-me, subi no ônibus em Marrocos")).toBe(true);
  });

  it("deve ignorar pontuação e acentos — Anotaram", () => {
    expect(isPalindrome("Anotaram a data da maratona")).toBe(true);
  });

  it("deve ignorar pontuação e acentos — Jararaca", () => {
    expect(isPalindrome("A cara rajada da jararaca")).toBe(true);
  });

  it("deve ignorar pontuação e acentos — Amarga", () => {
    expect(isPalindrome("A grama é amarga")).toBe(true);
  });

  it("deve ignorar pontuação e acentos — Never odd or even", () => {
    expect(isPalindrome("Never odd or even")).toBe(true);
  });

  it("deve retornar false para uma frase que não é palíndromo", () => {
    expect(isPalindrome("this is not a palindrome, ok?")).toBe(false);
  });
});

// ─────────────────────────────────────────────
// 3. findMax
// ─────────────────────────────────────────────
describe("findMax", () => {
  it("deve encontrar o maior número em um array positivo", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  it("deve encontrar o maior em um array de negativos", () => {
    expect(findMax([-10, -3, -20])).toBe(-3);
  });

  it("deve funcionar com um único elemento", () => {
    expect(findMax([42])).toBe(42);
  });

  it("deve lançar erro quando o array estiver vazio", () => {
    expect(() => findMax([])).toThrow("O array não pode estar vazio");
  });

  it("deve funcionar com números mistos (positivos e negativos)", () => {
    expect(findMax([-5, 0, 10, -2, 7])).toBe(10);
  });

  it("deve encontrar o maior com valores decimais", () => {
    expect(findMax([1, 5, 3, 9, 2, 50.2])).toBe(50.2);
  });
});

// ─────────────────────────────────────────────
// 4. removeDuplicates
// ─────────────────────────────────────────────
describe("removeDuplicates", () => {
  it("deve remover números duplicados", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("deve remover strings duplicadas", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  it("deve retornar array vazio quando receber array vazio", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it("deve preservar a ordem original", () => {
    expect(removeDuplicates([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });

  it("deve retornar o mesmo array se não houver duplicatas", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("deve remover duplicatas em um array com tipos mistos", () => {
    expect(
      removeDuplicates([
        1,
        2,
        2,
        3,
        4,
        4,
        5,
        "a",
        "a",
        "b",
        "word",
        "word",
        32,
      ]),
    ).toEqual([1, 2, 3, 4, 5, "a", "b", "word", 32]);
  });
});

// ─────────────────────────────────────────────
// 5. isPerfectSquare
// ─────────────────────────────────────────────
describe("isPerfectSquare", () => {
  it("deve retornar true para 1 (1 * 1)", () => {
    expect(isPerfectSquare(1)).toBe(true);
  });

  it("deve retornar true para 4 (2 * 2)", () => {
    expect(isPerfectSquare(4)).toBe(true);
  });

  it("deve retornar true para 9 (3 * 3)", () => {
    expect(isPerfectSquare(9)).toBe(true);
  });

  it("deve retornar true para 16 (4 * 4)", () => {
    expect(isPerfectSquare(16)).toBe(true);
  });

  it("deve retornar true para 25 (5 * 5)", () => {
    expect(isPerfectSquare(25)).toBe(true);
  });

  it("deve retornar true para 100 (10 * 10)", () => {
    expect(isPerfectSquare(100)).toBe(true);
  });

  it("deve retornar false para 14", () => {
    expect(isPerfectSquare(14)).toBe(false);
  });

  it("deve retornar false para 2", () => {
    expect(isPerfectSquare(2)).toBe(false);
  });

  it("deve retornar false para 3", () => {
    expect(isPerfectSquare(3)).toBe(false);
  });

  it("deve retornar false para 45", () => {
    expect(isPerfectSquare(45)).toBe(false);
  });

  it("deve funcionar com números grandes — 625 (25 * 25)", () => {
    expect(isPerfectSquare(625)).toBe(true);
  });

  it("deve funcionar com números grandes — 808201 (899 * 899)", () => {
    expect(isPerfectSquare(808201)).toBe(true);
  });

  it("deve retornar false para números grandes não quadrados — 808200", () => {
    expect(isPerfectSquare(808200)).toBe(false);
  });
});

// ─────────────────────────────────────────────
// 6. romanToInteger
// ─────────────────────────────────────────────
describe("romanToInteger", () => {
  it("deve converter I para 1", () => {
    expect(romanToInteger("I")).toBe(1);
  });

  it("deve converter III para 3", () => {
    expect(romanToInteger("III")).toBe(3);
  });

  it("deve converter IV para 4 (subtração)", () => {
    expect(romanToInteger("IV")).toBe(4);
  });

  it("deve converter IX para 9 (subtração)", () => {
    expect(romanToInteger("IX")).toBe(9);
  });

  it("deve converter XLII para 42", () => {
    expect(romanToInteger("XLII")).toBe(42);
  });

  it("deve converter XC para 90", () => {
    expect(romanToInteger("XC")).toBe(90);
  });

  it("deve converter CD para 400", () => {
    expect(romanToInteger("CD")).toBe(400);
  });

  it("deve converter CM para 900", () => {
    expect(romanToInteger("CM")).toBe(900);
  });

  it("deve converter MCMXCIV para 1994", () => {
    expect(romanToInteger("MCMXCIV")).toBe(1994);
  });

  it("deve converter MMXXVI para 2026", () => {
    expect(romanToInteger("MMXXVI")).toBe(2026);
  });

  it("deve converter MMMCMXCIX para 3999", () => {
    expect(romanToInteger("MMMCMXCIX")).toBe(3999);
  });
});
