import { SafeResult } from "../types";

/**
 * Valida que uma string não está vazia (após trim).
 * Lança um Error com a mensagem: `"${fieldName} é obrigatório"`
 *
 * @param value - O valor a ser validado.
 * @param fieldName - O nome do campo (usado na mensagem de erro).
 * @throws Error se o valor for vazio após trim.
 */
export function validateRequiredString(
  value: string,
  fieldName: string,
): void {
  // TODO: Implemente a validação
  throw new Error("Não implementado");
}

/**
 * Valida que um email possui formato válido.
 * O email deve conter exatamente um "@" e pelo menos um "." após o "@".
 * Lança um Error com a mensagem: `"Email inválido: ${email}"`
 *
 * @param email - O email a ser validado.
 * @throws Error se o formato for inválido.
 */
export function validateEmail(email: string): void {
  // TODO: Implemente a validação de email
  throw new Error("Não implementado");
}

/**
 * Valida que um número é positivo (maior que zero) e finito.
 * Lança um Error com a mensagem: `"${fieldName} deve ser um número positivo"`
 *
 * @param value - O valor numérico a ser validado.
 * @param fieldName - O nome do campo (usado na mensagem de erro).
 * @throws Error se o valor não for positivo ou não for finito.
 */
export function validatePositiveNumber(
  value: number,
  fieldName: string,
): void {
  // TODO: Implemente a validação
  throw new Error("Não implementado");
}

/**
 * Valida que a idade está dentro de um intervalo aceitável (0 a 150)
 * e é um número inteiro finito.
 * Lança um Error com a mensagem: `"Idade inválida: ${age}"`
 *
 * @param age - A idade a ser validada.
 * @throws Error se a idade for inválida.
 */
export function validateAge(age: number): void {
  // TODO: Implemente a validação de idade
  throw new Error("Não implementado");
}

/**
 * Executa uma função de forma segura, capturando qualquer erro lançado.
 * Retorna um objeto com `success: true` e `data` em caso de sucesso,
 * ou `success: false` e `error` (mensagem do erro) em caso de falha.
 *
 * @example
 * safeExecute(() => validateEmail("invalido")) // { success: false, error: "Email inválido: invalido" }
 * safeExecute(() => "ok")                      // { success: true, data: "ok" }
 *
 * @param fn - A função a ser executada.
 * @returns O resultado encapsulado.
 */
export function safeExecute<T>(fn: () => T): SafeResult<T> {
  // TODO: Implemente o wrapper try/catch
  throw new Error("Não implementado");
}
