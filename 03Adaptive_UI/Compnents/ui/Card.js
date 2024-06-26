import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Color";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    alignItems: "center",
    marginTop: deviceWidth < 350 ? 18 : 34,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
