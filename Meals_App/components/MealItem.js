import { View, Text, StyleSheet } from "react-native";

function MealItem({ title }) {
  <View>
    <Text>{title}</Text>
  </View>;
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color: "black",
  },
});
