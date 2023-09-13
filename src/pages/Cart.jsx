import React, { useContext } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/shop-context';

function Cart() {
  const { cartTotals, state } = useContext(CartContext);

  return (
    <div className='container'>
      <div className='section-head'>
        <h2>Shopping Cart</h2>
      </div>
      {
        state.cart.length > 0 ? (
          <div className='productCarts'>
            <div className='product-cart-wrap'>
              <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                  {state.cart.map((product, index) => {
                    return(
                      <CartItem
                        product={product} 
                        key={index}
                      />
                    )
                    
                  })}
                </tbody>
              </table>
              <div className='continue-shop'>
                <Link to='/'><AiOutlineLeft />Continue shopping</Link>
              </div>
            </div>
            
            <div className='subtotal_wrap'>
              <h3>CART TOTALS</h3>
              <div className='sub-total single-item'>
                <span>Subtotal Total:</span>
                <span className='price'>${cartTotals}</span>
              </div>
              <div className='sub-total single-item'>
                <span>Discount:</span>
                <span>USD 698</span>
              </div>
              <div className='sub-total single-item'>
                <span>Total Price:</span>
                <span className='price'>${cartTotals}</span>
              </div>
              <div className='checkout'>
                <h4>Checkout</h4>
              </div>
            </div>
          </div>
        ) : (
          <div className='empty-cart'>
            <h3>Your cart is currently empty.</h3>
              <div className=''>
              <Link to='/'><AiOutlineLeft />Continue shopping</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart
