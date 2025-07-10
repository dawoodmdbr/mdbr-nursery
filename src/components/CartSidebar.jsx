import "./CartSidebar.css";
import { useCart } from "../context/CartContext";

const CartSidebar = ({ onClose, isOpen }) => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  return (
    <div className={`cart-sidebar ${isOpen ? "show" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Rs. {item.price}</p>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="delete-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Price: Rs. {getTotalPrice()}</p>
            <button className="checkout-btn">Checkout (Coming Soon)</button>
            <a href="#products" className="continue-btn" onClick={onClose}>Continue Shopping</a>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
