import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Color";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 350 ? 24 : 34,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
