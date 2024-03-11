import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StackRoutes } from "../components/Navigations/StackNavigation";
import Album from "../../data/albums";
import albums from "../../data/albums";
import { Music } from "../model/Music";
import MusicName from "../components/MusicName";
import MusicControl from "../components/MusicControl";
import MusicElapsed from "../components/MusicElapsed";

type props = StackScreenProps<StackRoutes, "Music">;

const MusicView = ({ route }: props) => {
  const [music, setMusic] = React.useState<Music | null>(null);

  React.useEffect(() => {
    if (route.params !== undefined) {
      const { id, album } = route.params;

      const music =
        albums[album.toLowerCase()].albums.find((music) => {
          return music.id === id;
        }) ?? null;

      setMusic(music);
    }
  }, [route.params]);

  if (music === null) return null;

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <Image
          style={styles.music}
          source={{ uri: music.poster }}
          resizeMode="cover"
        />
      </View>
      <MusicName name={music.name} author={music.author} />
      <MusicElapsed duration={120} />
      <MusicControl />
    </View>
  );
};

export default MusicView;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#222222",
    height: "100%",
    paddingBottom: 30,
  },
  video: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "60%",
    backgroundColor: "#000000",
  },
  music: {
    flexGrow: 1,
    height: "70%",
    width: "100%",
  },
});
