import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalIteam(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goleIteam}>
        <Text style={styles.goleText}>{props.text}</Text>
      </View>
    </Pressable>
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
