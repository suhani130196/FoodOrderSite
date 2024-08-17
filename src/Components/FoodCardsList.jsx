import { useEffect, useState } from "react";
import AvailableFoodCards from "./FoodCard";

function FoodCardsList() {
  const [loadedMeals, setLoadedmeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const loadedMeal = await response.json();
      console.log(loadedMeal);
      setLoadedmeals(loadedMeal);
    }
    fetchMeals();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 w-[1000px] m-auto">
      {loadedMeals.map((meal) => (
        <AvailableFoodCards key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default FoodCardsList;
