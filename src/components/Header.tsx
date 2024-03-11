import { StyleSheet, View } from "react-native";
import React from "react";
import Title from "./Title";
import Input from "./Input";

export default function Header() {
  return (
    <View style={styles.container}>
      <Title title="Music" />
      <Input icon="search" placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
});
