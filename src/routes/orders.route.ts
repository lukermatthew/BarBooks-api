import express from 'express';
import { createOrder, getOrders, getSummary } from '../controllers/orders.controller';

const router = express.Router();

/**
 * @route   GET /api/orders
 * @desc    Get all orders with optional filters (product, limit, offset)
 */
router.get('/orders', getOrders);

/**
 * @route   GET /api/summary
 * @desc    Get summary of all orders
 */
router.get('/summary', getSummary);

/**
 * @route   POST /api/orders
 * @desc    Create a new order
 */
router.post('/orders', createOrder);

export default router;
