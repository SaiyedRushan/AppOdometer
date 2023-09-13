import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, PermissionsAndroid, Platform } from "react-native";
import { Linking } from "react-native";

export default function HomeScreen() {
  // const [usageData, setUsageData] = useState([]);

  useEffect(() => {
    const requestUsagePermission = async () => {
      if (Platform.OS === "android") {
        try {
          Linking.openSettings();

          // console.log(PermissionsAndroid.PERMISSIONS);
          // const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.PACKAGE_USAGE_STATS);
          // if (granted) {
          // } else {
          //   console.log("Opening Settings");
          //   Linking.openSettings();
          // }

          // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //   // const { UsageStatsManager } = require("react-native").NativeModules;
          //   const now = new Date().getTime();
          //   const oneDayAgo = now - 24 * 60 * 60 * 1000; // 24 hours ago

          //   const stats = await UsageStatsManager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, oneDayAgo, now);
          //   console.log(stats);
          // } else {
          //   console.log("Usage permission denied");
          // }
        } catch (err) {
          console.log(err);
          console.warn(err);
        }
      }
    };
    requestUsagePermission();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Good Morning Rushan</Text>
        <Text style={styles.header}>Your Weekly Summary</Text>
        {/* bar chart that shows the number of hours spent each day */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "column",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
