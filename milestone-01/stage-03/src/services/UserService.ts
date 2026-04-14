import { User, CreateUserInput } from "../types";

/**
 * Service responsável pelo gerenciamento de usuários.
 *
 * Responsabilidades:
 * - Cadastrar novos usuários com validação.
 * - Buscar usuários por ID.
 * - Listar todos os usuários.
 * - Gerar IDs únicos para cada usuário.
 *
 * Validações no cadastro:
 * - Nome não pode ser vazio.
 * - Email deve conter "@" e "." após o "@".
 * - Idade deve ser inteiro entre 0 e 150.
 * - Email não pode estar duplicado (já cadastrado).
 *
 * Deve lançar Error com mensagens descritivas para cada falha de validação.
 */
export class UserService {
  // TODO: Declare o armazenamento interno de usuários

  /**
   * Cadastra um novo usuário.
   * @returns O usuário criado com ID gerado.
   * @throws Error se a validação falhar ou email já existir.
   */
  create(input: CreateUserInput): User {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Busca um usuário pelo ID.
   * @throws Error se o usuário não for encontrado.
   */
  findById(id: string): User {
    // TODO: Implemente
    throw new Error("Não implementado");
  }

  /**
   * Retorna todos os usuários cadastrados.
   */
  findAll(): User[] {
    // TODO: Implemente
    throw new Error("Não implementado");
  }
}
