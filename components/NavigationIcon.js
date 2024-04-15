import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native-paper";

export default function NavigationIcon({ imageSource, isActive, page }) {
  return (
    <TouchableOpacity onPress={() => router.push(page)}>
      <View style={[styles.container, isActive && styles.active]}>
        <Image source={imageSource} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 40,
  },
  active: {
    backgroundColor: "white",
  },
  image: {
    width: 40,
    height: 40,
  },
});
