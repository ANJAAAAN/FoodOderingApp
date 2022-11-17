import React from 'react'


import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react/cjs/react.production.min'



export default function Meals() {
  return (
   <Fragment>
    <MealsSummary></MealsSummary>
    <AvailableMeals></AvailableMeals>
   </Fragment>
  )
}
