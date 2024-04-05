import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreens from "./screens/CategoriesScreens";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="MealsCategory" component={CategoriesScreens} />
          <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </stack.Navigator>
        
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
