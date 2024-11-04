import { useState } from 'react';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function CT_Shoppingcart() {
  const [cart, setCart] = useState<CartItem[]>([
    { name: 'Apple', price: 1.5, quantity: 2 },
    { name: 'Banana', price: 1.0, quantity: 3 },
  ]);

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Add an item to the cart
  const addItem = (name: string, price: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { name, price, quantity: 1 }];
    });
  };

  // Increase quantity of an item
  const increaseQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity of an item
  const decreaseQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove an item from the cart
  const removeItem = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.name}</strong> - ${item.price.toFixed(2)} x {item.quantity}
            <div>
              <button onClick={() => increaseQuantity(item.name)}>+</button>
              <button onClick={() => decreaseQuantity(item.name)}>-</button>
              <button onClick={() => removeItem(item.name)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={() => addItem('Apple', 1.5)}>Add Apple</button>
      <button onClick={() => addItem('Banana', 1.0)}>Add Banana</button>
      <button onClick={clearCart} style={{ marginTop: '20px' }}>
        Clear Cart
      </button>
    </div>
  );
}

export default CT_Shoppingcart;
