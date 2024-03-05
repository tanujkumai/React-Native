import { useState } from "react";

import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
        <TextInput
          style={styles.textInput}
          onChangeText={goleInputHandler}
          value={enteredGoleText}
          placeholder="your course Goles"
        />
        <View style={styles.textInputButton}>
          <View style={styles.button}>
            <Button title="Add gole" onPress={addGoleHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} />
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
    padding:16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  textInputButton: {
    flexDirection: "row",
    marginTop:16
  },
  button: {
    width: 100,
    marginHorizontal:8,
  },
});
