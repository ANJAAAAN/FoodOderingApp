import React from "react";

const CartContext = React.createContext({
  //The below data will be used for better auto-completion only.This data will not be used for coding.
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
