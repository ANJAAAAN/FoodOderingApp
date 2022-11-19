import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.type.price * action.item.amount;
      return{
        items:updatedItems,
        totalAmount:updatedTotalAmount,
      };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // here we will get the item
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // here we get the id of that item
  const removeitemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    // this is the actual context values which will be updated overtime
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeitemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {/* props.childern allows us to wrap any 
        components that should get access to this 
        context with this cartprovider component  */}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
