import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Icon from "./src/components/atoms/icon";

export default function App() {
  return (
    <View style={styles.container}>
      <Icon />

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
});
