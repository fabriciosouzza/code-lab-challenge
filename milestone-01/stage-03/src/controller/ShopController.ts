import { UserService } from "../services/UserService";
import { ProductService } from "../services/ProductService";
import { InventoryService } from "../services/InventoryService";
import { CartService } from "../services/CartService";
import {
  User,
  Product,
  CartItem,
  CheckoutResult,
  CategoryReport,
} from "../types";

/**
 * Controller que orquestra todos os services do sistema de loja.
 *
 * Este é o ponto de entrada (entrypoint) da aplicação.
 * Todas as operações passam pelo controller, que delega para os services apropriados.
 *
 * Fluxo principal:
 * 1. Cadastrar usuários e produtos
 * 2. Adicionar estoque aos produtos
 * 3. Usuários adicionam produtos ao carrinho
 * 4. Checkout: processa o carrinho, dá baixa no estoque
 * 5. Relatórios: faturamento por categoria
 */
export class ShopController {
  // TODO: Declare e inicialize os 4 services no construtor

  constructor() {
    // TODO: Inicialize UserService, ProductService, InventoryService, CartService
    throw new Error("Não implementado");
  }

  // ─────────────────────────────────────────
  // Usuários
  // ─────────────────────────────────────────

  /**
   * Cadastra um novo usuário.
   * @throws Error se a validação falhar ou email já existir.
   */
  registerUser(name: string, email: string, age: number): User {
    // TODO: Delegue para UserService
    throw new Error("Não implementado");
  }

  /**
   * Busca um usuário pelo ID.
   * @throws Error se não encontrado.
   */
  getUser(userId: string): User {
    // TODO: Delegue para UserService
    throw new Error("Não implementado");
  }

  // ─────────────────────────────────────────
  // Produtos
  // ─────────────────────────────────────────

  /**
   * Cadastra um novo produto no catálogo.
   * @throws Error se a validação falhar.
   */
  createProduct(name: string, price: number, category: string): Product {
    // TODO: Delegue para ProductService
    throw new Error("Não implementado");
  }

  /**
   * Busca um produto pelo ID.
   * @throws Error se não encontrado.
   */
  getProduct(productId: string): Product {
    // TODO: Delegue para ProductService
    throw new Error("Não implementado");
  }

  /**
   * Lista todos os produtos de uma categoria.
   */
  getProductsByCategory(category: string): Product[] {
    // TODO: Delegue para ProductService
    throw new Error("Não implementado");
  }

  // ─────────────────────────────────────────
  // Estoque
  // ─────────────────────────────────────────

  /**
   * Adiciona estoque a um produto.
   * @throws Error se o produto não existir ou quantidade <= 0.
   */
  addStock(productId: string, quantity: number): void {
    // TODO: Busque o produto via ProductService, delegue para InventoryService
    throw new Error("Não implementado");
  }

  /**
   * Consulta o estoque de um produto.
   */
  getStock(productId: string): number {
    // TODO: Delegue para InventoryService
    throw new Error("Não implementado");
  }

  // ─────────────────────────────────────────
  // Carrinho
  // ─────────────────────────────────────────

  /**
   * Adiciona um produto ao carrinho de um usuário.
   * Deve validar que o usuário e o produto existem.
   * @throws Error se o usuário ou produto não existir, ou quantidade <= 0.
   */
  addToCart(userId: string, productId: string, quantity: number): void {
    // TODO: Valide usuário e produto, delegue para CartService
    throw new Error("Não implementado");
  }

  /**
   * Retorna os itens do carrinho de um usuário.
   */
  getCart(userId: string): CartItem[] {
    // TODO: Delegue para CartService
    throw new Error("Não implementado");
  }

  /**
   * Retorna o valor total do carrinho de um usuário.
   */
  getCartTotal(userId: string): number {
    // TODO: Delegue para CartService
    throw new Error("Não implementado");
  }

  // ─────────────────────────────────────────
  // Checkout
  // ─────────────────────────────────────────

  /**
   * Processa o checkout do carrinho de um usuário.
   *
   * Para cada item no carrinho:
   * - Se houver estoque: dá baixa, registra venda, adiciona aos processados.
   * - Se não houver: adiciona aos indisponíveis.
   *
   * Após o processamento, limpa o carrinho do usuário.
   * Deve gerar um orderId único.
   *
   * @throws Error se o usuário não existir.
   * @throws Error se o carrinho estiver vazio.
   */
  checkout(userId: string): CheckoutResult {
    // TODO: Implemente o fluxo completo de checkout
    throw new Error("Não implementado");
  }

  // ─────────────────────────────────────────
  // Relatórios
  // ─────────────────────────────────────────

  /**
   * Gera um relatório de vendas agrupado por categoria.
   * Deve usar os dados de vendas registrados pelo InventoryService.
   * Ordena por totalRevenue decrescente.
   *
   * @returns Array de CategoryReport.
   */
  getCategoryReport(): CategoryReport[] {
    // TODO: Agregue as vendas registradas por categoria
    throw new Error("Não implementado");
  }
}
