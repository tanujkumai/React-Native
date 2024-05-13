import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../Compnents/ui/PrimaryButton";
import Colors from "../constants/Color";
import Title from "../Compnents/ui/Title";
import InstructionText from "../Compnents/ui/InstructionText";
import Card from "../Compnents/ui/Card";

function StartGameScreen({ onPickNumber }) {
  const [enterNumber, setEnterNumber] = useState("");
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnterNumber(enteredText);
  }

  function resetInputHandler() {
    setEnterNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enterNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to a number between 1 to 99", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);

      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTopDistnace = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistnace }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enterNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton buttonPressed={resetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton buttonPressed={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;
// const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    // margin: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
