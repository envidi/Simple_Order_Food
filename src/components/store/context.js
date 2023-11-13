import {createContext,useReducer} from 'react'

export const ADD_TO_CART = "ADD_TO_CART"
export const UPDATE_TO_CART = "UPDATE_TO_CART"
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const REMOVE = "REMOVE"
export const initialState = {
    cart:[]
}

const reducer = (state,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart : [...state.cart,action.payload]
            }
        case UPDATE_TO_CART:
       
            const newCart = [...state.cart.map(item=>{
                if(item.id === action.payload.id){
                    return {
                        ...action.payload,
                        amount : action.payload.amount
                    }
                }
                return item
            })]
  
            return {
                cart : newCart
            }
        case INCREASE:  
            const newQuantityIncs = [...state.cart.map(item=>{
                if(item.id === action.payload){
                    return {
                        ...item,
                        amount : +item.amount + 1
                    }
                }
                return item
            })]     
        
            return {
                cart : newQuantityIncs
            }
        case DECREASE:  
            const newQuantityDecrs = [...state.cart.map(item=>{
                if(item.id === action.payload){
                    return {
                        ...item,
                        amount : +item.amount - 1
                    }
                }
                return item
            })]     
        
            return {
                cart : newQuantityDecrs
            }
        case REMOVE:  
        
        return {
            cart :  [...state.cart.filter(item=>item.id !== action.payload)]    
        }

        default:
           return state
    }
    
}

export const MealContext = createContext({
    cart:[]
})

const MealContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)


    return <MealContext.Provider value={{state,dispatch}}>
        {children}
    </MealContext.Provider>
}
export default MealContextProvider