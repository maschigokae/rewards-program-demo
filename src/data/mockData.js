export const mockData = {
    customers: [
        {
            name: 'Lucas Parker',
            id: 12345,
        },
        {
            name: 'Ava Patterson',
            id: 23456,
        },
        {
            name: 'Ethan Ramirez',
            id: 34567,
        },
        {
            name: 'Sophia Carter',
            id: 45678,
        },
        {
            name: 'Benjamin Reynolds',
            id: 56789,
        },
        {
            name: 'Isabella Hayes',
            id: 67890,
        },
    ],
    // Mocking API responses for GET orders by `customerId`, not DB model
    ordersByCustomer: {
        12345: [
            {
                orderId: 130164,
                orderDate: '2022-11-16 00:00:00',
                subtotal: 98.10,
                // omitting tax, shipping, items, other fields...
            },
            {
                orderId: 552914,
                orderDate: '2023-03-01 00:00:00',
                subtotal: 51.33,
            },
            {
                orderId: 874205,
                orderDate: '2023-03-02 00:00:00',
                subtotal: 19.71,
            },
            {
                orderId: 309846,
                orderDate: '2023-04-04 00:00:00',
                subtotal: 67.40,
            },
            {
                orderId: 521973,
                orderDate: '2023-05-14 00:00:00',
                subtotal: 210.19,
            },
            {
                orderId: 436911,
                orderDate: '2023-05-28 00:00:00',
                subtotal: 61.50,
            },
            {
                orderId: 736518,
                orderDate: '2023-05-31 00:00:00',
                subtotal: 85.82,
            },
            {
                orderId: 190427,
                orderDate: '2023-06-15 00:00:00',
                subtotal: 172.93,
            },
        ],
        23456: [
            {
                orderId: 979272,
                orderDate: '2023-03-09 00:00:00',
                subtotal: 378.43,
            },
            {
                orderId: 645809,
                orderDate: '2023-05-01 00:00:00',
                subtotal: 78.43,
            },
            {
                orderId: 382965,
                orderDate: '2023-05-22 00:00:00',
                subtotal: 49.99,
            },
            {
                orderId: 957041,
                orderDate: '2023-06-03 00:00:00',
                subtotal: 151.62,
            },
        ],
        34567: [
            {
                orderId: 826493,
                orderDate: '2023-04-09 00:00:00',
                subtotal: 58.99,
            },
            {
                orderId: 475629,
                orderDate: '2023-04-18 00:00:00',
                subtotal: 96.00,
            },
            {
                orderId: 691530,
                orderDate: '2023-05-20 00:00:00',
                subtotal: 37.99,
            },
        ],
        // Customer has only earned 1 point for all orders
        45678: [
            {
                orderId: 237184,
                orderDate: '2023-01-15 00:00:00',
                subtotal: 20.97,
            },
            {
                orderId: 894726,
                orderDate: '2023-03-31 00:00:00',
                subtotal: 38.31,
            },
            {
                orderId: 723519,
                orderDate: '2023-04-02 00:00:00',
                subtotal: 19.01,
            },
            {
                orderId: 417935,
                orderDate: '2023-05-12 00:00:00',
                subtotal: 51.99,
            },
            {
                orderId: 759608,
                orderDate: '2023-06-02 00:00:00',
                subtotal: 40.30,
            },
        ],
        // None of customer's orders meet threshold for earning points
        56789: [
            {
                orderId: 362041,
                orderDate: '2023-04-11 00:00:00',
                subtotal: 38.51,
            },
            {
                orderId: 528146,
                orderDate: '2023-05-02 00:00:00',
                subtotal: 29.61,
            },
        ],
        // None of customer's orders are within the 3-month date range
        67890: [
            {
                orderId: 913702,
                orderDate: '2023-01-21 00:00:00',
                subtotal: 114.75,
            },
            {
                orderId: 648179,
                orderDate: '2023-02-19 00:00:00',
                subtotal: 146.24,
            },
        ],
    },
};