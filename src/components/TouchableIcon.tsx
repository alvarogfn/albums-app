import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type FontAwavesomeProps = React.ComponentProps<typeof FontAwesome>;

interface props extends FontAwavesomeProps {}

const TouchableIcon = ({ name, color, size }: props) => {
  return (
    <TouchableOpacity>
      <FontAwesome name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;

const styles = StyleSheet.create({});
