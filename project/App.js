import React from "react";
import { StyleSheet, View } from "react-native";
import Flavourtask from "./src/components/pages/flavourtask";

export default function App() {
  return (
    <View style={styles.container}>
      <Flavourtask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
