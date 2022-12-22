import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  //here useState is an empty object because at first there is nothing to load.
  // then when the data arrives from the Db through asynchronous function then those data are transfered to useSate and it is then refreshed again and is shown.
  const [meals, setMeals] = useState([]);

  const [isloading, setIsloading] = useState(false);

  const [Error, setError] = useState(false);

  useEffect(() => {
    // here aysnc is not used directly in useEffect but instead used by making a variable becasue useEffect only returns cleanup function which is synchronous in nature.

    const fetchMeals = async () => {
      setIsloading(true);
      // here fetching the data from firebase using the url provided in real time database
      // and at last /Meals is added to specify the node and /json is added beacuse firebase need it.
      const reponse = await fetch(
        "https://reactmeals-adcbb-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );
      // here reponse also returns a priomise so await is used.
      const reponseData = await reponse.json();

      // here a variable is decleared as an empty array beacuse the values comming from Db is in the form of key and value pair object.
      const loadedMeals = [];

      // here for-in loop is used so that we go through each and very id which in his case is key.
      // and push the data inside loadedMeals.
      for (const key in reponseData) {
        loadedMeals.push({
          id: key,
          name: reponseData[key].name,
          discription: reponseData[key].description,
          price: reponseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    // cathching Error
    fetchMeals().catch((error) => {
      setIsloading(false);
      setError(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (Error) {
    return (
      <section className={classes.mealsError}>
        <p>Oops an error occured while fetching the data.</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
