import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalIteam(props) {
  return (
    <View style={styles.goleIteam}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressData)=> pressData.pressed && styles.pressItem}
      >
        <Text style={styles.goleText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalIteam;

const styles = StyleSheet.create({
  goleIteam: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressItem:{
    opacity:0.5,
  },
  goleText: {
    color: "white",
    padding: 8,
  },
});
