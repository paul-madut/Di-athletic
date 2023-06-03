import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
function WelcomeWindow() {
  return (
    <>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.background}
      ></ImageBackground>

      <View>
        <Text>Get Started</Text>
      </View>
    </>
  );
}

export default WelcomeWindow;
