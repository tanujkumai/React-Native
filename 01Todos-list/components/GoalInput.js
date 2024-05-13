import { useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnterGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnterGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholder="your course Goles"
        />
        <View style={styles.textInputButton}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color={"#5e0acc"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
    borderRadius: 6,
  },
  textInputButton: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
