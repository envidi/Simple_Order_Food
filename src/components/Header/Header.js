import React from 'react'
import './header.css'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'


function Header(props) {
  return (
    <>
    <div className='header'>
      <h1>React Meal</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
    </div>
    <div className="main-image">
        <img src={mealsImage} alt='A table full of delicious food!' />
    </div>
    </>
    
  )
}

export default Header