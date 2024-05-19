// import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/FavoritesContext";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoritesMealCxt = useContext(FavoritesContext);
  const favoriteMealId = useSelector((state) => state.favoriteMeals.ids );

  const favoriteMeal = MEALS.filter((meal) =>
    favoriteMealId.includes(meal.id)
  );
  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeal} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
