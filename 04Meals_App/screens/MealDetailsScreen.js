import { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  function headerButtonPressHandler() {
    console.log("pressed !");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={"heart"} color={"white"} onTap={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealsDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textstyle={styles.detailstyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailstyle: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
