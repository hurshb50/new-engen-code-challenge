import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from './components/CartPage/CartPage';
import ColorList from './components/HomePage/ColorList/ColorList';
import HomePage from './components/HomePage/HomePage';
import Nav from "./components/Nav";
import useCart from './hooks/useCart';
import useColorList from './hooks/useColorList';

const App = () => {
  const { colorList, loadMoreColors, isDataLoading, dataError } = useColorList();
  const { cart, updateCart, removeFromCart, clearCart } = useCart();

  if (dataError) console.log(dataError);

  return (
    <Router>
      <Nav cartSize={Object.keys(cart).length} />

      <Switch>
        <Route exact path="/">
          <HomePage loadMoreColors={loadMoreColors} isDataLoading={isDataLoading}>
            {(colorList.length > 0 ? (
              <ColorList cart={cart} colorList={colorList} updateCart={updateCart} />
            ) : null)}
          </HomePage>
        </Route>

        <Route path="/cart">
          <CartPage cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
