import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-Context";

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);

  // here tofixed() will output the value in 2 decimal digit
  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHnadler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
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
        <MealItemForm id={props.id} onAddToCart={addToCartHnadler}></MealItemForm>
      </div>
    </li>
  );
}
