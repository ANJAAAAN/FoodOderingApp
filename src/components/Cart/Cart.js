import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id=>{
    cartCtx.removeItem(id);
   
  };

  //For adding item sinside cart
  const cardItemHandler= item =>{
    cartCtx.addItem({...item,amount:1});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount = {item.amount}
          price={item.price}
          //  here bind insures thata the added or the removed item is passed through these function.
          onRemove ={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cardItemHandler.bind(null ,item)}
        ></CartItem>
      ))}
      {/* {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((items) => (
        <li>{items.name}</li>
      ))} */}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
