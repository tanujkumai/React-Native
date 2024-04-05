import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreens( navigation ) {
  function renderCategoryItem(itemData) {
    function pressHandeler() {
      navigation.navitage("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandeler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}.
      numColumns={2}
    />
  );
}

export default CategoriesScreens;
