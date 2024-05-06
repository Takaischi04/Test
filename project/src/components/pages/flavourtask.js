import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../molecules/icon";

export default function Flavourtask() {
  return (
    <View style={styles.iconsContainer}>
      <Icon flavourpic="vanilieIcon" />
      <Icon flavourpic="chocoIcon" />
      <Icon flavourpic="waterIcon" />
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
