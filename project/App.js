import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Icon from "./src/components/molecules/icon";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Icon flavourpic="vanilieIcon" />
        <Icon flavourpic="chocoIcon" />
        <Icon flavourpic="waterIcon" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
