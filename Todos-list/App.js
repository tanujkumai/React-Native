import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalIteam from "./components/GoalIteam";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [coursGoals, setCourseGoals] = useState([]);
  const [isModleVisible, setModelVisible] = useState(false);

  function startAddGoalHandler() {
    setModelVisible(true);
  }

  function endAddGoalHandler() {
    setModelVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function onDeleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="add new goals"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={isModleVisible}
          onAddGoal={addGoalHandler}
          onCancle={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={coursGoals}
            renderItem={(itemData) => {
              return (
                <GoalIteam
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={onDeleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
    color: "#",
  },
  goalsContainer: {
    flex: 5,
  },
});
