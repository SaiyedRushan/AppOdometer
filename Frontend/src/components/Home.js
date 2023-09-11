import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "column",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
