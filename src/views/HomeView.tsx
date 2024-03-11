import { StyleSheet, View } from "react-native";
import React from "react";
import TopTabsNavigation from "../components/Navigations/TopTabsNavigation";
import Header from "../components/Header";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopTabsNavigation />
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#222222",
    paddingHorizontal: 10,
  },
});
