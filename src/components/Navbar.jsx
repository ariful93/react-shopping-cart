import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/shop-context';

function Navbar() {
  const { cartItemCount } = useContext(CartContext);
  
  return (
    
      <div className="navLinks">
        <ul>
          <li><Link to='/'>Shop</Link></li>
          <li className='cartlilnk'>
            <Link to='/cart'><AiOutlineShoppingCart /> 
              {<span className="cart_count">{cartItemCount > 0 ? cartItemCount : 0}</span>}
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default Navbar

