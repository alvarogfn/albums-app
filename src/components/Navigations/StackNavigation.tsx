import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../../views/HomeView";
import MusicView from "../../views/MusicView";

export type StackRoutes = {
  Home: undefined;
  Music: { id: number; album: string };
};

const Stack = createStackNavigator<StackRoutes>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Music" component={MusicView} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
