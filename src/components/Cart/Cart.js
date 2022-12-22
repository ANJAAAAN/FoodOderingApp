import React, { useContext, useState } from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";
import { Fragment } from "react/cjs/react.production.min";

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIssubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //For adding item inside cart
  const cardItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          //  here bind insures thata the added or the removed item is passed through these function.
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cardItemHandler.bind(null, item)}
        ></CartItem>
      ))}
      {/* {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((items) => (
        <li>{items.name}</li>
      ))} */}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  // to submit the order of the user and send it to database.

  const submitHandler = async (userData) => {
    setIssubmitting(true);
    await fetch(
      "https://reactmeals-adcbb-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIssubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {/* onClose props is comming from modal backdrop */}
      {isCheckout && (
        <Checkout onConfirm={submitHandler} onCancle={props.onClose}></Checkout>
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button-alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}
