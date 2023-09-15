import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartContextProvider } from './context/shop-context';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {
  
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

