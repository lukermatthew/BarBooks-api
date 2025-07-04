import Database from 'better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const DB_PATH = process.env.DB_PATH || './data.db';
export const db = new Database(DB_PATH);
