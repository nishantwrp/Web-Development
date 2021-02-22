import React from "react";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import router from "./router";

export default function App() {
  const [loaded] = useFonts({
    Mali: require("./assets/fonts/Mali-Regular.ttf"),
  });

  let currentPageComponent;
  currentPageComponent =
    router[useSelector((state) => state.navigation.currentPage)];

    if (!loaded) {
    return <ActivityIndicator />;
  } else {
    return currentPageComponent;
  }
}
