import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../molecules/icon";
import Headline from "../atoms/headline";
import Buttonnext from "../atoms/buttonnext";

export default function Flavourtask() {
  return (
    <View style={styles.container}>
      <Headline title="Wähle deinen Geschmack" />
      <View style={styles.iconsContainer}>
        <Icon flavourpic="vanilieIcon" name="Vanilie" />
        <Icon flavourpic="chocoIcon" name="Chocolade" />
      </View>
      <Buttonnext path="/fluid" name="Weiter" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
