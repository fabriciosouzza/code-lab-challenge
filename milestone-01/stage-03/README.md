# Stage 03 - Challenge: Sistema Completo

## O Desafio

Implemente os **4 services** e o **ShopController** que os orquestra. Os testes interagem **exclusivamente** com o controller — a arquitetura interna é sua decisão.

---

### Arquitetura

```
src/
├── types.ts                          ← Interfaces já definidas
├── services/
│   ├── UserService.ts                ← Cadastro e busca de usuários
│   ├── ProductService.ts             ← Catálogo de produtos
│   ├── InventoryService.ts           ← Gestão de estoque e registro de vendas
│   └── CartService.ts                ← Carrinhos por usuário
└── controller/
    └── ShopController.ts             ← Entrypoint que orquestra tudo
```

### Services

| Service            | Responsabilidade                                |
| ------------------ | ----------------------------------------------- |
| `UserService`      | Cadastro, busca e validação de usuários         |
| `ProductService`   | Cadastro, busca e filtragem de produtos         |
| `InventoryService` | Controle de estoque, baixa e registro de vendas |
| `CartService`      | Gerenciar carrinhos individuais por usuário     |

### ShopController (Entrypoint)

| Método                              | Descrição                                                   |
| ----------------------------------- | ----------------------------------------------------------- |
| `registerUser(name, email, age)`    | Cadastra usuário via UserService                            |
| `getUser(userId)`                   | Busca usuário                                               |
| `createProduct(name, price, cat)`   | Cadastra produto via ProductService                         |
| `getProduct(productId)`             | Busca produto                                               |
| `getProductsByCategory(cat)`        | Filtra produtos por categoria                               |
| `addStock(productId, qty)`          | Adiciona estoque via InventoryService                       |
| `getStock(productId)`               | Consulta estoque                                            |
| `addToCart(userId, productId, qty)` | Adiciona ao carrinho (valida usuário e produto)             |
| `getCart(userId)`                   | Retorna itens do carrinho                                   |
| `getCartTotal(userId)`              | Calcula total do carrinho                                   |
| `checkout(userId)`                  | Processa compra: baixa estoque, registra vendas, limpa cart |
| `getCategoryReport()`               | Relatório de vendas agrupado por categoria                  |

---

## Resultado Esperado

- O comando `npm run test` deve passar com **todos os testes verdes**.
- Não altere o arquivo `tests/shop.controller.test.ts`.
- Os tipos em `src/types.ts` já estão prontos — use-os.

## Como rodar

```bash
npm install
npm run test
```

## Materiais de Apoio

- [TypeScript - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [SOLID - Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
- [MDN - Map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map)
