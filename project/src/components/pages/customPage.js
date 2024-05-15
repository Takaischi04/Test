import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../molecules/icon";
import Headline from "../atoms/headline";
import Buttonnext from "../atoms/buttonnext";
import DiscreteSlider from "../atoms/slider";

export default function customPage() {
  return (
    <View style={styles.container}>
      <Headline title="Wähle deinen Dosierung" />
      <View style={styles.iconsContainer}>
        <Icon flavourpic="zinkIcon" name="Zink" />
        <DiscreteSlider />
        <Icon flavourpic="magIcon" name="Magnesium" />
        <DiscreteSlider />
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
