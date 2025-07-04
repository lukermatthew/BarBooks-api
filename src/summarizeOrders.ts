export type Order = {
    id: number;
    product: string;
    qty: number;
    price: number;
  };
  
  export type Summary = {
    totalRevenue: number;
    medianOrderPrice: number;
    topProductByQty: string;
    uniqueProductCount: number;
  };
  
  export function summarizeOrders(orders: Order[]): Summary {
    if (orders.length === 0) {
      return {
        totalRevenue: 0,
        medianOrderPrice: 0,
        topProductByQty: '',
        uniqueProductCount: 0,
      };
    }
  
    const revenues = orders.map(order => order.qty * order.price);
    const totalRevenue = revenues.reduce((acc, curr) => acc + curr, 0);
  
    const sorted = revenues.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    const medianOrderPrice =
      sorted.length % 2 === 0
        ? (sorted[middle - 1] + sorted[middle]) / 2
        : sorted[middle];
  
    const qtyByProduct: Record<string, number> = {};
    for (const order of orders) {
      qtyByProduct[order.product] = (qtyByProduct[order.product] || 0) + order.qty;
    }
  
    const topProductByQty = Object.entries(qtyByProduct).reduce((max, curr) =>
      curr[1] > max[1] ? curr : max
    )[0];
  
    const uniqueProductCount = Object.keys(qtyByProduct).length;
  
    return {
      totalRevenue,
      medianOrderPrice,
      topProductByQty,
      uniqueProductCount,
    };
  }
  