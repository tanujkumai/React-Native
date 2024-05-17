import { Pressable, StyleSheet, Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ onTap, icon, color }) {
  return (
    <View style={styles.root}>
      <Pressable
        onPress={onTap}
        android_ripple={{ color: "#ccc" }}
        style={({pressed}) => pressed && styles.pressed}
      >
        <Ionicons name={icon} size={20} color={color} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  root: {
    overflow: Platform.OS === "ios" ? "Visbile" : " hidden",
  },

  pressed: {
    opacity: 0.7,
  },
});
