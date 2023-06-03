import React from "react";
import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";

export default function Fitness() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("flex flex-1")}>
      <View style={tailwind("w-72 h-10 bg-black ")}>
        <Text>Fitness</Text>
      </View>
    </View>
  );
}
