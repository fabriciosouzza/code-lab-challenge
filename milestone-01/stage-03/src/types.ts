// ─────────────────────────────────────────────
// Entidades
// ─────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StockEntry {
  product: Product;
  quantity: number;
}

// ─────────────────────────────────────────────
// Inputs
// ─────────────────────────────────────────────

export interface CreateUserInput {
  name: string;
  email: string;
  age: number;
}

export interface CreateProductInput {
  name: string;
  price: number;
  category: string;
}

// ─────────────────────────────────────────────
// Resultados
// ─────────────────────────────────────────────

export interface CheckoutResult {
  orderId: string;
  items: CartItem[];
  total: number;
  unavailable: Array<{
    productName: string;
    requested: number;
    available: number;
  }>;
}

export interface CategoryReport {
  category: string;
  totalRevenue: number;
  totalSold: number;
}
