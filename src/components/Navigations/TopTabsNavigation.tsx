import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import GenreView from "../../views/GenreView";

export type TabRoutes = {
  All: { id: string };
  Rock: { id: string };
  Pop: { id: string };
};

const Tab = createMaterialTopTabNavigator<TabRoutes>();

export default function TopTabsNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabNavigation {...props} />}>
      <Tab.Screen
        name="All"
        initialParams={{ id: "All" }}
        component={GenreView}
      />
      <Tab.Screen
        name="Rock"
        initialParams={{ id: "Rock" }}
        component={GenreView}
      />
      <Tab.Screen
        name="Pop"
        initialParams={{ id: "Pop" }}
        component={GenreView}
      />
    </Tab.Navigator>
  );
}

interface props extends MaterialTopTabBarProps {}

function CustomTabNavigation({ state, descriptors, navigation }: props) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index == index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            canPreventDefault: true,
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { id: route.name });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            testID={options.tabBarTestID}
            key={index}
            style={[
              isFocused ? styles.buttonActive : styles.buttonInactive,
              styles.button,
            ]}
          >
            <Text style={isFocused ? styles.textActive : styles.textInactive}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginTop: 20,
    justifyContent: "space-between",
  },
  textInactive: {
    color: "#ffffff",
  },
  textActive: {
    color: "#000000",
  },
  buttonActive: {
    backgroundColor: "#ffffff",
  },
  buttonInactive: {
    backgroundColor: "transparent",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    height: 40,
    width: 100,
    borderRadius: 20,
  },
});
