import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "#9c0202",
          drawerInactiveTintColor: "#120051",
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen ",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: "Welcome Screen ",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator> */}

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#9c0202",
          tabBarInactiveTintColor: "#120051",
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarLabel: "Welcome Screen ",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: "Welcome Screen ",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
