import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  <View>
    <Pressable>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text>{duration}</Text>
        <Text>{complexity}</Text>
        <Text>{affordability}</Text>
      </View>
    </Pressable>
  </View>;
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color: "black",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
