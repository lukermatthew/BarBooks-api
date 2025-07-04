import { summarizeOrders, Order } from '../src/summarizeOrders';

// Compute:
// ○ totalRevenue = sum of qty * price
// ○ medianOrderPrice = median of all qty * price values
// ○ topProductByQty = product with highest total qty
// ○ uniqueProductCount = number of distinct products


// ● Tests: write at least two unit tests covering typical and edge cases.

describe('summarizeOrders', () => {
    it('should handle a typical case with multiple orders', () => {
      const orders: Order[] = [
        { id: 1, product: 'Apple', qty: 2, price: 3 },   
        { id: 2, product: 'Banana', qty: 1, price: 1 },  
        { id: 3, product: 'Apple', qty: 1, price: 3 },   
        { id: 4, product: 'Orange', qty: 4, price: 2 },  
        { id: 5, product: 'Grape', qty: 1, price: 5 }  
      ];
  
      const summary = summarizeOrders(orders);
  
      expect(summary.totalRevenue).toBe(23);
    //   expect(summary.totalRevenue).toBe(6 + 1 + 3 + 8 + 5); 
      expect(summary.medianOrderPrice).toBe(5); 
      expect(summary.topProductByQty).toBe('Orange');
      expect(summary.uniqueProductCount).toBe(4); 
    });
  
    it('should handle an edge case with a single order', () => {
      const orders: Order[] = [
        { id: 1, product: 'Apple', qty: 2, price: 3 }
      ];
  
      const summary = summarizeOrders(orders);
  
      expect(summary.totalRevenue).toBe(6); 
      expect(summary.medianOrderPrice).toBe(6); 
      expect(summary.topProductByQty).toBe('Apple');
      expect(summary.uniqueProductCount).toBe(1);
    });
  });
