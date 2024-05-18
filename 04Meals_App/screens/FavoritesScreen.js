import { useContext } from "react";
import {Text} from "react-native"
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/FavoritesContext";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoritesMealCxt = useContext(FavoritesContext);
  if(!favoritesMealCxt) {
    return <Text>no found</Text>
  }

  const favoriteMeal = MEALS.filter((meal) =>
    favoritesMealCxt.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeal} />;
}

export default FavoritesScreen;
