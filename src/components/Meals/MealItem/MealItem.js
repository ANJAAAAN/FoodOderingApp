import React from "react";
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  // here tofixed() will output the value in 2 decimal digit
  const price = `Rs ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      {/* first div */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* second div */}
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
}
