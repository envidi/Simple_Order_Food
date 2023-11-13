import { useContext } from 'react';
import './CartItem.css'
import { MealContext } from '../store/context';
import { INCREASE,DECREASE,REMOVE } from '../store/context';

const CartItem = (props) => {

  const {state, dispatch} = useContext(MealContext)
    const price = `$${props.price.toFixed(2)}`;

    const onRemove = ()=>{
      const isLessThanZero = state.cart.find(cart=>{
        return cart.id === props.id
      })
      console.log(isLessThanZero)
      if(isLessThanZero.amount <= 1){
        dispatch({
          type:REMOVE,
          payload : props.id
        })
      }else{
        dispatch({
          type:DECREASE,
          payload : props.id
        })
      }
    
    }
    
    const onAdd = ()=>{
      
      dispatch({
        type:INCREASE,
        payload : props.id
      })
    }
  
    return (
      <li className='cart-item'>
        <div>
          <h2>{props.name}</h2>
          <div className='summaryCart'>
            <span className='priceCartItem'>{price}</span>
            <span className='amount'>x {props.amount}</span>
          </div>
        </div>
        <div className='actions'>
          <button onClick={onRemove}>−</button>
          <button onClick={onAdd}>+</button>
        </div>
      </li>
    );
  };
  
  export default CartItem;