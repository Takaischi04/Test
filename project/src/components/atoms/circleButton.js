import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "react-router-dom";

export default function CircleButton({ path }) {
  return (
    <Link to={path} component={TouchableOpacity} style={styles.buttonWrapper}>
      <Ionicons name="add" size={24} color="white" style={styles.icon} />
    </Link>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    marginTop: 50,
    textDecorationLine: "none", // This ensures that the Link does not have default text decoration
  },
});
