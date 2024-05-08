import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../molecules/icon";
import Headline from "../atoms/headline";

export default function Flavourtask() {
  return (
    <View>
      <Headline title="Was geht" />
      <View style={styles.iconsContainer}>
        <Icon flavourpic="vanilieIcon" name="Vanilie" />
        <Icon flavourpic="chocoIcon" name="Chocolade" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
