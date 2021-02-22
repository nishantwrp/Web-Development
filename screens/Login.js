import React, { useRef } from "react";
import Icon from "@expo/vector-icons/FontAwesome5";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { useDispatch } from 'react-redux';


export default function Login() {
  const dispatch = useDispatch()

  function navigateToRegister() {
    dispatch({ type: "navigation/navigateTo", payload: "Register" });
  }

  const passwordInput = useRef();

  return (
    <View style={styles.container}>
      <Text h3 h3Style={{fontFamily: "Mali"}}>Polls</Text>

      <View style={styles.inputView}>
        <Input
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
          secureTextEntry={true}
        />
        <Button title="Login" buttonStyle={{backgroundColor: "black"}} containerStyle={{width: "100%"}} />
        <Text style={{paddingTop: 10}}>New to Polls? <Text style={{textDecorationLine: "underline"}} onPress={navigateToRegister}>Register Here</Text></Text>
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
    justifyContent: "center",
    alignItems: "center"
  },
});
