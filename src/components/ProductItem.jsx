import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../context/shop-context';

function ProductItem({ product }) {
  const { id, productName, productImage, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
        <div className='ProductItem' key={id}>
          <div className='ProductImage'>
            <img width="239" src={productImage} alt="" />
          </div>
          <div className="ProductDesc">
            <h3>{productName}</h3>
            <div className="review">
                <span className='rating'><AiFillStar /></span>
                <span className='rating'><AiFillStar /></span>
                <span className='rating'><AiFillStar /></span>
                <span className='rating'><AiFillStar /></span>
                <span className='rating'><AiFillStar /></span>
            </div>
            
            <div className="price">
                <span>${price.toFixed(2)}</span>
            </div>
            <div className='add-to-cart'>
                <div className='addToCartBtn' onClick={() => addToCart(product)}>
                    <div className='cart-text'>Add To Cart</div>
                    <div className='hover-cart'><FiShoppingCart /></div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default ProductItem
