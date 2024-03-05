import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalIteam from "./components/GoalIteam";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [coursGoles, setCourseGoles] = useState([]);

  function addGoleHandler(enteredGoleText) {
    setCourseGoles((currentCourseGoles) => [
      ...currentCourseGoles,
      { text: enteredGoleText, id: Math.random().toString() },
    ]);
  }

  function onDeleteGoleHandler(id) {
    setCourseGoles((currentCourseGoles) => {
      return currentCourseGoles.filter((goal)=> goal.id !== id )
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoleHandler} />
      <View style={styles.golesContainer}>
        <FlatList
          data={coursGoles}
          renderItem={(itemData) => {
            return (
              <GoalIteam
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={onDeleteGoleHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  golesContainer: {
    flex: 5,
  },
});
