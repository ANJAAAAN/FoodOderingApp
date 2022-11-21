import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/Cart-Context'
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [btnBump,setBtnBump]=useState(false);

  // here using udeContext the HeaderCertButoon component will be reevaluated by React when ever the context changes.
    const cartCtx = useContext(CartContext);
    // here reduce is a build in method that allows to transform array of data into a single value.
    const {items} = cartCtx;
    const numberOfCardItems = items.reduce((curNumber,item)=>{
      return curNumber + item.amount;
    },0); 

    const btnClasses = `${classes.button} ${btnBump?classes.bump:''}`;

    

    useEffect(()=>{
      if(items.length ===0){
        return;
      }
      setBtnBump(true);

     const timer= setTimeout(() => {
        setBtnBump(false);
      }, 300);
       return()=>{
        clearTimeout(timer);
       } 
    },[items]);
  return (

        <button className={btnClasses} onClick={props.onClick}>
      {/* first span is for wrapping icons which is comming from CartIcon folder */}
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>

      {/* second span for text */}
      <span>Your Cart</span>

      {/* third one is for badge */}
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
   
  );
}
