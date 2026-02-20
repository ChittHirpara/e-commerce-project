import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart, cartTotal, cartCount } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <p className="empty-cart">Cart is empty</p>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      
      <div className="cart-summary">
        <p>Total Items: <strong>{cartCount}</strong></p>
        <p>Total Price: <strong>${cartTotal.toFixed(2)}</strong></p>
      </div>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4 className="cart-item-title">{item.title}</h4>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <p className="cart-item-subtotal">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
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
    </div>
  )
}

export default Cart
