# Shopping Cart (React)

A simple shopping cart built with React to practice core state management concepts.

## Features

- Display a list of products with prices
- Add products to the cart
- Increase and decrease item quantities
- Remove items from the cart
- Automatically remove items when quantity reaches zero
- Display total number of items in the cart
- Display cart subtotal
- Reset the shopping cart

## Key Concepts Practiced

- React `useState`
- Immutable state updates
- Identity-based updates (`id`)
- Derived data (totals calculated during render)
- Array methods: `map`, `filter`, `reduce`, `some`
- Separation of product data and cart state

## Project Structure

- `PRODUCTS`: static product catalog
- `cart`: state holding cart items and quantities
- `ProductsList`: renders products and handles adding to cart
- `ShoppingCart`: renders cart items, totals, and controls

## How It Works

- Products are added to the cart with an initial quantity of `1`
- Adding the same product increases its quantity
- Quantities are updated immutably
- Totals are derived from cart state and not stored separately

## Run Locally

```bash
npm install
npm start
```

## Notes

This project is intended for learning and practicing React fundamentals. It does not include persistence, routing, or external state management.
