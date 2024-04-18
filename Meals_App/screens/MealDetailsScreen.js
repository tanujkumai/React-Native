import { Text, View } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is meal detail screen({mealId})</Text>
    </View>
  );
}

export default MealDetailsScreen;
