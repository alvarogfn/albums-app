import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackRoutes } from "../components/Navigations/StackNavigation";
import { Album } from "../model/Album";
import albums from "../../data/albums";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import type { TabRoutes } from "../components/Navigations/TopTabsNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

type props = MaterialTopTabScreenProps<TabRoutes>;
type stack = StackNavigationProp<StackRoutes, "Home">;

const GenreView = ({ route }: props) => {
  const stackNavigation = useNavigation<stack>();
  const [data, setData] = React.useState<Album | null>(null);

  React.useEffect(() => {
    if (route.params) {
      const { id } = route.params;
      const data = albums[id.toLowerCase()] ?? albums.rock;
      setData(data);
    }
  }, [route.params]);

  function onPress(id: number) {
    stackNavigation.navigate("Music", { id, album: route.name });
  }

  if (data === null) return null;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return <Text style={styles.title}>{data.title}</Text>;
        }}
        style={styles.list}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={data.albums}
        keyExtractor={(album) => album.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => onPress(item.id)}
            >
              <Image
                style={styles.image}
                source={{ uri: item.poster }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GenreView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    display: "flex",
    height: "100%",
  },
  list: {
    backgroundColor: "#222",
  },
  listContainer: {
    backgroundColor: "#222",
    justifyContent: "space-between",
    display: "flex",
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "900",
    color: "#fff",
  },
  card: {
    marginVertical: 10,
    height: 175,
    width: 175,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderStyle: "solid",
  },
});
