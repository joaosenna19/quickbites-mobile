import { View, Text, StyleSheet, Image } from "react-native";
import React, { useCallback, useEffect } from "react"; // Import React and useCallback
import LoginModal from "../components/LoginModal";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const guacamole = require("../assets/images/guacamole.png");

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Light: require("../assets/fonts/Montserrat-Light.ttf"),
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const hideSplashScreen = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    hideSplashScreen();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Image source={guacamole} style={styles.logo} />
        <Text style={styles.textStyle}>QuickBites</Text>
      </View>
        <LoginModal />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 10,
    fontSize: 45,
    fontFamily: "SemiBold",
    color: "white",
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#0F243B",
  },
  logoContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 150,
  },
  logo: {
    height: 75,
    width: 75,
    marginRight: 15,
  },
});

export default App;
