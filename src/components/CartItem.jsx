import React, { useContext } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import { CartContext } from '../context/shop-context';

function CartItem({product}) {
    const { increase, decrease, removeItem } = useContext(CartContext);
    const { id, productName, productImage, price } = product;

    return (
        <tr key={id}>
            <td className='product-remove' onClick={() => removeItem(product.id) } ><CiCircleRemove /></td>
            <td className='product-thumbnail'>
                <img width="80" src={productImage} alt={productName} />
            </td>
            <td className='product-name'>
                <h3>{productName}</h3>
            </td>
            <td className='product-price'>
                <p>{price.toFixed(2)}</p>
            </td>
            <td className='product-quantity'>
                <div className="quantity">
                    <span onClick={() => decrease(product)}>-</span>
                    <input type="number" min="0" title="Qty" size="4" value={product.count} readOnly />
                    <span className='plus' onClick={() => increase(product)}>+</span>
                </div>
            </td>
            <td className='product-subtotal'>
                <p>{(price * product.count).toFixed(2)}</p>
            </td>
        </tr>
    
    )
}

export default CartItem
