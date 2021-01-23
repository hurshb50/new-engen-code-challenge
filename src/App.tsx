import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from './components/CartPage/CartPage';
import HomePage from './components/HomePage/HomePage';
import ColorList from './components/HomePage/ColorList/ColorList';
import Nav from "./components/Nav";
import useCart from './hooks/useCart';
import useColorList from './hooks/useColorList';

const App = () => {
  const { colorOffset, loadMoreColors, colorDataList, isDataLoading, dataError } = useColorList();
  const { cart, updateCart, removeFromCart, clearCart } = useCart();

  if (dataError) console.log(dataError);

  return (
    <Router>
      <Nav cartSize={Object.keys(cart).length} />

      <Switch>
        <Route exact path="/">
          <HomePage colorOffset={colorOffset} loadMoreColors={loadMoreColors} isDataLoading={isDataLoading}>
            {(colorDataList.length > 0 ? (
              <ColorList cart={cart} colorDataList={colorDataList} updateCart={updateCart} />
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
