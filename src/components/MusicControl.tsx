import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TouchableIcon from "./TouchableIcon";

const MusicControl = () => {
  const color = "#fff";
  const size = 30;

  return (
    <View style={styles.container}>
      <TouchableIcon name="thumbs-o-down" color={color} size={size} />
      <TouchableIcon name="step-backward" color={color} size={size} />
      <TouchableIcon name="pause" color={color} size={size} />
      <TouchableIcon name="step-forward" color={color} size={size} />
      <TouchableIcon name="thumbs-o-up" color={color} size={size} />
    </View>
  );
};

export default MusicControl;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
