/**
 * Classe que representa um Usuário no sistema.
 *
 * Regras:
 * - `id` e `name` são obrigatórios (não podem ser vazios).
 * - `email` deve ter formato válido (conter "@" e "." após o "@").
 * - `age` deve ser um inteiro entre 0 e 150.
 * - Todas as propriedades devem ser acessíveis via getters.
 * - O email pode ser atualizado via `updateEmail`, com validação.
 *
 * O construtor deve lançar Error se qualquer validação falhar.
 *
 * @example
 * const user = new User("1", "João Silva", "joao@gmail.com", 30);
 * user.name   // "João Silva"
 * user.email  // "joao@gmail.com"
 * user.updateEmail("joao.silva@outlook.com"); // OK
 * user.updateEmail("invalido");               // throws Error
 */
export class User {
  // TODO: Declare os campos privados

  constructor(id: string, name: string, email: string, age: number) {
    // TODO: Valide os parâmetros e atribua aos campos privados
    throw new Error("Não implementado");
  }

  get id(): string {
    // TODO: Retorne o id
    throw new Error("Não implementado");
  }

  get name(): string {
    // TODO: Retorne o nome
    throw new Error("Não implementado");
  }

  get email(): string {
    // TODO: Retorne o email
    throw new Error("Não implementado");
  }

  get age(): number {
    // TODO: Retorne a idade
    throw new Error("Não implementado");
  }

  /**
   * Atualiza o email do usuário.
   * Deve lançar Error se o formato for inválido.
   *
   * @param newEmail - O novo email.
   */
  updateEmail(newEmail: string): void {
    // TODO: Valide e atualize o email
    throw new Error("Não implementado");
  }
}
