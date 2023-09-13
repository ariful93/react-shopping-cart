import React from 'react';
import { Context, useContext } from '../context/shop-context';

function SideCartItem({product}) {
    const { increase, decrease, removeItem } = useContext(Context);
    const { id, productName, productImage, price } = product;
  return (
    <>
        <div className='sideCartWrap'>
                <img width="50" src={productImage} alt={productName} />
                <div className='desc'>
                    <h4>{productName}</h4>
                    <h5>{product.count} X ${price}</h5>
                    <div className="quantity">
                        <span className='minus' onClick={() => decrease(product)}>-</span>
                        <input type="number" min="0" title="Qty" size="4" value={product.count} readOnly />
                        <span className='plus' onClick={() => increase(product)}>+</span>
                    </div>
                </div>
        </div>
        
    </>

  )
}

export default SideCartItem
