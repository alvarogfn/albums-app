import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface props {
  duration: number;
}
const MusicElapsed = ({ duration }: props) => {
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (elapsed >= duration) return clearInterval(interval);
      setElapsed((last) => last + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setElapsed, elapsed]);

  function secondsToMinutes(value: number) {
    const time = new Date(Date.UTC(1970, 0, 1));
    time.setSeconds(value);
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    function integerDigits(amount: number) {
      return Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }).format(amount);
    }

    return `${integerDigits(minutes)}:${integerDigits(seconds)}`;
  }

  const redPointer = (100 * elapsed) / duration / 100;
  const grayPointer = redPointer * 1.3;

  return (
    <View>
      <View>
        <LinearGradient
          style={styles.elapsedBar}
          colors={["#f00", "#f00", "#555", "#555", "#333", "#333"]}
          locations={[
            redPointer,
            redPointer,
            redPointer,
            grayPointer,
            grayPointer,
            0.5,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        ></LinearGradient>
      </View>
      <View>
        <View style={styles.duration}>
          <Text style={styles.time}>{secondsToMinutes(elapsed)}</Text>
          <Text style={styles.time}>{secondsToMinutes(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

export default MusicElapsed;

const styles = StyleSheet.create({
  duration: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    padding: 10,
    color: "white",
  },
  elapsedBar: {
    width: "100%",
    height: 5,
  },
  time: {
    color: "#fff",
  },
});
