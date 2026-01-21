import { useState } from "react";
import "./App.css";

const PRODUCTS = [
  { id: 1, name: "Milk", price: 2.5 },
  { id: 2, name: "Eggs", price: 3.2 },
  { id: 3, name: "Bread", price: 1.8 },
  { id: 4, name: "Rice", price: 4.0 },
  { id: 5, name: "Pasta", price: 2.1 },
  { id: 6, name: "Chicken Breast", price: 6.5 },
  { id: 7, name: "Ground Beef", price: 7.2 },
  { id: 8, name: "Apples", price: 3.0 },
  { id: 9, name: "Bananas", price: 1.9 },
  { id: 10, name: "Oranges", price: 2.8 },
  { id: 11, name: "Tomatoes", price: 2.4 },
  { id: 12, name: "Onions", price: 1.7 },
  { id: 13, name: "Potatoes", price: 3.6 },
  { id: 14, name: "Carrots", price: 1.6 },
  { id: 15, name: "Cheese", price: 4.9 },
  { id: 16, name: "Butter", price: 3.3 },
  { id: 17, name: "Yogurt", price: 2.2 },
  { id: 18, name: "Cereal", price: 4.4 },
  { id: 19, name: "Olive Oil", price: 8.5 },
  { id: 20, name: "Salt", price: 0.9 },
];

function ProductsList({ setCart }) {
  return (
    <>
      <h3>Add Products to Shopping Cart</h3>

      <ul className="products-list">
        {PRODUCTS.map((p) => (
          <li
            key={p.id}
            className="product"
          >
            <p>{p.name}</p>

            <p>${p.price.toFixed(2)}</p>

            <button
              type="button"
              onClick={() =>
                setCart((prev) => {
                  const exists = prev.some((item) => item.id === p.id);
                  if (!exists) {
                    return [
                      ...prev,
                      {
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        qty: 1,
                      },
                    ];
                  }

                  return prev.map((item) => {
                    if (item.id === p.id) {
                      return { ...item, qty: item.qty + 1 };
                    }
                    return item;
                  });
                })
              }
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function ShoppingCart({ cart, setCart }) {
  return (
    <>
      <h3>Shopping Cart</h3>

      <h4>
        Items:
        {cart.reduce((acc, n) => {
          return acc + n.qty;
        }, 0)}
      </h4>

      <ul className="shopping-cart">
        {cart.length === 0 && "No items in cart."}
        {cart.map((p) => (
          <li
            className="cart-item"
            key={p.id}
          >
            <button
              type="button"
              onClick={() =>
                setCart((prev) => {
                  const updated = prev.filter((item) => item.id !== p.id);
                  return updated;
                })
              }
            >
              x
            </button>
            <p>{p.name}</p>
            <p>{p.qty}</p>
            <p>${(p.price * p.qty).toFixed(2)}</p>

            <button
              type="button"
              onClick={() =>
                setCart((prev) =>
                  prev.map((item) => {
                    if (item.id === p.id) {
                      return { ...item, qty: item.qty + 1 };
                    }
                    return item;
                  }),
                )
              }
            >
              +
            </button>
            <button
              type="button"
              onClick={() =>
                setCart((prev) =>
                  prev
                    .map((item) => {
                      if (item.id === p.id) {
                        return { ...item, qty: item.qty - 1 };
                      }
                      return item;
                    })
                    .filter((item) => item.qty > 0),
                )
              }
            >
              -
            </button>
          </li>
        ))}
      </ul>

      <h4>
        Total: $
        {cart
          .reduce((acc, n) => {
            return acc + n.price * n.qty;
          }, 0)
          .toFixed(2)}
      </h4>

      <button
        type="button"
        onClick={() => setCart([])}
      >
        Reset Shopping Cart
      </button>
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="body">
      <ProductsList setCart={setCart} />

      <ShoppingCart
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;