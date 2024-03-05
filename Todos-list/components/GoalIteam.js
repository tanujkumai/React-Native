import { StyleSheet, View, Text } from "react-native";
function GoalIteam(props) {
  return (
    <View style={styles.goleIteam}>
      <Text style={styles.goleText}>{props.text}</Text>
    </View>
  );
}

export default GoalIteam;

const styles = StyleSheet.create({
  goleIteam: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goleText: {
    color: "white",
  },
});
