import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added any products yet.</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <h1>Shopping Cart</h1>
        <p>
          {cartCount} item{cartCount !== 1 && "s"} in your cart
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-items-container">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <div className="cart-item-meta">
                  <span className="cart-item-price">
                    ${item.price.toFixed(2)} each
                  </span>
                  <span className="cart-item-quantity">
                    <span className="quantity-label">Qty:</span>
                    <span className="quantity-value">{item.quantity}</span>
                  </span>
                </div>
                <div className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary-card">
          <h3 className="cart-summary-title">Order Summary</h3>
          <div className="summary-row">
            <span>Items ({cartCount})</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span style={{ color: "var(--success)" }}>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="total-price">${cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
