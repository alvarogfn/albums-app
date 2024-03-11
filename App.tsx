import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StackNavigation from "./src/components/Navigations/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#222222",
  },
});
