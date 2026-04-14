# Stage 01 - Manipulação de Dados

## O Problema

Sua empresa recebeu dados de usuários vindos de um sistema legado. Os dados estão sujos: nomes com espaços extras, emails em casing inconsistente e registros inválidos. Além disso, o time de produto precisa cruzar esses dados com o histórico de compras e gerar relatórios de faturamento por categoria.

## O Desafio

Implemente as funções em cada step. Cada step está em sua pasta dentro de `src/` e possui seu próprio arquivo de teste.

---

### Step 01 — Sanitização (`src/step-01/sanitize.ts`)

Limpar e validar um array de usuários brutos.

| Função                 | Descrição                                                           |
| ---------------------- | ------------------------------------------------------------------- |
| `sanitizeName(name)`   | Remove espaços extras nas extremidades e normaliza espaços internos |
| `sanitizeEmail(email)` | Remove todos os espaços e converte para lowercase                   |
| `isValidUser(user)`    | Verifica se nome/email não estão vazios e idade é válida            |
| `sanitizeUsers(users)` | Pipeline completo: filtra inválidos + sanitiza nome e email         |

### Step 02 — Cruzamento de Dados (`src/step-02/merge.ts`)

Unificar a lista de usuários com o histórico de compras por ID.

| Função                                         | Descrição                                              |
| ---------------------------------------------- | ------------------------------------------------------ |
| `mergeUsersWithPurchases(users, purchases)`    | Associa compras ao usuário correspondente via `userId` |
| `filterUsersWithPurchases(usersWithPurchases)` | Retorna apenas usuários com pelo menos uma compra      |
| `findOrphanUserIds(usersWithPurchases)`        | Retorna IDs de usuários que nunca compraram            |

### Step 03 — Agregação (`src/step-03/aggregate.ts`)

Agrupar e totalizar transações por categoria usando `reduce`.

| Função                                      | Descrição                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------- |
| `aggregateByCategory(transactions)`         | Agrupa receita e conta transações por categoria (ordena por receita desc) |
| `getTopCategory(revenues)`                  | Retorna o nome da categoria com maior faturamento                         |
| `getAverageRevenuePerTransaction(revenues)` | Calcula a receita média por transação                                     |

---

## Resultado Esperado

- O comando `npm run test` deve passar com **todos os testes verdes**.
- Não altere os arquivos de teste em `tests/`.
- Todos os tipos estão definidos em `src/types.ts` — use-os.

> 💡 **Dica:** Você pode rodar os testes de cada step separadamente:
> ```bash
> npx jest step-01
> npx jest step-02
> npx jest step-03
> ```

## Como rodar

```bash
# Instale as dependências
npm install

# Execute todos os testes
npm run test

# Execute um step específico
npx jest step-01
npx jest step-02
npx jest step-03
```

## Materiais de Apoio (Links)

- [MDN - Array.prototype.filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN - Array.prototype.map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Array.prototype.reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN - String.prototype.trim](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [TypeScript - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
