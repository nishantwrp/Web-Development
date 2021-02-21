import React from "react";
import { Header } from "react-native-elements";

export default function Header() {
  return (
    <Header
      leftComponent={{ icon: "menu" }}
      centerComponent={{ text: 'POLLS' }}
      rightComponent={{ icon: "home" }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
      }}
    />
  );
}
