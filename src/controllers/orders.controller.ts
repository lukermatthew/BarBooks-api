import { Request, Response } from 'express';
import { getAllOrders, insertOrder, fetchAllOrders } from '../services/orders.service';
import { summarizeOrders } from '../summarizeOrders';

export const getSummary = (req: Request, res: Response) => {
  try {
    const orders = fetchAllOrders();
    const summary = summarizeOrders(orders);
    res.json(summary);
  } catch (error) {
    console.error('Error summarizing orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getOrders = (req: Request, res: Response) => {
  try {
    const { product = '', limit = '10', offset = '0' } = req.query;
    const rows = getAllOrders(
      String(product),
      parseInt(String(limit)),
      parseInt(String(offset))
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createOrder = (req: Request, res: Response) => {
  const { product, qty, price } = req.body;

  if (!product || typeof qty !== 'number' || typeof price !== 'number') {
    res.status(400).json({ error: 'Invalid input: product, qty, price are required.' });
    return;
  }

  try {
    const newOrder = insertOrder(product, qty, price);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error inserting order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};