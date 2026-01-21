import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Milk", price: 2.5, qty: 0 },
  { id: 2, name: "Eggs", price: 3.2, qty: 0 },
  { id: 3, name: "Bread", price: 1.8, qty: 0 },
  { id: 4, name: "Rice", price: 4.0, qty: 0 },
  { id: 5, name: "Pasta", price: 2.1, qty: 0 },
  { id: 6, name: "Chicken Breast", price: 6.5, qty: 0 },
  { id: 7, name: "Ground Beef", price: 7.2, qty: 0 },
  { id: 8, name: "Apples", price: 3.0, qty: 0 },
  { id: 9, name: "Bananas", price: 1.9, qty: 0 },
  { id: 10, name: "Oranges", price: 2.8, qty: 0 },
  { id: 11, name: "Tomatoes", price: 2.4, qty: 0 },
  { id: 12, name: "Onions", price: 1.7, qty: 0 },
  { id: 13, name: "Potatoes", price: 3.6, qty: 0 },
  { id: 14, name: "Carrots", price: 1.6, qty: 0 },
];

function ProductList({ products, cart, onAdd }) {
  return (
    <ul className="products">
      {products.map((p) => {
        const inCart = cart.some((item) => item.id === p.id);

        return (
          <li key={p.id}>
            {p.name}
            <button onClick={() => onAdd(p)}>Add to Cart</button>
          </li>
        );
      })}
    </ul>
  );
}

function Cart({ cart, onIncrease, onDecrease }) {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <>
      <span>Items in cart: {totalItems}</span>

      <ul className="cart">
        {cart.length === 0 && <span>Cart is empty.</span>}

        {cart.map((p) => (
          <CartItems
            key={p.id}
            item={p}
            onIncrease={() => onIncrease(p.id)}
            onDecrease={() => onDecrease(p.id)}
          />
        ))}
      </ul>

      <span>Total Price: ${totalPrice}</span>

      <button onClick={(e) => setCart([])}>Reset Cart</button>
    </>
  );
}

function CartItems({ item, onIncrease, onDecrease }) {
  return (
    <li>
      <p>{item.name}</p>
      <p>{item.qty}</p>
      <p>${(item.price * item.qty).toFixed(2)}</p>

      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </li>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((cart) => {
      const existing = cart.find((item) => item.id === product.id);

      if (existing) {
        return cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...cart, { ...product, qty: 1 }];
    });
  }

  function increaseQty(id) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function decreaseQty(id) {
    setCart((cart) =>
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  }

  return (
    <div className="body">
      <ProductList
        products={products}
        cart={cart}
        onAdd={addToCart}
      />

      <Cart
        cart={cart}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
      />
    </div>
  );
}

export default App;
