import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import { ColorData } from './api/Queries';
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

export interface CartData {
  [id: number]: ColorData
}

const App = () => {
  const [cart, setCart] = useState<CartData>({});

  const updateCart = (color: ColorData) => {
    if (!cart[color.id]) setCart((prevCart: CartData) => ({ ...prevCart, [color.id]: color }));
    else {
      const { [color.id]: removedColor, ...newCart }: CartData = cart;
      setCart(newCart);
    }
  }

  return (
    <Router>
      <Nav cartSize={Object.keys(cart).length} />

      <Switch>
        <Route exact path="/">
          <HomePage cart={cart} updateCart={updateCart} />
        </Route>

        <Route path="/cart">
          <CartPage cart={cart} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
