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
  const [enteredGoleText, setEnterGoleText] = useState("");

  function goleInputHandler(enteredText) {
    setEnterGoleText(enteredText);
  }

  function addGoleHandler() {
    props.onAddGoal(enteredGoleText);
    setEnterGoleText("");
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
          onChangeText={goleInputHandler}
          value={enteredGoleText}
          placeholder="your course Goles"
        />
        <View style={styles.textInputButton}>
          <View style={styles.button}>
            <Button
              title="Add gole"
              onPress={addGoleHandler}
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
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
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
