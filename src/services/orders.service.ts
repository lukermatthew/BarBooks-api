import { db } from '../../db';
import { Order } from '../models/order.model';

export function getAllOrders(product: string, limit: number, offset: number): Order[] {
  const stmt = db.prepare(`
    SELECT * FROM orders
    WHERE product LIKE ?
    ORDER BY id DESC
    LIMIT ? OFFSET ?
  `);
  return stmt.all(`%${product}%`, limit, offset) as Order[];
}



export function insertOrder(product: string, qty: number, price: number): Order {
  const stmt = db.prepare('INSERT INTO orders (product, qty, price) VALUES (?, ?, ?)');
  const result = stmt.run(product, qty, price);

  return {
    id: result.lastInsertRowid as number,
    product,
    qty,
    price,
  };
}

export function fetchAllOrders(): Order[] {
  const rows = db.prepare('SELECT * FROM orders').all();
  return rows as Order[];
}
