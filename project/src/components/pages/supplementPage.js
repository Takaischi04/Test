import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../molecules/icon";
import Headline from "../atoms/headline";
import Buttonnext from "../atoms/buttonnext";

export default function supplementpage() {
  return (
    <View style={styles.container}>
      <Headline title="Wähle deinen Zusatzstoffe" />
      <View style={styles.iconsContainer}>
        <Icon flavourpic="zinkIcon" name="Zink" />
        <Icon flavourpic="magIcon" name="Magnesium" />
      </View>
      <Buttonnext path="/fluid" name="Fertig mit Zusatzstoffe" />
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
