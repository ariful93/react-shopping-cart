import React, { useContext } from 'react';
import ProductItem from '../components/ProductItem';
import { CartContext } from '../context/shop-context';

function Shop() {
  const { state } = useContext(CartContext);
  
  return (
    <div className="container">
      <div className='section-head'>
        <h2>Shopping Cart</h2>
      </div>
      <div className='ProductWrapper'>
        {state.PRODUCTS.map((product) =>(
            <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default Shop
