import React from 'react'

import mealsImage from'../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (

    <React.Fragment>
        <header className={classes.header}>
            <h1>
                ReactMeals   
            </h1>
           
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        {/* Here css classes in inside the big bracket 
        beacause there is a (-) in between classname.*/}
        <div className={classes['main-image']}>
            {/*image comming from import*/}
            <img src={mealsImage} alt='table full of food.'>

            </img>
        </div>
    </React.Fragment>
  )
}

