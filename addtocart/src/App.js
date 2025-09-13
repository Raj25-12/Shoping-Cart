import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Shop from './Component/Shop';
import Cart from './Component/Cart';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });
    if (isPresent)
      return;
    setCart([...cart, {...item, amount: 1}]);
  };

  return (
    <div className="App">
      <Navbar size={cart.length} setShow={setShow} />
      {show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}

export default App;