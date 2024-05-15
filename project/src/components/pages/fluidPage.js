import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../molecules/icon";
import Headline from "../atoms/headline";

export default function FluidPage() {
  return (
    <View style={styles.container}>
      <Headline title="Wähle deinen Mischflüssigkeit" />
      <View style={styles.iconsContainer}>
        <Icon flavourpic="waterIcon" name="Wasser" path="/supplement" />
        <Icon flavourpic="milkIcon" name="Milch" path="/supplement" />
      </View>
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
