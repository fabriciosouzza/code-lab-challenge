# Stage 00 - Warmup: Lógica Pura com TypeScript

## Desafio

Implemente as **12 funções** abaixo. Cada função está em seu próprio arquivo dentro de `src/`, já com a assinatura de tipos e a documentação (JSDoc) descrevendo o comportamento esperado. Seu trabalho é substituir o `throw new Error("Não implementado")` pela lógica correta.

Os desafios estão divididos em **duas etapas** por nível de dificuldade.

---

## Etapa 01 — Fundamentos (`tests/stage-01.test.ts`)

| #   | Arquivo             | Função                    | Descrição                                       |
| --- | ------------------- | ------------------------- | ----------------------------------------------- |
| 1   | `swapValues.ts`     | `swapValues(pair)`        | Troca os valores de `pair.a` e `pair.b`         |
| 2   | `linearFunction.ts` | `linearFunction(a, b, x)` | Calcula o resultado de uma função linear        |
| 3   | `reverseString.ts`  | `reverseString(str)`      | Inverte uma string                              |
| 4   | `countVowels.ts`    | `countVowels(str)`        | Conta vogais (incluindo acentuadas: é, ô, etc.) |
| 5   | `capitalize.ts`     | `capitalizeWords(str)`    | Capitaliza a primeira letra de cada palavra     |
| 6   | `sumArray.ts`       | `sumArray(numbers)`       | Soma todos os números de um array               |

## Etapa 02 — Desafios Intermediários (`tests/stage-02.test.ts`)

| #   | Arquivo               | Função                    | Descrição                                                       |
| --- | --------------------- | ------------------------- | --------------------------------------------------------------- |
| 7   | `fizzBuzz.ts`         | `fizzBuzz(n)`             | Retorna array de FizzBuzz de 1 até `n`                          |
| 8   | `isPalindrome.ts`     | `isPalindrome(str)`       | Verifica palíndromo (ignora case, espaços, pontuação e acentos) |
| 9   | `findMax.ts`          | `findMax(numbers)`        | Encontra o maior número (sem `Math.max`)                        |
| 10  | `removeDuplicates.ts` | `removeDuplicates(items)` | Remove duplicatas preservando a ordem (usa Generics)            |
| 11  | `isPerfectSquare.ts`  | `isPerfectSquare(num)`    | Verifica quadrado perfeito (sem `Math.sqrt`)                    |
| 12  | `romanToInteger.ts`   | `romanToInteger(roman)`   | Converte número romano para inteiro (ex: `MCMXCIV` → `1994`)    |

---

## Resultado Esperado

- O comando `npm run test` deve passar com **todos os testes verdes**.
- Não altere os arquivos de teste em `tests/`.
- Use apenas TypeScript puro — nenhuma biblioteca externa é necessária.

> 💡 **Dica:** Você pode rodar os testes de cada etapa separadamente:
> ```bash
> npx jest step-01
> npx jest step-02
> ```

## Como rodar

```bash
# Instale as dependências
npm install

# Execute todos os testes
npm run test

# Execute apenas a Stage 01
npx jest step-01

# Execute apenas a Stage 02
npx jest step-02
```

## Materiais de Apoio (Links)

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [MDN - Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN - String.prototype.normalize](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [Jest - Getting Started](https://jestjs.io/docs/getting-started)
- [Números Romanos - Wikipedia](https://pt.wikipedia.org/wiki/Numera%C3%A7%C3%A3o_romana)
