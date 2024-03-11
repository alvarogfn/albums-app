import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TouchableIcon from "./TouchableIcon";

interface props {
  name: string;
  author: string;
}

const MusicName = ({ name, author }: props) => {
  return (
    <View style={styles.container}>
      <TouchableIcon name="exclamation-circle" color="#ffffff" size={40} />
      <View style={styles.label}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
      <TouchableIcon name="ellipsis-v" color="#ffffff" size={40} />
    </View>
  );
};

export default MusicName;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,

    width: "100%",

    display: "flex",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  label: {
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "900",
  },
  author: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 15,
  },
});
