# Stage 02 - Validação e POO

## O Desafio

O stage está dividido em 3 steps progressivos.

---

### Step 01 — Tratamento de Erros (`src/step-01/validators.ts`)

Funções de validação que lançam `Error` com mensagens descritivas.

| Função                         | Descrição                                                                 |
| ------------------------------ | ------------------------------------------------------------------------- |
| `validateRequiredString(v, f)` | Lança erro se `v` estiver vazio                                           |
| `validateEmail(email)`         | Lança erro se o email não contiver `@` e `.` após o `@`                   |
| `validatePositiveNumber(v, f)` | Lança erro se `v` não for positivo e finito                               |
| `validateAge(age)`             | Lança erro se a idade não for inteiro entre 0 e 150                       |
| `safeExecute(fn)`              | Wrapper try/catch que retorna `{ success, data }` ou `{ success, error }` |

### Step 02 — Entidades Isoladas (`src/step-02/`)

Classes com encapsulamento (campos privados + getters) e validação no construtor.

| Classe    | Getters                           | Mutadores        |
| --------- | --------------------------------- | ---------------- |
| `Product` | `id`, `name`, `price`, `category` | `setPrice(n)`    |
| `User`    | `id`, `name`, `email`, `age`      | `updateEmail(e)` |

### Step 03 — Interação (`src/step-03/`)

Classes que interagem entre si para simular um fluxo de compras.

| Classe/Função       | Descrição                                                                   |
| ------------------- | --------------------------------------------------------------------------- |
| `Cart`              | Carrinho com `addItem`, `removeItem`, `updateQuantity`, `getTotal`, `clear` |
| `Inventory`         | Estoque com `addStock`, `removeStock`, `getStock`, `hasEnough`              |
| `processCheckout()` | Processa carrinho vs. estoque: baixa disponíveis, marca indisponíveis       |

---

## Resultado Esperado

- O comando `npm run test` deve passar com **todos os testes verdes**.
- Não altere os arquivos de teste em `tests/`.

> 💡 Execute os testes por step:
> ```bash
> npx jest step-01
> npx jest step-02
> npx jest step-03
> ```

## Como rodar

```bash
npm install
npm run test
```

## Materiais de Apoio

- [MDN - throw](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw)
- [MDN - try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
- [TypeScript - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [TypeScript - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
