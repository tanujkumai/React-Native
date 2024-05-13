import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreens from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#893302" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24180f" },
          }}
        >
          <stack.Screen
            name="MealsCategory"
            component={CategoriesScreens}
            options={{
              title: "All Category",
            }}
          />
          <stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <stack.Screen name="MealDetail" component={MealDetailsScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
