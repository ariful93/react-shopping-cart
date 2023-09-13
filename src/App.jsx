import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartContextProvider } from './context/shop-context';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {

  // const [state, setState] = useState({
  //   PRODUCTS: PRODUCTS,
  //   cart: [],
  // });

  // const addToCart = (product) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.find((cartItem) => cartItem.id === product.id)
  //       ? state.cart.map((cartItem) =>
  //           cartItem.id === product.id
  //             ? { ...cartItem, count: cartItem.count + 1 }
  //             : cartItem
  //         )
  //       : [...state.cart, { ...product, count: 1 }],
  //   });
  // };

  // const increase = (product) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.map((cartItem) =>
  //       cartItem.id === product.id
  //         ? { ...cartItem, count: cartItem.count + 1 }
  //         : cartItem
  //     ),
  //   });
  // };

  // const decrease = (product) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.map((cartItem) =>
  //       cartItem.id === product.id
  //         ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
  //         : cartItem
  //     ),
  //   });
  // };

  // const removeItem = (id) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.filter((cartItem) => cartItem.id !== id),
  //   });
  // };

  // const cartItemCount = state.cart.reduce(
  //   (acc, data) => (acc += data.count),
  //   0
  // );

  // const cartTotals = state.cart.reduce(
  //   (acc, data) => (acc += data.price * data.count),
  //   0
  // );

  return (
    <div className='shopping-cart'>
      <CartContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>
    </div>
  )
}

export default App

