import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData, navigation) {
  function pressHandler() {
    navigation.navigate("MealsOverview");
  }

  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData, navigation)}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
