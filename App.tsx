import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
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



// import { NavigationContainer } from "@react-navigation/native";
// // import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// // import { GestureHandlerRootView } from "react-native-gesture-handler";
// // import "./global.css";
// import RootNavigator from "./navigation/RootNavigator";

// import React from "react";
// import "./global.css";

// export default function App() {
//   return (
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });