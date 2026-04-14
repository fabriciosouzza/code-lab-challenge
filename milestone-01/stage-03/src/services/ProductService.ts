import { Product, CreateProductInput } from "../types";

/**
 * Service responsável pelo catálogo de produtos.
 *
 * Responsabilidades:
 * - Cadastrar novos produtos com validação.
 * - Buscar produtos por ID.
 * - Listar todos os produtos.
 * - Filtrar produtos por categoria.
 * - Gerar IDs únicos para cada produto.
 *
 * Validações no cadastro:
 * - Nome não pode ser vazio.
 * - Preço deve ser positivo e finito.
 * - Categoria não pode ser vazia.
 *
 * Deve lançar Error com mensagens descritivas para cada falha de validação.
 */
export class ProductService {
  // TODO: Declare o armazenamento interno de produtos

  /**
   * Cadastra um novo produto.
   * @returns O produto criado com ID gerado.
   * @throws Error se a validação falhar.
   */
  create(input: CreateProductInput): Product {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Busca um produto pelo ID.
   * @throws Error se o produto não for encontrado.
   */
  findById(id: string): Product {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna todos os produtos cadastrados.
   */
  findAll(): Product[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna todos os produtos de uma categoria específica.
   */
  findByCategory(category: string): Product[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }
}
