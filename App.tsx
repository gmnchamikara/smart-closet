// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import "./global.css";
// import RootNavigator from "./navigation/RootNavigator";

// export default function App() {
//   return (
//     <GestureHandlerRootView>
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//     </GestureHandlerRootView>
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


import React from "react";
import { View, Text } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-lg font-bold text-red-600">
        Hello, NativeWind 👋
      </Text>
      <Text className="text-lg font-bold text-green-600">
        Hello !!!, NativeWind 👋
      </Text>
      <Text className="text-base text-gray-700 mt-2">
        Styled with Tailwind classes...
      </Text>
    </View>
  );
}
