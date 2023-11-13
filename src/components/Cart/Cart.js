import './Cart.css'
import Modal from '../UI/Modal.js';
import CartItem from './CartItem.js';
import { useContext } from 'react';
import { MealContext } from '../store/context.js';
const Cart = (props) => {

  const {state} = useContext(MealContext)
  const hasItems = state.cart.length > 0

  const total = state.cart.reduce((accumulator, currentValue)=>{    
    return accumulator + currentValue.price * currentValue.amount
  },0)

    const cartItems = (
      <ul className='cart-items'>
        {state.cart.map((item) => (
          <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        
        />
        ))}
      </ul>
    );
  
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className='total'>
          <span>Total Amount</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className='actions'>
          <button className='button--alt' onClick={props.onClose}>Close</button>
          {hasItems && <button className='button'>Order</button>}
        </div>
      </Modal>
    );
  };
  
  export default Cart;