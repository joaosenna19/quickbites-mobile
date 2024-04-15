import { View, Text, StyleSheet, Image } from "react-native";
import { router } from 'expo-router'
import { Button } from 'react-native-paper'

export default function NavigationIcon({ imageSource, isActive, page }) {
  return (
    <View style={[styles.container, isActive && styles.active]}>
      <Image
        source={imageSource}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
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
