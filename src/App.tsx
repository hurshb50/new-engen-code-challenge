import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCart, useColors } from "./api/Queries";
import CartPage from './components/CartPage/CartPage';
import HomePage from './components/HomePage/HomePage';
import ListView from './components/HomePage/ListView';
import Nav from "./components/Nav";



const App = () => {

  const [colorOffset, incOffset, colorDataList, loading, error] = useColors();
  const [cart, addToCart, updateCart, removeFromCart, clearCart] = useCart();

  return (
    <Router>
      <Nav cartSize={Object.keys(cart).length} />

      <Switch>
        <Route exact path="/">
          <HomePage colorOffset={colorOffset} incOffset={incOffset} loading={loading}>
            {(colorDataList.length > 0 ? (<ListView cart={cart} colorDataList={colorDataList} updateCart={updateCart} />) : null)}
          </HomePage>
        </Route>

        <Route path="/cart">
          <CartPage cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>

    </Router>
  )
  /* 

  return (
    <Router>
      <Nav cartSize={Object.keys(cart).length} />

      <Switch>
        <Route exact path="/">
          <HomePage cart={cart} updateCart={updateCart} {...colorListObj} />
        </Route>

        <Route path="/cart">
          <CartPage cart={cart} updateCart={updateCart} clearCart={clearCart} />
        </Route>
      </Switch>
    </Router>
  ) */
}

export default App;
