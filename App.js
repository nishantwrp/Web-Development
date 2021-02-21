import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Register from "./screens/Register";

export default function App() {
  const [loaded] = useFonts({
    Mali: require('./assets/fonts/Mali-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <ActivityIndicator />
    );
  } else {
    return (
      <SafeAreaProvider>
        <Register />
      </SafeAreaProvider>
    );
  }
}
