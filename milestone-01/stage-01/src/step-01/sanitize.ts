import { RawUser, SanitizedUser } from "../types";

/**
 * Lista de domínios de email considerados válidos pelo sistema.
 */
export const VALID_EMAIL_DOMAINS: string[] = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "icloud.com",
  "protonmail.com",
];

/**
 * Sanitiza o nome de um usuário: remove espaços extras nas
 * extremidades e normaliza espaços duplos internos.
 *
 * @example
 * sanitizeName("  João   Silva  ") // "João Silva"
 *
 * @param name - O nome bruto.
 * @returns O nome sanitizado.
 */
export function sanitizeName(name: string): string {
  // TODO: Implemente a sanitização do nome
  throw new Error("Não implementado");
}

/**
 * Sanitiza o email de um usuário: remove espaços e converte para lowercase.
 *
 * @example
 * sanitizeEmail("  User@Gmail.COM  ") // "user@gmail.com"
 *
 * @param email - O email bruto.
 * @returns O email sanitizado.
 */
export function sanitizeEmail(email: string): string {
  // TODO: Implemente a sanitização do email
  throw new Error("Não implementado");
}

/**
 * Verifica se o domínio do email pertence à lista de domínios válidos.
 * A verificação deve ser feita após a sanitização do email (lowercase, sem espaços).
 *
 * @example
 * isValidEmailDomain("user@gmail.com")      // true
 * isValidEmailDomain("user@empresa.com.br") // false
 * isValidEmailDomain("invalido")            // false
 *
 * @param email - O email já sanitizado.
 * @returns `true` se o domínio for válido, `false` caso contrário.
 */
export function isValidEmailDomain(email: string): boolean {
  // TODO: Implemente a validação do domínio
  throw new Error("Não implementado");
}

/**
 * Verifica se um usuário bruto é válido. Um usuário é inválido se:
 * - O nome estiver vazio
 * - O email estiver vazio
 * - O domínio do email não pertencer à lista de domínios válidos
 * - A idade for menor que 0 ou não for um número finito
 *
 * @param user - O usuário bruto a ser validado.
 * @returns `true` se o usuário for válido, `false` caso contrário.
 */
export function isValidUser(user: RawUser): boolean {
  // TODO: Implemente a validação
  throw new Error("Não implementado");
}

/**
 * Recebe um array de usuários brutos e retorna um novo array contendo
 * apenas os usuários válidos, com nome e email sanitizados.
 *
 * Passos:
 * 1. Filtrar usuários inválidos
 * 2. Sanitizar nome
 * 3. Sanitizar email
 *
 * @param users - Array de usuários brutos.
 * @returns Array de usuários sanitizados e válidos.
 */
export function sanitizeUsers(users: RawUser[]): SanitizedUser[] {
  // TODO: Implemente o pipeline de sanitização
  throw new Error("Não implementado");
}
