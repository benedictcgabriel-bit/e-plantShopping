import React, { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      quantity: 1
    }
  ]);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>

          <button onClick={() => decreaseQty(item.id)}>-</button>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>

          <hr />
        </div>
      ))}

      <h2>Total: ${total}</h2>

      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
