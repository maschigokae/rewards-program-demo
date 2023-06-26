import { mockData } from '../data/mockData';

export const api = {
    getOrdersByCustomerId: (customerId, options) => {
        const { ordersByCustomer } = mockData;
        const orders = ordersByCustomer[customerId];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!orders) {
                    reject(new Error(`No orders found for customerId ${customerId}`));
                    return;
                }

                const dateRange = options && options.startDate && options.endDate;

                if (dateRange) {
                    const inRangeOrders = orders.filter(order => new Date(order.orderDate) >= options.startDate && new Date(order.orderDate) <= options.endDate);
                    resolve(inRangeOrders);
                    return;
                }

                resolve(orders);
            }, 500);
        });
    },
};