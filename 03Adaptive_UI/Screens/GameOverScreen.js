import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../Compnents/ui/Title";
import Colors from "../constants/Color";
import PrimaryButton from "../Compnents/ui/PrimaryButton";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { height, width } = useWindowDimensions();

  let imageSize = 300;

  if (width > 380) {
    imageSize = 150;
  }

  if (height < 380) {
    imageSize = 150;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootcontainer}>
        <Title> GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/Images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your Phone needed{" "}
          <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>
        </Text>
        <PrimaryButton buttonPressed={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  rootcontainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth < 350 ? 75 : 150,
    // height: deviceWidth < 350 ? 150 : 300,
    // width: deviceWidth < 350 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
