import Input from "../../UI/Input";
import {useState,useContext} from 'react'
import './MealItemForm.css'
import { ADD_TO_CART, MealContext, UPDATE_TO_CART } from "../../store/context";
import { DUMMY_MEALS } from "../AvailableMeal";

const MealItemForm = (props) => {
  const {state,dispatch} = useContext(MealContext)
  const [inputState,setInputState] = useState(1)
  const currentMeal = DUMMY_MEALS.find(meal=>meal.id === props.id)
  const handleChange = (e)=>{
    const target = e.target
    const value = target.value
    setInputState(value)

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const isExistMeal = state.cart.find(meal=>meal.id === props.id)

    if(inputState < 1 || inputState > 5 || inputState ===  0){
      return alert('Please enter a number between 1 and 5')
    }
   
    if(isExistMeal){
      dispatch({
        type: UPDATE_TO_CART,
        payload : {...isExistMeal,amount : +isExistMeal.amount + +inputState}
      })
    }else{
      dispatch({
        type:ADD_TO_CART,
        payload : {...currentMeal,amount : inputState}
      })
    }
   
    
  }
    return (
      <form className='form' onSubmit={handleSubmit}>
        <Input
          label='Amount'
          input={{
            id: 'amount_' + props.id,
            type: 'number',
           
            step: '1',
            defaultValue: inputState,
            name:'amount',
           
          }}
          onSelectAmount={handleChange}
        />
        <button type='submit'>+ Add</button>
      </form>
    );
  };
  
  export default MealItemForm;