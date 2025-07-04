import Database from 'better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const db = new Database(process.env.DB_PATH || './data.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT NOT NULL,
    qty INTEGER NOT NULL,
    price REAL NOT NULL
  );
`);

db.exec(`DELETE FROM orders;`);

const insert = db.prepare('INSERT INTO orders (product, qty, price) VALUES (?, ?, ?)');
const orders = [
  ['Apple', 2, 3.0],
  ['Banana', 1, 1.0],
  ['Apple', 1, 3.0],
  ['Orange', 4, 2.0],
  ['Grape', 1, 5.0],
];

for (const [product, qty, price] of orders) {
  insert.run(product, qty, price);
}

console.log('✅ Database seeded.');
