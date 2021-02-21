import React, { useRef } from "react";
import Icon from "@expo/vector-icons/FontAwesome5";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

export default function Login() {
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  return (
    <View style={styles.container}>
      <Text h3 h3Style={{ fontFamily: "Mali" }}>
        Polls
      </Text>

      <View style={styles.inputView}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Input
            placeholder="First Name"
            leftIcon={<Icon name="signature" size={18} color="black" />}
            returnKeyType="next"
            onSubmitEditing={() => lastNameInput.current.focus()}
            containerStyle={{ width: "50%" }}
          />
          <Input
            ref={lastNameInput}
            placeholder="Last Name"
            leftIcon={<Icon name="signature" size={18} color="black" />}
            returnKeyType="next"
            inputContainerStyle={{ width: "50%" }}
            onSubmitEditing={() => emailInput.current.focus()}
          />
        </View>
        <Input
          ref={emailInput}
          placeholder="Email"
          leftIcon={<Icon name="envelope" size={18} color="black" />}
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => passwordInput.current.focus()}
        />
        <Input
          ref={passwordInput}
          placeholder="Password"
          leftIcon={<Icon name="key" size={18} color="black" />}
          textContentType="password"
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={true}
          onSubmitEditing={() => confirmPasswordInput.current.focus()}
        />
        <Input
          ref={confirmPasswordInput}
          placeholder="Confirm Password"
          leftIcon={<Icon name="key" size={18} color="black" />}
          textContentType="password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <Button title="Register" buttonStyle={{ backgroundColor: "black" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    width: "80%",
    maxWidth: 500,
  },
});
