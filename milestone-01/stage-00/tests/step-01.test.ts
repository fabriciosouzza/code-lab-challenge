import { swapValues } from "../src/step-01/swapValues";
import { linearFunction } from "../src/step-01/linearFunction";
import { reverseString } from "../src/step-01/reverseString";
import { countVowels } from "../src/step-01/countVowels";
import { capitalizeWords } from "../src/step-01/capitalize";
import { sumArray } from "../src/step-01/sumArray";

// ─────────────────────────────────────────────
// 1. swapValues
// ─────────────────────────────────────────────
describe("swapValues", () => {
  it("deve trocar dois números positivos", () => {
    const pair = { a: 1, b: 2 };
    swapValues(pair);
    expect(pair.a).toBe(2);
    expect(pair.b).toBe(1);
  });

  it("deve trocar números negativos", () => {
    const pair = { a: -10, b: 20 };
    swapValues(pair);
    expect(pair.a).toBe(20);
    expect(pair.b).toBe(-10);
  });

  it("deve trocar quando valores são iguais", () => {
    const pair = { a: 5, b: 5 };
    swapValues(pair);
    expect(pair.a).toBe(5);
    expect(pair.b).toBe(5);
  });

  it("deve trocar quando um dos valores é zero", () => {
    const pair = { a: 0, b: 42 };
    swapValues(pair);
    expect(pair.a).toBe(42);
    expect(pair.b).toBe(0);
  });

  it("deve trocar valores decimais", () => {
    const pair = { a: 3.14, b: 2.71 };
    swapValues(pair);
    expect(pair.a).toBeCloseTo(2.71);
    expect(pair.b).toBeCloseTo(3.14);
  });
});

// ─────────────────────────────────────────────
// 2. linearFunction
// ─────────────────────────────────────────────
describe("linearFunction", () => {
  it("deve calcular f(x) = 2x + 3 para x = 5", () => {
    expect(linearFunction(2, 3, 5)).toBe(13);
  });

  it("deve calcular f(x) = 1x + 0 para x = 10", () => {
    expect(linearFunction(1, 0, 10)).toBe(10);
  });

  it("deve calcular com coeficiente angular negativo", () => {
    expect(linearFunction(-1, 4, 2)).toBe(2);
  });

  it("deve retornar b quando x = 0", () => {
    expect(linearFunction(5, 7, 0)).toBe(7);
  });

  it("deve lidar com valores decimais", () => {
    expect(linearFunction(0.5, 1.5, 4)).toBeCloseTo(3.5);
  });
});

// ─────────────────────────────────────────────
// 3. reverseString
// ─────────────────────────────────────────────
describe("reverseString", () => {
  it("deve inverter uma string simples", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("deve inverter uma string com letras maiúsculas", () => {
    expect(reverseString("TypeScript")).toBe("tpircSepyT");
  });

  it("deve retornar uma string vazia quando receber uma string vazia", () => {
    expect(reverseString("")).toBe("");
  });

  it("deve inverter um único caractere", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("deve inverter uma string com espaços", () => {
    expect(reverseString("abc def")).toBe("fed cba");
  });

  it("deve inverter uma frase longa com números", () => {
    expect(reverseString("Frase aleatória para ser invertida abc123")).toBe(
      "321cba aditrevni res arap airótalea esarF",
    );
  });
});

// ─────────────────────────────────────────────
// 4. countVowels
// ─────────────────────────────────────────────
describe("countVowels", () => {
  it("deve contar vogais em uma string simples", () => {
    expect(countVowels("hello")).toBe(2);
  });

  it("deve ser case-insensitive", () => {
    expect(countVowels("AEIOU")).toBe(5);
  });

  it("deve retornar 0 para string sem vogais", () => {
    expect(countVowels("xyz")).toBe(0);
  });

  it("deve retornar 0 para string vazia", () => {
    expect(countVowels("")).toBe(0);
  });

  it("deve contar vogais em uma frase com acentos", () => {
    expect(countVowels("TypeScript é um superset")).toBe(8);
  });

  it("deve contar vogais em uma frase longa com pontuação", () => {
    expect(countVowels("This phrase has a lot of vowels, count it!")).toBe(12);
  });

  it("deve retornar 0 para palavra sem vogais tradicionais", () => {
    expect(countVowels("Rhythm")).toBe(0);
  });
});

// ─────────────────────────────────────────────
// 5. capitalizeWords
// ─────────────────────────────────────────────
describe("capitalizeWords", () => {
  it("deve capitalizar cada palavra de uma frase", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("deve funcionar com uma única palavra", () => {
    expect(capitalizeWords("typescript")).toBe("Typescript");
  });

  it("deve retornar string vazia quando receber string vazia", () => {
    expect(capitalizeWords("")).toBe("");
  });

  it("deve capitalizar frase com várias palavras", () => {
    expect(capitalizeWords("o rato roeu a roupa")).toBe("O Rato Roeu A Roupa");
  });

  it("deve manter letras já maiúsculas", () => {
    expect(capitalizeWords("HELLO WORLD")).toBe("HELLO WORLD");
  });

  it("deve capitalizar apenas a primeira letra de cada palavra", () => {
    expect(capitalizeWords("capitalize This phrase")).toBe(
      "Capitalize This Phrase",
    );
  });

  it("deve manter frase já totalmente capitalizada", () => {
    expect(capitalizeWords("This Word Is Already Capitalized")).toBe(
      "This Word Is Already Capitalized",
    );
  });
});

// ─────────────────────────────────────────────
// 6. sumArray
// ─────────────────────────────────────────────
describe("sumArray", () => {
  it("deve somar todos os números de um array", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  it("deve retornar 0 para um array vazio", () => {
    expect(sumArray([])).toBe(0);
  });

  it("deve lidar com números negativos", () => {
    expect(sumArray([-1, 1])).toBe(0);
  });

  it("deve funcionar com um único elemento", () => {
    expect(sumArray([10])).toBe(10);
  });

  it("deve somar array com negativos e positivos", () => {
    expect(sumArray([-5, 10, -3, 8])).toBe(10);
  });

  it("deve somar valores decimais (não inteiros)", () => {
    expect(sumArray([1.5, 2.3, 3.2])).toBeCloseTo(7.0);
  });

  it("deve somar mix de inteiros e decimais", () => {
    expect(sumArray([10, 0.5, -3.5, 2])).toBeCloseTo(9.0);
  });
});
