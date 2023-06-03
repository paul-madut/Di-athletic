import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Diabetes from "./Screens/Diabetes";
import Fitness from "./Screens/Fitness";
import Food from "./Screens/Food";
import WelcomeWindow from "./Windows/WelcomeWindow";
const Stack = createStackNavigator();

const StackNavigator = () => {
  const user = true;
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Fitness" component={Fitness} />
          <Stack.Screen name="Diabetes" component={Diabetes} />
          <Stack.Screen name="Food" component={Food} />
        </>
      ) : (
        <Stack.Screen name="WelcomeWindow" component={WelcomeWindow} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
