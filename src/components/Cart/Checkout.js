import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

export default function Checkout(props) {
  const [formInputVlidity, setFormInputVlidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  // let formIsValid = false;
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const postalDigitChecker = (value) => value.trim().length === 5;

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = postalDigitChecker(enteredPostalCode);

    setFormInputVlidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // sending data to database
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameFormIsValid = `${classes.control} && ${
    formInputVlidity.name ? "" : classes.invalid
  }`;
  const streetFormIsValid = `${classes.control} && ${
    formInputVlidity.name ? "" : classes.invalid
  }`;
  const cityFormIsValid = `${classes.control} && ${
    formInputVlidity.name ? "" : classes.invalid
  }`;
  const postalCodeFormIsValid = `${classes.control} && ${
    formInputVlidity.name ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={submitHandler}>
      <div className={nameFormIsValid}>
        <lable htmlFor="name">Your Name</lable>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputVlidity.name && <p>please enter correct name.</p>}
      </div>
      <div className={streetFormIsValid}>
        <lable htmlFor="street">Street</lable>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputVlidity.street && <p>please enter correct street.</p>}
      </div>
      <div className={cityFormIsValid}>
        <lable htmlFor="city">City</lable>
        <input type="text" id="City" ref={cityInputRef}></input>
        {!formInputVlidity.city && <p>please enter correct city.</p>}
      </div>
      <div className={postalCodeFormIsValid}>
        <lable htmlFor="psotal">Postal Code</lable>
        <input type="text" id="Postal" ref={postalCodeInputRef}></input>
        {!formInputVlidity.postalCode && (
          <p>please enter correct postal code.</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancle}>
          Cancle
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}
