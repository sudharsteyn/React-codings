import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachCart => {
        const {price, quantity} = eachCart
        totalPrice += price * quantity
      })

      return (
        <div className="checkout-container">
          <h1>
            Order Total: <span>Rs {totalPrice}/-</span>
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
