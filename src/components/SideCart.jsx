import React from 'react';
import { Link } from 'react-router-dom';
import { Context, useContext } from '../context/shop-context';
import SideCartItem from './SideCartItem';

function SideCart() {
    const { cartTotals, state } = useContext(Context);
  return (
    <div className='sideCart'>
        {state.cart.map((product, index) => {
            return(
              <SideCartItem 
                product={product} 
                key={index}
              />
            )
            
          })}
         <div className='subTotal'>
            <div className='sub-total'>
                <span>Subtotal:</span>
                <span>${cartTotals}</span>
            </div>
            <Link className='view-cart' to='/cart'>View Cart</Link>
         </div>
    </div>
  )
}

export default SideCart
