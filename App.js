import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <StackNavigator />
      </TailwindProvider>
    </NavigationContainer>
  );
}
