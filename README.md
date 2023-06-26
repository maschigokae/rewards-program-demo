# Rewards Program Demo App

This project was bootstrapped with [Vite](https://vitejs.dev).

To get started:

```bash
npm install
npm run dev
```

## Use case
- For this example rewards program, a customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.
- Need to show 3-month range of transactions, with rewards broken down by month, as well as total for all 3 months.

## Additional Assumptions
- Rewards are awarded for whole dollar amounts in the purchase subtotal, e.g. a purchase of $74.99 would result in 24 rewards points awarded.
- This retailer posts points to user accounts in monthly statements at the end of each month; any points earned for the current month have not posted yet. Thus, transactions for last three __complete__ months relative to current date are fetched from mock server and displayed.
