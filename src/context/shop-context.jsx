import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [state, setState] = useState({
        PRODUCTS: PRODUCTS,
        cart: [],
    });

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });
  };

  const increase = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  const cartItemCount = state.cart.reduce(
    (prevData, curData) => (prevData += curData.count),
    0
  );

  const cartTotals = state.cart.reduce(
    (prevData, curData) => (prevData += curData.price * curData.count),
    0
  );

    const cartContextValue = { state: state, addToCart, increase, decrease, removeItem, cartItemCount, cartTotals }


    return (
        <CartContext.Provider 
            value={cartContextValue}
        >
            {children}
        </CartContext.Provider>
    )
        

}
