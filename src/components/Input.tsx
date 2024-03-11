import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface props {
  icon?: "search";
  placeholder?: string;
}
const Input = ({ placeholder, icon }: props) => {
  const [focus, setFocus] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      {!focus && icon && (
        <FontAwesome style={styles.icon} name={icon} size={25} color="#555" />
      )}
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.input}
        placeholder={placeholder}
        selectionColor="#aaa"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,

    position: "relative",

    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  icon: {
    padding: 10,
    paddingRight: 0,
  },
  input: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 17,
  },
});
