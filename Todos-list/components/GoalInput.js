import { useState } from "react";

import { StyleSheet } from "react-native";

function GoalInput(props) {
    
  const [enteredGoleText, setEnterGoleText] = useState("");

  function goleInputHandler(enteredText) {
    setEnterGoleText(enteredText);

    function addGoleHandler(enteredGoleText) {
      props.onAddGoal;
      setEnterGoleText("");
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goleInputHandler}
        placeholder="your course Goles"
      />
      <Button onPress={addGoleHandler} title="Add gole" />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
