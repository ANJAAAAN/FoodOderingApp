import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown,SetCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    SetCartIsShown(true);
  }
  const HideCartHandler = ()=>{
    SetCartIsShown(false);
  }
  return (
   
    <Fragment>
      {/* here hideCartHandler is used and is called inside cart.js and againa in Modal.js file file*/}
      {cartIsShown && <Cart onClose={HideCartHandler}></Cart>}
      {/* making a custom event to show the cart and calling the event in Header file and then again in headerCartButton file */}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
