import { useState } from "react";
import "./App.css";

<<<<<<< HEAD
const GROCERIES = [
  { id: 1, name: "Rice", price: 2.5, category: "grains" },
  { id: 2, name: "Pasta", price: 1.8, category: "grains" },
  { id: 3, name: "Bread", price: 2.2, category: "bakery" },
  { id: 4, name: "Milk", price: 1.6, category: "dairy" },
  { id: 5, name: "Eggs", price: 3.0, category: "dairy" },
  { id: 6, name: "Chicken Breast", price: 5.4, category: "meat" },
  { id: 7, name: "Ground Beef", price: 6.2, category: "meat" },
  { id: 8, name: "Apples", price: 2.9, category: "greens" },
  { id: 9, name: "Bananas", price: 1.4, category: "greens" },
  { id: 10, name: "Oranges", price: 3.1, category: "greens" },
  { id: 11, name: "Potatoes", price: 2.7, category: "greens" },
  { id: 12, name: "Onions", price: 1.9, category: "greens" },
  { id: 13, name: "Tomatoes", price: 2.8, category: "greens" },
  { id: 14, name: "Cheese", price: 4.6, category: "dairy" },
  { id: 15, name: "Yogurt", price: 2.0, category: "dairy" },
  { id: 16, name: "Butter", price: 3.3, category: "dairy" },
  { id: 17, name: "Olive Oil", price: 6.8, category: "pantry" },
  { id: 18, name: "Sugar", price: 1.7, category: "pantry" },
  { id: 19, name: "Salt", price: 0.9, category: "pantry" },
  { id: 20, name: "Coffee", price: 7.5, category: "drinks" },
  { id: 21, name: "Tea", price: 3.2, category: "drinks" },
  { id: 22, name: "Orange Juice", price: 3.9, category: "drinks" },
  { id: 23, name: "Soda", price: 1.5, category: "drinks" },
  { id: 24, name: "Water Bottles", price: 4.2, category: "drinks" },
  { id: 25, name: "Cereal", price: 3.8, category: "grains" },
  { id: 26, name: "Oats", price: 2.4, category: "grains" },
  { id: 27, name: "Flour", price: 1.9, category: "pantry" },
  { id: 28, name: "Baking Powder", price: 1.2, category: "pantry" },
  { id: 29, name: "Honey", price: 4.5, category: "pantry" },
  { id: 30, name: "Jam", price: 2.6, category: "pantry" },
  { id: 31, name: "Peanut Butter", price: 3.4, category: "pantry" },
  { id: 32, name: "Lettuce", price: 1.5, category: "greens" },
  { id: 33, name: "Spinach", price: 2.1, category: "greens" },
  { id: 34, name: "Carrots", price: 1.8, category: "greens" },
  { id: 35, name: "Broccoli", price: 2.3, category: "greens" },
  { id: 36, name: "Bell Peppers", price: 3.0, category: "greens" },
  { id: 37, name: "Garlic", price: 1.1, category: "greens" },
  { id: 38, name: "Cucumbers", price: 1.7, category: "greens" },
  { id: 39, name: "Zucchini", price: 2.0, category: "greens" },
  { id: 40, name: "Mushrooms", price: 2.9, category: "greens" },
  { id: 41, name: "Salmon Fillet", price: 8.9, category: "meat" },
  { id: 42, name: "Tuna Cans", price: 3.6, category: "meat" },
  { id: 43, name: "Pork Chops", price: 5.9, category: "meat" },
  { id: 44, name: "Bacon", price: 4.8, category: "meat" },
  { id: 45, name: "Sausages", price: 4.3, category: "meat" },
  { id: 46, name: "Ham", price: 4.7, category: "meat" },
  { id: 47, name: "Frozen Pizza", price: 4.9, category: "frozen" },
  { id: 48, name: "Frozen Vegetables", price: 3.2, category: "frozen" },
  { id: 49, name: "Ice Cream", price: 4.5, category: "frozen" },
  { id: 50, name: "Frozen Fries", price: 3.1, category: "frozen" },
  { id: 51, name: "Croissants", price: 2.8, category: "bakery" },
  { id: 52, name: "Bagels", price: 2.5, category: "bakery" },
  { id: 53, name: "Muffins", price: 3.0, category: "bakery" },
  { id: 54, name: "Donuts", price: 2.9, category: "bakery" },
  { id: 55, name: "Crackers", price: 2.2, category: "snacks" },
  { id: 56, name: "Chips", price: 2.6, category: "snacks" },
  { id: 57, name: "Popcorn", price: 1.9, category: "snacks" },
  { id: 58, name: "Chocolate Bar", price: 1.5, category: "snacks" },
  { id: 59, name: "Cookies", price: 2.8, category: "snacks" },
  { id: 60, name: "Granola Bars", price: 3.4, category: "snacks" },
  { id: 61, name: "Mayonnaise", price: 2.7, category: "pantry" },
  { id: 62, name: "Ketchup", price: 2.3, category: "pantry" },
  { id: 63, name: "Mustard", price: 1.9, category: "pantry" },
  { id: 64, name: "Soy Sauce", price: 2.6, category: "pantry" },
  { id: 65, name: "Vinegar", price: 1.8, category: "pantry" },
  { id: 66, name: "Spaghetti Sauce", price: 3.2, category: "pantry" },
  { id: 67, name: "Canned Beans", price: 1.6, category: "pantry" },
  { id: 68, name: "Canned Corn", price: 1.4, category: "pantry" },
  { id: 69, name: "Canned Peas", price: 1.5, category: "pantry" },
  { id: 70, name: "Canned Soup", price: 2.4, category: "pantry" },
  { id: 71, name: "Almonds", price: 5.6, category: "snacks" },
  { id: 72, name: "Peanuts", price: 3.1, category: "snacks" },
  { id: 73, name: "Cashews", price: 6.2, category: "snacks" },
  { id: 74, name: "Raisins", price: 2.7, category: "snacks" },
  { id: 75, name: "Dates", price: 3.5, category: "snacks" },
  { id: 76, name: "Protein Bars", price: 4.9, category: "snacks" },
  { id: 77, name: "Tofu", price: 2.8, category: "meat" },
  { id: 78, name: "Lentils", price: 1.9, category: "pantry" },
  { id: 79, name: "Chickpeas", price: 2.0, category: "pantry" },
  { id: 80, name: "Quinoa", price: 4.4, category: "grains" },
  { id: 81, name: "Brown Rice", price: 2.9, category: "grains" },
  { id: 82, name: "White Rice", price: 2.4, category: "grains" },
  { id: 83, name: "Couscous", price: 2.7, category: "grains" },
  { id: 84, name: "Milk Alternatives", price: 3.6, category: "dairy" },
  { id: 85, name: "Cream", price: 2.5, category: "dairy" },
  { id: 86, name: "Iceberg Lettuce", price: 1.6, category: "greens" },
  { id: 87, name: "Avocados", price: 4.2, category: "greens" },
  { id: 88, name: "Lemons", price: 2.3, category: "greens" },
  { id: 89, name: "Limes", price: 2.1, category: "greens" },
  { id: 90, name: "Grapes", price: 3.8, category: "greens" },
  { id: 91, name: "Strawberries", price: 4.1, category: "greens" },
  { id: 92, name: "Blueberries", price: 4.6, category: "greens" },
  { id: 93, name: "Pineapple", price: 3.3, category: "greens" },
  { id: 94, name: "Mangoes", price: 3.9, category: "greens" },
  { id: 95, name: "Shrimp", price: 7.8, category: "meat" },
  { id: 96, name: "Fish Sticks", price: 4.2, category: "frozen" },
  { id: 97, name: "Frozen Berries", price: 5.1, category: "frozen" },
  { id: 98, name: "Frozen Chicken Nuggets", price: 5.6, category: "frozen" },
  { id: 99, name: "Energy Drink", price: 2.4, category: "drinks" },
  { id: 100, name: "Sparkling Water", price: 1.8, category: "drinks" },
];

const CATEGORIES = [
  "All 🛒",
  "Grains 🌾",
  "Bakery 🥖",
  "Dairy 🥛",
  "Meat 🍖",
  "Greens 🥬",
  "Pantry 🧂",
  "Drinks 🥤",
  "Frozen ❄️",
  "Snacks 🍿",
];

const DISCOUNT_CODES = [
  { name: "Welcome Discount", code: "WELCOME10", percentage: 10 },
  { name: "Summer Sale", code: "SUMMER15", percentage: 15 },
  { name: "Loyalty Reward", code: "LOYAL20", percentage: 20 },
  { name: "Mi Amor Delishus", code: "DELISHUS19", percentage: 80 },
];

function ProductsList({ setCart, selectedCategory, setSelectedCategory }) {
  const filteredGroceries =
    selectedCategory === "All 🛒"
      ? GROCERIES
      : GROCERIES.filter(
          (i) => i.category === selectedCategory.split(" ")[0].toLowerCase(),
        );

  return (
    <>
      <div className="products-header">
        <h2>Add Groceries to Shopping Cart ✅</h2>

        <div className="filter-buttons">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="products-container">
        {filteredGroceries.map((i) => (
          <li
            key={i.id}
            className="products-item"
          >
            <span>{i.name}</span>
            <span>${i.price.toFixed(2)}</span>
=======
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

>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
            <button
              type="button"
              onClick={() =>
                setCart((prev) => {
<<<<<<< HEAD
                  const exists = prev.some((item) => i.id === item.id);
                  if (!exists) return [...prev, { ...i, qty: 1 }];
                  return prev.map((item) =>
                    item.id === i.id ? { ...item, qty: item.qty + 1 } : item,
                  );
=======
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
>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
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
<<<<<<< HEAD
  const itemsInCart = cart.reduce((acc, n) => {
    return acc + n.qty;
  }, 0);

  return (
    <div>
      <div className="cart-header">
        <h2>Shopping Cart</h2>

        <h3>🛒 {itemsInCart}</h3>

        <button
          type="button"
          onClick={() => setCart([])}
        >
          Delete Cart
        </button>
      </div>

      <ul className="cart-container">
        {cart.map((i) => (
          <li
            key={i.id}
            className="cart-item"
          >
            <button>x</button>
            <span>{i.name}</span>
            <span>{i.qty}</span>
            <span>${(i.price * i.qty).toFixed(2)}</span>
=======
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

>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
            <button
              type="button"
              onClick={() =>
                setCart((prev) =>
<<<<<<< HEAD
                  prev.map((item) =>
                    item.id === i.id ? { ...i, qty: i.qty + 1 } : item,
                  ),
=======
                  prev.map((item) => {
                    if (item.id === p.id) {
                      return { ...item, qty: item.qty + 1 };
                    }
                    return item;
                  }),
>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
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
<<<<<<< HEAD
                    .map((item) =>
                      item.id === i.id ? { ...i, qty: i.qty - 1 } : item,
                    )
                    .filter((i) => i.qty !== 0),
=======
                    .map((item) => {
                      if (item.id === p.id) {
                        return { ...item, qty: item.qty - 1 };
                      }
                      return item;
                    })
                    .filter((item) => item.qty > 0),
>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
                )
              }
            >
              -
            </button>
          </li>
        ))}
      </ul>
<<<<<<< HEAD
    </div>
  );
}

function CheckOut({
  cart,
  discountInput,
  setDiscountInput,
  appliedDiscount,
  setAppliedDiscount,
  hasTriedDiscount,
  setHasTriedDiscount,
}) {
  const subtotal = cart.reduce((acc, n) => acc + n.price * n.qty, 0);

  const discountAmount = appliedDiscount
    ? subtotal * (appliedDiscount.percentage / 100)
    : 0;

  const total = subtotal - discountAmount;

  const applyDiscount = () => {
    setHasTriedDiscount(true);

    const found = DISCOUNT_CODES.find(
      (d) => d.code === discountInput.trim().toUpperCase(),
    );

    if (!found) {
      setAppliedDiscount(null);
      return;
    }

    setAppliedDiscount(found);
    setDiscountInput("");
  };

  return (
    <div className="checkout">
      <h2>CheckOut 💳</h2>

      <div className="coupon-area">
        <label>Apply discount code:</label>
        <div>
          <input
            type="text"
            value={discountInput}
            onChange={(e) => setDiscountInput(e.target.value)}
          />
          <button
            type="button"
            onClick={applyDiscount}
          >
            Apply
          </button>
        </div>

        {appliedDiscount && (
          <span className="valid">
            {appliedDiscount.name} – {appliedDiscount.percentage}% discount
            applied!
          </span>
        )}

        {hasTriedDiscount && !appliedDiscount && (
          <span className="invalid">Discount code is invalid</span>
        )}
      </div>

      <h3>
        Total: ${total.toFixed(2)}
        {appliedDiscount && ` (-$${discountAmount.toFixed(2)})`}
      </h3>

      <button onClick={() => window.alert("Enjoy your purchase!")}>
        Proceed to Card Payment
      </button>
    </div>
=======

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
>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
  );
}

function App() {
  const [cart, setCart] = useState([]);
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState("All 🛒");
  const [discountInput, setDiscountInput] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [hasTriedDiscount, setHasTriedDiscount] = useState(false);

  return (
    <div className="body">
      <ProductsList
        setCart={setCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="bottom">
        <ShoppingCart
          cart={cart}
          setCart={setCart}
        />

        <CheckOut
          cart={cart}
          discountInput={discountInput}
          setDiscountInput={setDiscountInput}
          appliedDiscount={appliedDiscount}
          setAppliedDiscount={setAppliedDiscount}
          hasTriedDiscount={hasTriedDiscount}
          setHasTriedDiscount={setHasTriedDiscount}
        />
      </section>
=======

  return (
    <div className="body">
      <ProductsList setCart={setCart} />

      <ShoppingCart
        cart={cart}
        setCart={setCart}
      />
>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 39669cf75d68daa26196a718b285e042ba39ef9c
