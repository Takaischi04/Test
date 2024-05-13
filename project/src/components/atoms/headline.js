import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function headline({ title }) {
  return (
    <View style={styles.headline}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    paddingTop: 20, // Oberer Innenabstand für den Abstand zum oberen Bildschirmrand
    alignItems: "center",
  },
  title: {
    color: "black", // Schwarzer Text
    fontSize: 32, // Größere Schriftgröße
    fontWeight: "bold", // Fett gedruckter Text
  },
});
