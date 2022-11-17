import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      {/* first span is for wrapping icons which is comming from CartIcon folder */}
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>

      {/* second span for text */}
      <span>Your Cart</span>

      {/* third one is for badge */}
      <span className={classes.badge}>3</span>
    </button>
  );
}
