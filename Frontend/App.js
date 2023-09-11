import { StyleSheet, Text, View } from "react-native";
import Tab from "./src/navigation/Tab";
import HomeScreen from "./src/components/Home";
import AppBlock from "./src/components/AppBlock";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Foundation name="home" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="App Block"
          component={AppBlock}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ focused, color, size }) => {
              return <MaterialIcons name="app-blocking" size={24} color="black" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "column",
    backgroundColor: "#ff2",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
