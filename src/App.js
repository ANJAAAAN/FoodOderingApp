import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };
  const HideCartHandler = () => {
    SetCartIsShown(false);
  };
  return (
    // Here all the components are wrepped inside CartProvider because.
    //1. Cart component need access to render the cart items adn to edit them.
    //2. Header cmoponent need it to update the badge which is inside HeaderCartButton.
    //2. Meals need the access beacuse there we want to add items to the cart.
    <CartProvider>
      {/* here hideCartHandler is used and is called inside cart.js and againa in Modal.js file file*/}
      {cartIsShown && <Cart onClose={HideCartHandler}></Cart>}
      {/* making a custom event to show the cart and calling the event in Header file and then again in headerCartButton file */}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
