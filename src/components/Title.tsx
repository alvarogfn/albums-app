import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface props {
  title: string;
}

const Title = ({ title }: props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "900",
    fontSize: 40,
    color: "#ffffff",
    marginVertical: 10,
  },
});
